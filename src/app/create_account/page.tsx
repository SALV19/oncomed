"use client";

import Link from "next/link";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const CreateAccount = () => {
  const [state, setState] = useState<{
    name: string;
    password: string;
    c_password: string;
    birth_date: string;
  }>({
    name: "",
    password: "",
    c_password: "",
    birth_date: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };
  const signIn = (e: any) => {
    e.preventDefault;
    if (
      state.name &&
      state.password == state.c_password &&
      state.password &&
      state.birth_date
    ) {
      window.location.href = "/create_account/plans";
    } else {
      alert("Error: Please complete the form before continue");
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5 bg-specialGreen">
      <Link href="/" className="absolute left-5 top-5 text-white">
        <ArrowBackIosIcon />
      </Link>
      <h1 className="font-cookie text-6xl text-white"> Sign In</h1>
      <form className="h-10/12 flex w-10/12 flex-col items-center justify-center gap-2 rounded-md bg-white py-5">
        <div className="flex flex-col">
          <span>Name</span>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={state.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <span>Password</span>
          <input
            type="password"
            name="password"
            placeholder="******"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <span>Confirm Pasword</span>
          <input
            type="password"
            name="c_password"
            placeholder="Confirm Password"
            value={state.c_password}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5 flex w-[12rem] flex-col">
          <span>Birth Date</span>
          <input
            type="date"
            name="birth_date"
            placeholder="12-04-200"
            value={state.birth_date}
            onChange={handleInputChange}
          />
        </div>
        <button
          onClick={(e) => signIn(e)}
          className="rounded-md bg-specialGreen p-2 px-4 font-cookie text-2xl text-white"
        >
          View plans
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
