import Link from "next/link";
import React, { FC } from "react";

interface Props {
  name: string;
  image: string;
  price: string;
}

const Item_card: FC<Props> = ({ name, image, price }) => {
  return (
    <Link
      className="flex h-[15rem] w-full flex-col items-center justify-center rounded-md shadow-md"
      href={`/views/shop/shop_item?name=${name}&image=${image}&price=${price}`}
    >
      <img src={image} className="h-full w-full" />
      <div className="flex flex-col p-2">
        <h1>{name + " "}</h1>
        <p>${price}</p>
      </div>
    </Link>
  );
};

export default Item_card;
