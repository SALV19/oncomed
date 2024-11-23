import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-26 absolute bottom-0 z-20 flex w-full items-center justify-around bg-specialGreen pb-3 pt-2">
      {/* <Link href={"/views/home"}>
          <img src="/images/logo.png" className="h-10 rounded-full" />
        </Link> */}
      <Link href={"/views/doctors"}>
        <img src="/icons/doctor.png" className="size-10" />
      </Link>
      <Link href={"/views/shop"}>
        <img src="/icons/pharmacy.png" className="size-10" />
      </Link>
      <Link href={"/views/chat"}>
        <img src="/icons/message-circle.svg" className="size-10" />
      </Link>
      <Link href={"/views/calendar"}>
        <img src="/icons/calendar.png" className="size-10" />
      </Link>
    </div>
  );
};

export default Navbar;
