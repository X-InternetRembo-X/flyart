"use client";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useSearchParams } from "next/navigation";

const LogInForm = () => {
  const searchParams = useSearchParams();
  const action = searchParams.get("action");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      userName: "",
    },
    onSubmit: (values) => {
      console.log("form values", values);
    },
  });

  console.log(action, "action");

  const [mode, setMode] = useState(action || "LogIn");

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={"flex flex-col items-center"}
    >
      {mode === "SignUp" && (
        <div className="mt-6">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            User Name
          </label>
          <input
            name={"userName"}
            type={"text"}
            value={formik.values.userName}
            onChange={formik.handleChange}
            className="w-[400px] h-[50px] text-xl m-1 py-2 pl-3 pr-2 text-gray-700 bg-white outline outline-offset-0 outline-2 outline-gray-500 rounded-md appearance-none focus:outline-none focus:border-blue-500 focus:outline-blue-500 focus:outline-3"
          />
        </div>
      )}

      <div className="mt-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          name={"email"}
          type={"email"}
          value={formik.values.email}
          onChange={formik.handleChange}
          className="w-[400px] h-[50px] text-xl m-1 py-2 pl-3 pr-2 text-gray-700 bg-white outline outline-offset-0 outline-2 outline-gray-500 rounded-md appearance-none focus:outline-none focus:border-blue-500 focus:outline-blue-500 focus:outline-3"
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          name={"password"}
          type={"password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          className="w-[400px] h-[50px] text-xl m-1 py-2 pl-3 pr-2 text-gray-700 bg-white outline outline-offset-0 outline-2 outline-gray-500 rounded-md appearance-none focus:outline-none focus:border-blue-500 focus:outline-blue-500 focus:outline-3"
        />
      </div>

      <button
        className={"mt-5 w-[300px] bg-black h-[50px] rounded-xl text-2xl"}
        type="submit"
      >
        Log In
      </button>

      <div className={"text-xl font-bold text-black mt-6 "}>
        {mode === "LogIn" ? (
          <>
            Don&apos;t have an account yet?&nbsp;
            <span
              onClick={() => {
                setMode("SignUp");
              }}
              className={"underline hover:cursor-pointer text-pink-500"}
            >
              Sign up now!
            </span>
          </>
        ) : (
          <>
            Already have an account?&nbsp;
            <span
              className={"underline hover:cursor-pointer text-pink-500"}
              onClick={() => {
                setMode("LogIn");
                console.log(mode, "mode");
              }}
            >
              Sign in!
            </span>
          </>
        )}
      </div>
    </form>
  );
};

export default LogInForm;
