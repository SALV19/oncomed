import Link from "next/link";
import React, { FC } from "react";

interface Props {
  name: string;
  blood: string;
}

const Donation_card: FC<Props> = ({ name, blood }) => {
  return (
    <section className="h-18 m-auto mb-3 flex w-10/12 items-center rounded-md bg-white p-2 text-center shadow-md">
      <Link href={`/chat?name=${name}`}>
        {name} needs help, can someone donate{" "}
        <span className="bold text-red-600">{blood + " "}</span> blood
      </Link>
    </section>
  );
};

export default Donation_card;
