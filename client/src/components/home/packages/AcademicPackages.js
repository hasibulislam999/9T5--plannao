import React from "react";
import PackageSlider from "./PackageSlider";

const AcademicPackages = ({ packages }) => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center font-bold pt-8">
          একাডেমিক <span className="text-[#004f3a]">সেকশান</span>
        </h1>
        <PackageSlider packages={packages} />
      </div>
    </section>
  );
};

export default AcademicPackages;
