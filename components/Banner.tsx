import React from "react";

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg: \space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-5xl">Geeky Wizard Blog</h1>
        <h2 className="mt-5 md:mt-2">
          Welcome to Your{" "}
          <span className="underline decoration-4 decoration-[#29bdf2]">
            Devosphere Destination
          </span>{" "}
          for All Things Code and More!
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Feature Frenzy| Tech Trends| Debugging Chronicles | Your Weekly Dive
        into the Digital Realm!
      </p>
    </div>
  );
}
export default Banner;
