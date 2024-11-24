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
          <div className={`w-full rounded-md p-2 ${m.color}`} key={idx}>
            <h1>{m.name}</h1>
            <h2>{m.time}</h2>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Calendar_page;
