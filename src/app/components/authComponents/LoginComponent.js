"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MyContext } from "../../../context";
// import BackdropComponent from "./functions/backDrop";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { signIn } from "next-auth/react";
import { closeMessage } from "../functions/message";
import BackToHome from "../back-to-home";

const LoginComponent = () => {
  //   const [validated, setValidated] = useState(false);
  const [passEye, setPassEye] = useState(false);
  const { messageApi, setBackDropOpen } = useContext(MyContext);
  const [disable, setdisable] = useState(false);
  //   const [backDropOpen, setBackDropOpen] = useState(false);

  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  // function clear() {
  //   setstate({
  //     email: "",
  //     password: "",
  //   });
  // }

  const Inputchange = (event) => {
    const { name, value } = event.target;
    if (name === "email")
      setstate({
        ...state,
        [name]: value.trim().toLowerCase(),
      });
    else
      setstate({
        ...state,
        [name]: value.trim(),
      });
  };
  //   console.log(state);
  async function submitHandler(e) {
    e.preventDefault();
    setBackDropOpen(true);
    setdisable(true);
    const result = await signIn("credentials", {
      ...state,
      redirect: false,
      // callbackUrl: "/",
    });
    // const { data: da } = await axios.post("/api/login", {
    //   state,
    // });
    if (result.status === 200) {
      // router.replace("/dashboard");
      setdisable(false);
      setBackDropOpen(false);
    } else if (result.status === 401) {
      setBackDropOpen(false);
      closeMessage(messageApi, "Wrong credentials...", "error");

      setdisable(false);
    } else {
      setBackDropOpen(false);
      closeMessage(messageApi, result.error, "error");
      setdisable(false);
    }

    //   console.log(data);

    // setValidated(true);
  }

  return (
    <>
      <section className="md:h-screen py-36 flex items-center bg-orange-500/10 dark:bg-orange-500/20 bg-[url('/images/hero/bg-shape.png')] bg-center bg-no-repeat bg-cover">
        <div className="container relative">
          <div className="grid grid-cols-1">
            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
              <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                <div className="relative md:shrink-0">
                  <Image
                    src="/images/login.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="lg:h-full h-full w-full object-cover md:h-[34rem]"
                    alt=""
                  />
                </div>

                <div className="p-8 lg:px-20">
                  <div className="text-center">
                    <Link href="/">
                      <Image
                        src="/images/logo-dark.png"
                        width={114}
                        height={22}
                        className="mx-auto block dark:hidden"
                        alt=""
                      />
                      <Image
                        src="/images/logo-light.png"
                        width={114}
                        height={22}
                        className="mx-auto hidden dark:block"
                        alt=""
                      />
                    </Link>
                  </div>

                  <form
                    onSubmit={submitHandler}
                    className="text-start lg:py-20 py-8"
                  >
                    <fieldset disabled={disable}>
                      <div className="grid grid-cols-1">
                        <div className="mb-4">
                          {/* <label className="font-semibold" htmlFor="LoginEmail">
                            Email Address:
                          </label> */}
                          <TextField
                            id="LoginEmail"
                            sx={{ width: "100%" }}
                            type="email"
                            name="email"
                            onChange={Inputchange}
                            value={state.email}
                            label="Email"
                            variant="outlined"
                            required
                          />
                          {/* <input
                            id="LoginEmail"
                            type="email"
                            name="email"
                            onChange={Inputchange}
                            value={state.email}
                            required
                            className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                            placeholder="name@example.com"
                          /> */}
                        </div>

                        <div className="mb-4">
                          <FormControl
                            sx={{ width: "100%" }}
                            variant="outlined"
                          >
                            <InputLabel htmlFor="outlined-adornment-password">
                              Password
                            </InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-password"
                              type={passEye ? "text" : "password"}
                              name="password"
                              onChange={Inputchange}
                              value={state.password}
                              required
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setPassEye((show) => !show)}
                                    // onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {passEye ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              label="Password"
                            />
                          </FormControl>
                        </div>

                        <div className="flex justify-between mb-4">
                          <p className="text-slate-400 mb-0">
                            <Link
                              href="/forgot-password"
                              className="text-slate-400"
                            >
                              Forgot password ?
                            </Link>
                          </p>
                        </div>

                        <div className="mb-4">
                          <button
                            type="submit"
                            className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md w-full"
                            // value="Login / Sign in"
                          >
                            Login / Sign in
                          </button>
                        </div>

                        <div className="text-center">
                          <span className="text-slate-400 me-2">
                            Don't have an account ?
                          </span>{" "}
                          <Link
                            href="/auth/signup"
                            className="text-black dark:text-white font-bold inline-block"
                          >
                            Sign Up
                          </Link>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Switcher /> */}
      <BackToHome />
      {/* <BackdropComponent open={backDropOpen} /> */}
    </>
  );
};

export default LoginComponent;
