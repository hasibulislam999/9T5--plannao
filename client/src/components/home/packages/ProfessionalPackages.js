import React from "react";
import PackageSlider from "./PackageSlider";

const ProfessionalPackages = ({ packages }) => {
  return (
    <section className="py-12 bg-[#F0FCF7]">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center font-bold pt-8">
          প্রফেশনাল <span className="text-[#004f3a]">সেকশান</span>
        </h1>
        <PackageSlider packages={packages} />
      </div>
    </section>
  );
};

export default ProfessionalPackages;
