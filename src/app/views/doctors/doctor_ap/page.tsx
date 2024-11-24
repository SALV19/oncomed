"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Doctor_ap = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <div className="h-full bg-specialGreen p-2 pt-12">
      <h1 className="mb-2 text-2xl text-white">{name}</h1>
      <section className="flex flex-col gap-2 p-2">
        <span className="text-white">Doctor: </span>
        <select className="w-full">
          <option selected>Dra Jennifer A. Nielsen</option>
          <option>Dr Patrick Rothfuss</option>
          <option>Dr Jim Butcher</option>
          <option>Dra Alison Goodman</option>
        </select>
        <span className="text-white">Date: </span>
        <input type="date" name="appointment" className="w-full" />
        <span className="text-white">Reason for the appointment:</span>
        <input type="text" name="reason" className="h-24 w-full" />
        <span className="text-white">Extra considerations:</span>
        <input type="text" name="reason" className="h-24 w-full" />
        <p className="text-xl text-white">Cost: $1500</p>
        <Link
          href={"/pay"}
          className="mx-auto rounded-full bg-gradient-to-t from-gray-400 to-gray-50 p-2"
        >
          Confirm appointment
        </Link>
      </section>
    </div>
  );
};

export default Doctor_ap;
