import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <section className="banner z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl text-gray-300 lg:text-6xl font-bold z-10 py-5">
            QuickBites
          </p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl ">
            Taste the Convenience: Food, Fast and Delivered.
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadeout"></div>
      </section>
    </div>
  );
};

export default HomePage;
