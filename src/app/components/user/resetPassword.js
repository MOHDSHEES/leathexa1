"use client";
import React, { useContext, useRef, useState } from "react";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { MyContext } from "@/src/context";
import KeyIcon from "@mui/icons-material/Key";
import { closeMessage } from "../functions/message";
import axios from "axios";
import DOMPurify from "dompurify";
import Joi from "joi";

const ResetPassword = () => {
  const { user, messageApi, setBackDropOpen, csrfToken } =
    useContext(MyContext);
  const [edit, setEdit] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [pass, setPass] = useState(true);
  const passInputRef = useRef(null);
  const [confrmPass, setConfrmPass] = useState("");
  const [state, setState] = useState({
    oldPassword: "",
    newPassword: "",
  });

  function handelEdit() {
    setEdit((edit) => !edit);
    if (edit) {
      passInputRef.current.blur();
      reset();
    } else passInputRef.current.focus();
  }

  const reset = () => {
    setState({
      oldPassword: "",
      newPassword: "",
    });
    setConfrmPass("");
    setPass(true);
  };

  async function handleUpdate(e) {
    e.preventDefault();
    const { error } = passwordSchema.validate({
      oldPassword: state.oldPassword,
      newPassword: state.newPassword,
      confirmPass: confrmPass,
    });
    if (error) {
      closeMessage(messageApi, error.details[0].message, "error");
      return;
    }
    if (confrmPass === state.newPassword) {
      setDisabled(true);
      setBackDropOpen(true);
      const { data } = await axios.post("/api/user/editPassword", {
        csrfToken: csrfToken,
        email: user.email,
        oldPassword: state.oldPassword,
        details: {
          password: DOMPurify.sanitize(state.newPassword),
        },
      });
      if (data.status === 200) {
        closeMessage(messageApi, "Updated Successfully", "success");
        setEdit(false);
        reset();
        passInputRef.current.blur();
      } else if (data.status === 501) {
        closeMessage(messageApi, data.msg, "error");
        signOut();
      } else {
        closeMessage(messageApi, data.msg, "error");
        passInputRef.current.focus();
      }
    } else {
      closeMessage(messageApi, "Password Mismatch", "error");
    }
    setDisabled(false);
    setBackDropOpen(false);
  }

  return (
    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div>
          <Stack
            className="mb-4"
            style={{ alignItems: "center" }}
            direction="row "
          >
            <h5 className="text-lg font-semibold ">Change password :</h5>
            <Button
              onClick={handelEdit}
              sx={{ marginLeft: "auto" }}
              variant="text"
            >
              {edit ? "Cancel" : "Edit"}
            </Button>
          </Stack>
          <form onSubmit={handleUpdate}>
            <fieldset disabled={disabled}>
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <TextField
                    label="Old Password"
                    type={pass ? "password" : "text"}
                    id="oldPassword"
                    inputRef={passInputRef}
                    sx={{ mt: 1, width: "100%" }}
                    onChange={(e) =>
                      setState({
                        ...state,
                        oldPassword: DOMPurify.sanitize(e.target.value),
                      })
                    }
                    value={state.oldPassword}
                    required
                    InputProps={{
                      readOnly: edit ? false : true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div>
                  <TextField
                    label="New Password"
                    id="newPassword"
                    type={pass ? "password" : "text"}
                    sx={{ mt: 1, width: "100%" }}
                    onChange={(e) =>
                      setState({
                        ...state,
                        newPassword: DOMPurify.sanitize(e.target.value),
                      })
                    }
                    value={state.newPassword}
                    required
                    InputProps={{
                      readOnly: edit ? false : true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div>
                  <TextField
                    label="Confirm Password"
                    id="confirmPass"
                    type={pass ? "password" : "text"}
                    sx={{ mt: 1, width: "100%" }}
                    onChange={(e) =>
                      setConfrmPass(DOMPurify.sanitize(e.target.value))
                    }
                    value={confrmPass}
                    required
                    InputProps={{
                      readOnly: edit ? false : true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>
              {edit && (
                <Stack direction="column" sx={{ mt: 1 }}>
                  <Button
                    onClick={() => setPass((pass) => !pass)}
                    variant="text"
                  >
                    Show/Hide Password
                  </Button>
                  <button
                    disabled={!edit}
                    type="sumbit"
                    className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md mt-5"
                  >
                    Save password
                  </button>
                </Stack>
              )}
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

const passwordSchema = Joi.object({
  oldPassword: Joi.string(),
  newPassword: Joi.string().min(6),
  confirmPass: Joi.string().min(6),
});
