"use client";

import Link from "next/link";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { usePathname } from "next/navigation";

const WithSS = () => {
  const pathname = usePathname().replace("/withoutss", "");

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3 bg-specialGreen">
      <Link href={pathname} className="absolute left-5 top-14 text-white">
        <ArrowBackIosIcon />
      </Link>
      <section className="flex items-center justify-center">
        <img
          className="h-24 w-24 object-contain"
          src="https://www.gob.mx/cms/uploads/press/main_image/201557/post_WhatsApp_Image_2021-02-26_at_1.31.03_PM__10_.jpeg"
        />
        <div className="w-2/3 rounded-md bg-white">
          <p>
            El IMSS, es la institución con mayor presencia en la atención a la
            salud y en la protección social de los mexicanos desde su fundación
            en
          </p>
          <a className="text-specialGreen" href="https://www.imss.gob.mx">
            https://www.imss.gob.mx
          </a>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <img
          className="h-24 w-24 object-contain"
          src="https://www.diariodequeretaro.com.mx/incoming/85n9lp-hospital-dell-nino-y-la-mujer-ha.jpg/ALTERNATES/LANDSCAPE_768/Hospital%20dell%20Ni%C3%B1o%20y%20la%20Mujer-HA.jpg"
        />
        <div className="w-2/3 overflow-hidden rounded-md bg-white">
          <p>
            El autocuidado, mantener un peso adecuado y evitar el consumo de
            alcohol y tabaco, son factores de protección para algunos tipos de
            cáncer.
          </p>
          <a
            className="text-specialGreen"
            href="https://www.gob.mx/salud/articulos/contra-el-cancer-yo-actuo"
          >
            https://www.gob.mx/salud/articulos/contra-el-cancer-yo-actuo
          </a>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <img
          className="h-24 w-24 object-contain"
          src="https://images.squarespace-cdn.com/content/v1/622f653dc31002506683d95f/4c8a2b56-5121-44bf-87e5-73fa47f624ac/ICAN_Posts_V2-04.jpg"
        />
        <div className="w-2/3 rounded-md bg-white">
          <p>
            En esta sección encontrarás recursos especializados que ayudarán a
            satisfacer las necesidades en materia de servicios para el personal
            militar y sus derechohabientes.
          </p>
          <a className="text-specialGreen" href="https://www.gob.mx/issfam">
            https://www.gob.mx/issfam
          </a>
        </div>
      </section>
    </div>
  );
};

export default WithSS;
