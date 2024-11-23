import React, { FC } from "react";

interface Props {
  doctor: string;
  img: string;
}

const Doctor_card: FC<Props> = ({ doctor, img }) => {
  return (
    <div className="flex h-16 w-full items-center rounded-md bg-white">
      <img src={img} className="mx-2 size-14" />
      <h1>{doctor}</h1>
    </div>
  );
};

export default Doctor_card;
