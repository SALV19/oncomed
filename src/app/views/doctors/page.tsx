import React from "react";
import Doctor_card from "~/app/_components/doctor_card";
import { doctors } from "~/app/constants/constants";

const Doctors = () => {
  return (
    <div className="flex h-screen w-screen flex-col gap-5 bg-specialGreen p-2 py-14 text-xl">
      {doctors.map((d) => (
        <Doctor_card doctor={d.doctor} img={d.img} />
      ))}
    </div>
  );
};

export default Doctors;
