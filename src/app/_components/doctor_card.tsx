"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface Props {
  doctor: string;
  img: string;
}

const Doctor_card: FC<Props> = ({ doctor, img }) => {
  const pathname = usePathname();

  return (
    <Link
      className="flex h-16 w-full items-center rounded-md bg-white"
      href={pathname + "/doctor_ap?name=" + doctor}
    >
      <img src={img} className="mx-2 size-14" />
      <h1>{doctor}</h1>
    </Link>
  );
};

export default Doctor_card;
