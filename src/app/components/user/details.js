"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "@/src/context";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import axios from "axios";
import { closeMessage } from "../functions/message";
import { signOut } from "next-auth/react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DOMPurify from "dompurify";
import Joi from "joi";

const Details = () => {
  const { user, messageApi, setUser, setBackDropOpen, csrfToken } =
    useContext(MyContext);
  const [edit, setEdit] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const nameInputRef = useRef(null);
  const [state, setState] = useState({
    name: "",
    email: "",
    whatsAppNo: "",
  });
  useEffect(() => {
    if (user && user.name)
      setState({
        name: user.name,
        email: user.email,
        whatsAppNo: user.whatsAppNo ? user.whatsAppNo : "",
      });
  }, [user]);
  function handelEdit() {
    setEdit((edit) => !edit);
    if (edit) {
      nameInputRef.current.blur();
      reset();
    } else nameInputRef.current.focus();
  }

  const reset = () => {
    setState({
      name: user.name,
      email: user.email,
      whatsAppNo: user.whatsAppNo ? user.whatsAppNo : "",
    });
  };
  async function handleUpdate(e) {
    e.preventDefault();
    const { error } = userSchema.validate({
      name: state.name,
      whatsAppNo: state.whatsAppNo,
    });
    if (error) {
      closeMessage(messageApi, error.details[0].message, "error");
      return;
    }
    setDisabled(true);
    setBackDropOpen(true);
    const { data } = await axios.post("/api/user/editDetails", {
      csrfToken: csrfToken,
      email: user.email,
      details: {
        name: DOMPurify.sanitize(state.name),
        whatsAppNo: DOMPurify.sanitize(state.whatsAppNo),
      },
    });
    if (data.status === 200) {
      setUser(data.data);
      closeMessage(messageApi, "Updated Successfully", "success");
      setEdit(false);
      nameInputRef.current.blur();
    } else if (data.status === 501) {
      closeMessage(messageApi, data.msg, "error");
      signOut();
    } else {
      closeMessage(messageApi, data.msg, "error");
      nameInputRef.current.focus();
    }
    setDisabled(false);
    setBackDropOpen(false);
  }

  return (
    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white text-black dark:bg-gray-100 light:text-black">
      <Stack className="mb-4" style={{ alignItems: "center" }} direction="row ">
        <h5 className="text-lg font-semibold ">Personal Detail :</h5>
        <Button onClick={handelEdit} sx={{ marginLeft: "auto" }} variant="text">
          {edit ? "Cancel" : "Edit"}
        </Button>
      </Stack>
      <form onSubmit={handleUpdate}>
        <fieldset disabled={disabled}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              {/* <label className="form-label font-medium">
              Name : <span className="text-red-600">*</span>
            </label>
            <div className="form-icon relative mt-2"> */}
              <TextField
                label="Name"
                id="name"
                inputRef={nameInputRef}
                sx={{ mt: 1, width: "100%" }}
                onChange={(e) =>
                  setState({
                    ...state,
                    name: DOMPurify.sanitize(e.target.value),
                  })
                }
                value={state.name}
                required
                InputProps={{
                  readOnly: edit ? false : true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {/* </div> */}
            </div>
            <div>
              <TextField
                label="Email"
                id="email"
                sx={{ mt: 1, width: "100%" }}
                value={state.email}
                required
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <TextField
                label="whatsApp No."
                id="whatsappNo"
                sx={{ mt: 1, width: "100%" }}
                onChange={(e) =>
                  setState({
                    ...state,
                    whatsAppNo: DOMPurify.sanitize(e.target.value),
                  })
                }
                value={state.whatsAppNo}
                InputProps={{
                  readOnly: edit ? false : true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <WhatsAppIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          {edit && (
            <button
              disabled={!edit}
              type="submit"
              id="submit"
              name="send"
              className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md mt-5"
            >
              Save Changes
            </button>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default Details;

const userSchema = Joi.object({
  name: Joi.string(),
  whatsAppNo: Joi.string().min(10),
});
