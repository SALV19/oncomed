"use client";

import React, { useEffect, useState } from "react";
import "../styles/login.css";
import Link from "next/link";

const HomePage = () => {
  const [login, setlogin] = useState(true);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setlogin(false);
    }, 3000);
  }, []);

  useEffect(() => {
    document.fonts.load("1em Cookie").then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-specialGreen">
        <img src="images/logo.png" className="rounded-full" />
      </div>
    );
  }
  if (login) {
    return (
      <div className="flex h-screen w-screen justify-center bg-specialGreen text-white">
        <h1 className="start_login font-cookie text-7xl">Onkomed</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="flex h-screen w-screen items-center justify-center bg-specialGreen text-white">
        <h1 className="absolute top-[50px] font-cookie text-7xl">Onkomed</h1>
        <aside className="mt-24 flex h-2/3 w-10/12 flex-col items-center justify-center rounded-md bg-white text-black">
          <h2 className="my-4 font-sans text-2xl font-bold">Log In</h2>
          <fieldset className="w-10/12">
            <p className="mt-1">Email</p>
            <input
              placeholder="ex@mail.com"
              className="mb-8 h-8 w-full rounded-md border-2 border-gray-500 p-2"
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="**********"
              className="h-8 w-full rounded-md border-2 border-gray-500 p-2"
            />
            <div className="flex w-full justify-center">
              <Link
                className="my-10 w-3/5 rounded-md bg-specialGreen p-2 text-center text-white"
                href={"/views/home"}
              >
                Enter
              </Link>
            </div>
          </fieldset>
          <hr className="w-full" />
          <Link
            className="mt-5 text-xl text-specialGreen"
            href={"/create_account"}
          >
            Create account
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
