import Link from "next/link";
import React, { FC } from "react";

interface Props {
  name: string;
  description: string;
  price: string;
}

const Plan_cards: FC<Props> = ({ name, description, price }) => {
  return (
    <div className="h-[25%] w-10/12 rounded-md bg-white p-3">
      <h1 className="font-cookie text-3xl text-specialGreen">{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <div className="flex w-full justify-end text-white">
        <Link
          href={name == "Basic" ? "/views/home" : "/pay"}
          className="rounded-lg bg-specialGreen p-2 px-4"
        >
          BUY
        </Link>
      </div>
    </div>
  );
};

export default Plan_cards;
