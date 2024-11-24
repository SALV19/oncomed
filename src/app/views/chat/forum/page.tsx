"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const Forum = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <div className="flex h-screen flex-col items-stretch bg-gray-200 pt-12">
      <span className="block w-screen bg-specialGreen p-3 text-xl text-white">
        {name}
      </span>
      <section className="flex justify-center bg-white bg-opacity-70">
        <input className="absolute bottom-24 w-[90%] rounded-full bg-white px-2 shadow-lg" />
      </section>
    </div>
  );
};

export default Forum;
