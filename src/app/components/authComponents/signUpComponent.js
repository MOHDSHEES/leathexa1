"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { MyContext } from "@/src/context";
import { closeMessage, openMessage } from "../functions/message";
import BackToHome from "../back-to-home";
import DOMPurify from "dompurify";
import Joi from "joi";

const SignUpComponent = () => {
  const [state, setstate] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { messageApi } = useContext(MyContext);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isVerified, setIsVerified] = useState(true);
  const [disable, setDisable] = useState(false);
  const router = useRouter();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  function clear() {
    setstate({
      name: "",
      email: "",
      password: "",
    });
    setConfirmPassword("");
    setIsVerified(false);
    setDisable(false);
    setIsChecked(false);
  }
  const Inputchange = (event) => {
    const { name, value } = event.target;
    if (name === "email")
      setstate({
        ...state,
        [name]: DOMPurify.sanitize(value.toLowerCase().trim()),
      });
    else
      setstate({
        ...state,
        [name]: DOMPurify.sanitize(value.trim()),
      });
  };

  async function submitHandler(e) {
    e.preventDefault();
    const { error } = userSchema.validate({
      name: state.name,
      email: state.email,
      password: state.password,
    });
    if (error) {
      closeMessage(messageApi, error.details[0].message, "error");
      return;
    }
    if (state.password === confirmPassword) {
      if (isVerified && isVerified) {
        setDisable(true);
        openMessage(messageApi, "Registering, Please wait...");
        const { data } = await axios.post("/api/user/save/", {
          state: state,
        });
        if (data && data.status === 200) {
          closeMessage(messageApi, "Sucessfully Registered", "success");
          //   navigate("/edit", { replace: true });
          clear();
          router.replace("/auth/login");
        } else if (
          data &&
          data.status === 500 &&
          data.msg.split(" ")[0] === "E11000"
        )
          closeMessage(
            messageApi,
            "Email Id already registered with us",
            "error"
          );
        else closeMessage(messageApi, data.msg, "error");
      } else closeMessage(messageApi, "Please verify email", "error");
    } else closeMessage(messageApi, "Password Missmatch", "error");
    setDisable(false);
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
                    src="/images/graphics/Signup.webp"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="h-full w-full object-cover md:h-[44rem]"
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
                          <label
                            className="font-semibold"
                            htmlFor="RegisterName"
                          >
                            Your Name:
                          </label>
                          <input
                            onChange={Inputchange}
                            value={state.name}
                            name="name"
                            id="RegisterName"
                            type="text"
                            className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                            placeholder="Full Name"
                            autoFocus
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label className="font-semibold" htmlFor="LoginEmail">
                            Email Address:
                          </label>
                          <input
                            onChange={Inputchange}
                            value={state.email}
                            name="email"
                            id="LoginEmail"
                            type="email"
                            required
                            className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                            placeholder="name@example.com"
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            className="font-semibold"
                            htmlFor="LoginPassword"
                          >
                            Password:
                          </label>
                          <input
                            onChange={Inputchange}
                            value={state.password}
                            name="password"
                            id="LoginPassword"
                            type="password"
                            required
                            className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                            //   placeholder="Password:"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="font-semibold"
                            htmlFor="LoginConfirmPassword"
                          >
                            Confirm Password:
                          </label>
                          <input
                            onChange={(e) =>
                              setConfirmPassword(e.target.value.trim())
                            }
                            value={confirmPassword}
                            name="cPassword"
                            id="LoginConfirmPassword"
                            type="password"
                            required
                            className="mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                          />
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center w-full mb-0">
                            <input
                              className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-orange-500 focus:border-orange-300 focus:ring focus:ring-offset-0 focus:ring-orange-200 focus:ring-opacity-50 me-2"
                              type="checkbox"
                              id="AcceptT&C"
                              checked={isChecked}
                              required
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label text-slate-400"
                              htmlFor="AcceptT&C"
                            >
                              I Accept{" "}
                              <Link href="" className="text-orange-500">
                                Terms And Condition
                              </Link>
                            </label>
                          </div>
                        </div>

                        <div className="mb-4">
                          <button
                            type="submit"
                            className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md w-full"
                          >
                            Register
                          </button>
                        </div>

                        <div className="text-center">
                          <span className="text-slate-400 me-2">
                            Already have an account ?{" "}
                          </span>{" "}
                          <Link
                            href="/auth/login"
                            className="text-black dark:text-white font-bold inline-block"
                          >
                            Sign in
                          </Link>
                        </div>
                      </div>
                    </fieldset>
                  </form>

                  {/* <div className="text-center">
                                        <p className="mb-0 text-slate-400">© {new Date().getFullYear()} Cartzio. Develop  with <i className="mdi mdi-heart text-red-600"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BackToHome />
      {/* <Switcher/> */}
    </>
  );
};

export default SignUpComponent;

const userSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  password: Joi.string().min(6),
});
