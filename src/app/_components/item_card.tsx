import React, { FC } from "react";

interface Props {
  name: string;
  image: string;
  price: string;
}

const Item_card: FC<Props> = ({ name, image, price }) => {
  return (
    <div className="flex h-[15rem] w-full flex-col items-center justify-center rounded-md shadow-md">
      <img src={image} className="h-full w-full" />
      <div className="flex justify-between p-2">
        <h1>{name}</h1>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Item_card;
