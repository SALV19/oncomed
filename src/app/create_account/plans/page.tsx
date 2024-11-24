import Link from "next/link";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Plan_cards from "~/app/_components/plan_cards";
import { plans } from "~/app/constants/constants";

const CreateAccount = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5 bg-specialGreen">
      <Link href="/create_account" className="absolute left-5 top-5 text-white">
        <ArrowBackIosIcon />
      </Link>
      {plans.map((e, idx) => (
        <Plan_cards name={e.name} description={e.description} price={e.cost} />
      ))}
    </div>
  );
};

export default CreateAccount;
