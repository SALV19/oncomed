"use client";

import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { medicine } from "~/app/constants/constants";

const Calendar_page = () => {
  return (
    <div className="h-full overflow-y-scroll bg-specialGreen p-2 pb-16">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
      <hr className="my-2 w-full" />
      <h1 className="text-white">Medicines of the day: </h1>
      <section className="flex flex-col gap-2 overflow-y-scroll">
        {medicine.map((m, idx) => (
          <div className={`w-full rounded-md bg-white p-2`} key={idx}>
            <h1>{m.name}</h1>
            <h2>{m.time}</h2>
          </div>
        ))}
      </section>
      <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-center text-5xl text-white">
        +
      </div>
    </div>
  );
};

export default Calendar_page;
