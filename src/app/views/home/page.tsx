import React from "react";
import Donation_card from "~/app/_components/donation_card";
import { donations } from "~/app/constants/constants";

const Home = () => {
  return (
    <div className="block h-screen bg-specialGreen pt-14">
      <section className="h-24 overflow-y-scroll">
        {donations.map((e, idx) => (
          <Donation_card name={e.name} blood={e.blood} key={idx} />
        ))}
      </section>
      <hr className="mt-2" />
    </div>
  );
};

export default Home;
