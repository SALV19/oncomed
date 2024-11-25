"use client";

import React, { useEffect, useState } from "react";
import { diary_entry } from "~/app/constants/constants";

const Diary = () => {
  const [text, setText] = useState("");
  useEffect(() => setText(diary_entry.text), []);
  const handleChange = (e: any) => {
    setText(e.target.value);
    diary_entry.text = e.target.value;
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-specialGreen p-2 pt-14">
      <h1 className="mb-5 font-cookie text-5xl text-white">Diary</h1>
      <section className="h-full w-full rounded-md bg-white">
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Start typing..."
          style={{
            width: "100%",
            height: "100%",
            padding: "10px",
            fontSize: "16px",
            lineHeight: "1.5",
            resize: "none", // Prevent manual resizing
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box", // Include padding in width/height calculations
            overflowWrap: "break-word", // Ensure text wraps properly
            wordWrap: "break-word",
          }}
        />{" "}
      </section>
    </div>
  );
};

export default Diary;
