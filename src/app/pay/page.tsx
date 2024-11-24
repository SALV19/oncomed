"use client";

import "react-credit-cards-2/dist/es/styles-compiled.css";

import React, { useState } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";

const PaymentForm = () => {
  const [state, setState] = useState<{
    number: string;
    expiry: string;
    cvc: string;
    name: string;
    focus: Focused | undefined;
  }>({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: undefined,
  });

  const handleInputChange = (evt: any) => {
    const { name, value } = evt.target;

    if (name == "number" && value.length > 16) {
      return;
    }
    if (name == "expiry" && value.length > 4) {
      return;
    }
    if (name == "cvc" && value.length > 3) {
      return;
    }

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    const focusedField = evt.target.name as Focused; // Assuming name matches Focused type
    setState((prev) => ({ ...prev, focus: focusedField }));
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    if (state.number.length == 16 && state.name && state.cvc && state.expiry) {
      window.location.href = "/views/home";
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-specialGreen">
      <h1 className="mb-3 font-cookie text-6xl text-white">Payment</h1>
      <form className="flex flex-col items-center justify-center gap-3 rounded-md bg-white p-8">
        <div className="flex flex-col">
          <span>Card Number</span>
          <input
            type="number"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="flex flex-col">
          <span>Expiration date</span>
          <input
            type="text"
            name="expiry"
            placeholder="Card Expiracy"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="flex flex-col">
          <span>CVC</span>
          <input
            type="number"
            name="cvc"
            placeholder="Card CVC"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="flex flex-col">
          <span>Name on Card</span>
          <input
            type="text"
            name="name"
            placeholder="Card name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <button
          onClick={handleSubmit}
          className="rounded-md bg-specialGreen p-1 px-3 font-cookie text-2xl text-white hover:bg-[#066163]"
        >
          Submit
        </button>
      </form>
      <Link href="/create_account" className="absolute left-5 top-5 text-white">
        <ArrowBackIosIcon />
      </Link>
    </div>
  );
};

export default PaymentForm;
