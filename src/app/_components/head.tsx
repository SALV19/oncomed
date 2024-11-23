"use client";

import Link from "next/link";
import React, { useState } from "react";

const HeadNav = () => {
  const [show_nav, setshow_nav] = useState(false);

  const showNav = () => {
    setshow_nav(!show_nav);
  };

  return (
    <div className="absolute">
      <div className="items-cener flex w-full items-center gap-2 p-2">
        <img
          src={show_nav ? "/icons/x.png" : "/icons/menu.png"}
          className="z-50 -mt-[.3rem] size-5"
          onClick={() => showNav()}
        />
        <Link className="font-cookie text-3xl text-white" href={"/views/home"}>
          Onkomed
        </Link>
      </div>
      <div
        id="nav"
        className={`absolute z-10 h-screen w-screen bg-gray-800 bg-opacity-50 transition-all ${show_nav ? "left-0" : "-left-96"}`}
      >
        <Link
          className="my-1 block w-screen bg-opacity-70 p-2 text-xl text-white hover:bg-gray-900"
          href={""}
        >
          Videos
        </Link>
        <Link
          className="my-1 block w-screen bg-opacity-70 p-2 text-xl text-white hover:bg-gray-900"
          href={""}
        >
          Diary
        </Link>
      </div>
    </div>
  );
};

export default HeadNav;
