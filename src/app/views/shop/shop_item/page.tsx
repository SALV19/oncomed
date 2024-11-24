"use client";

import { usePathname, useSearchParams } from "next/navigation";

const ShopItem = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const name = searchParams.get("name") as string;
  const imageURL = searchParams.get("image");
  const price = searchParams.get("price") as string;
  console.log(imageURL);
  return (
    <div className="-z-12 flex h-screen w-screen flex-col bg-specialGreen p-4 pt-12 text-white">
      <h1 className="bold mb-2 text-center text-3xl">{name}</h1>
      {imageURL ? (
        <img
          src={imageURL}
          alt="Shop Item"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      ) : null}
      <p className="mt-2">Price: ${price}</p>
      <p>
        Descripción de la medicina, solo con receta médica, dosis que recomiende
        el doctor
      </p>
      <button className="mx-auto mt-10 items-end rounded-full bg-gradient-to-t from-yellow-600 to-yellow-400 p-3 px-10 drop-shadow-md">
        Comprar
      </button>
    </div>
  );
};

export default ShopItem;
