import React from "react";

const History = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center overflow-x-scroll bg-specialGreen p-2 px-5 pb-4 pt-10 text-white">
      <h1 className="mb-5 font-cookie text-5xl">Creation History:</h1>
      <blockquote className="text-justify">
        "Hace algún tiempo a mi abuelita la detectaron con cáncer, y quería
        hacer su enfermedad más llevadera igual que quería que tiviera todas las
        atenciones posibles para que se recuperara pronto. Sin embargo, mi
        familia y yo no sabíamos como lo íbamos a resolver ya que no teníamos
        ninguna información de hospitales o doctores así que decidí crear esta
        aplicación para todas aquellas personas que sean nuevas en el tema, o
        incluso a aquellas que ya tengan experiencia pues siempre se puede
        aprender algo nuevo"
      </blockquote>
      <cite className="w-full text-end text-xl">Kirey</cite>
    </div>
  );
};

export default History;
