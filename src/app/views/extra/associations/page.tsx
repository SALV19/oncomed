import React from "react";

const Associations = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center overflow-x-scroll bg-specialGreen p-2 pb-4 pt-10">
      <div className="flex h-[90%] flex-col items-stretch justify-around">
        <section className="flex items-center justify-center gap-2">
          <img
            className="h-24 w-24 object-contain"
            src="https://pbs.twimg.com/profile_images/3732706128/83704bc674b25dd1a4430abd78038df4_400x400.jpeg"
          />
          <div className="w-2/3 rounded-md bg-white">
            <p>Teletón</p>
            <a className="text-specialGreen" href="https://teleton.org">
              https://teleton.org
            </a>
          </div>
        </section>
        <section className="flex items-center justify-center gap-2">
          <img
            className="h-24 w-24 bg-white object-contain"
            src="https://galher.org/wp-content/uploads/2023/07/Logo-Galher__Galher_jugo_de_mangostan-1024x791.png"
          />
          <div className="w-2/3 overflow-hidden rounded-md bg-white">
            <p>Galher</p>
            <a className="text-specialGreen" href="https://galher.org">
              https://galher.org
            </a>
          </div>
        </section>
        <section className="flex items-center justify-center gap-2">
          <img
            className="h-24 w-24 bg-white object-contain"
            src="https://www.amanc.org/wp-content/uploads/2024/01/Logos-RED-tricolor-Azul.png"
          />
          <div className="w-2/3 rounded-md bg-white">
            <p>Amanc</p>
            <a className="text-specialGreen" href="https://www.amanc.org">
              https://www.amanc.org
            </a>
          </div>
        </section>
        <section className="flex items-center justify-center gap-2">
          <img
            className="h-24 w-24 object-contain"
            src="https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/391620947_713426060820719_7336850607678011228_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=p438xn3mDaAQ7kNvgFNhKik&_nc_zt=23&_nc_ht=scontent-qro1-1.xx&_nc_gid=AQd2njfrvB-k4lwH1oXZ7DK&oh=00_AYDE7zw1dtEx6YQoTScwMNaUpK2PEkUa1N_4AoDfSXq_PQ&oe=674A3E49"
          />
          <div className="w-2/3 rounded-md bg-white">
            <p>Damas azules</p>
            <a
              className="text-specialGreen"
              href="https://www.facebook.com/DamasAzules/?locale=es_LA"
            >
              https://www.facebook.com/DamasAzules/?locale=es_LA
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Associations;
