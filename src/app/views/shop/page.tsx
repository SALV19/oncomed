import React from "react";
import Item_card from "~/app/_components/item_card";
import { items } from "~/app/constants/constants";

const Shop = () => {
  return (
    <div className="-z-20 flex h-full w-screen flex-col items-center bg-specialGreen pt-12">
      <fieldset className="mb-3 flex h-7 w-10/12 items-center rounded-full border-2 border-black bg-white">
        <img src="/icons/search.png" className="ml-2 size-5" />
        <input />
      </fieldset>
      <div className="grid h-full w-full grid-cols-2 gap-2 overflow-y-scroll bg-white p-2">
        {items.map((i) => (
          <Item_card name={i.name} image={i.image} price={i.price} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
