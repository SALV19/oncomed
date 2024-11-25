"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Health = () => {
  const pathName = usePathname();

  return (
    <div className="font-economica flex h-screen flex-col items-center justify-center gap-10 bg-specialGreen">
      <h1 className="-mb-6 font-cookie text-6xl text-white">
        Sistema de Salud
      </h1>
      <Link
        className="flex h-1/3 w-10/12 flex-col items-center rounded-md bg-white p-4 text-4xl font-bold"
        href={pathName + "/public"}
      >
        PUBLIC:
        <div className="flex gap-2">
          <img
            className="h-24 w-24 object-fill"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Logotipo_del_IMSS.svg/1200px-Logotipo_del_IMSS.svg.png"
          />
          <img
            className="h-24 w-24 object-fill"
            src="https://sic.cultura.gob.mx/images/133769"
          />
          <img
            className="h-24 w-24 object-fill"
            src="https://www.gob.mx/cms/uploads/structure/main_image/3990/salud-verde-03.jpg"
          />
        </div>
      </Link>
      <Link
        className="flex h-1/3 w-10/12 flex-col items-center rounded-md bg-white p-4 text-4xl font-bold"
        href={pathName + "/private"}
      >
        PRIVATE:
        <div className="flex gap-2">
          <img src="https://hito.org.mx/wp-content/uploads/2022/06/Logo-HITO-300-dpi-1.jpg" />
        </div>
      </Link>
    </div>
  );
};

export default Health;
