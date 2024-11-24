"use client";
import Link from "next/link";
import React, { useState } from "react";
import { chats, donations } from "~/app/constants/constants";

const Chat = () => {
  const [blood, setblood] = useState("");

  const handleSubmit = (e: any) => {
    if (blood) {
      e.preventDefault();
      donations.push({
        name: "Santiago",
        blood: blood,
      });
      alert("Announcment made!");
    }
  };

  return (
    <div className="-z-20 flex h-full w-full flex-col items-center overflow-y-scroll bg-specialGreen pb-14 pt-14">
      <button
        className="mb-3 flex h-20 w-10/12 items-center gap-5 rounded-md border-4 border-red-600 bg-white p-5 text-start text-xl"
        onClick={(e) => handleSubmit(e)}
      >
        <span>Ask for help:</span>
        <input
          placeholder="blood type"
          value={blood}
          onChange={(e: any) => setblood(e.target.value)}
          className="w-28"
        />
      </button>
      {chats.map((c, idx) => (
        <Link
          className="mb-2 flex h-16 w-10/12 items-center gap-5 rounded-md bg-white p-5 text-start text-xl drop-shadow-md"
          href={`/views/chat/forum?name=${c}`}
          key={idx}
        >
          {c}
        </Link>
      ))}
    </div>
  );
};

export default Chat;
