import React from "react";

const WithSS = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3 bg-specialGreen">
      <section className="flex items-center justify-center">
        <img
          className="h-24 w-24 object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Logotipo_del_IMSS.svg/1200px-Logotipo_del_IMSS.svg.png"
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
          src="https://raw.githubusercontent.com/mxabierto/assets/master/img/logos/issste.png"
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
          src="https://images.sftcdn.net/images/t_app-icon-m/p/ce138a6a-c894-419f-9c49-35cc2f00ae3e/1938131499/issfam-movil-logo"
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
