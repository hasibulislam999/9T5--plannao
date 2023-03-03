import React from "react";

const Banner = () => {
  return (
    <section className="bg-[#006143]">
      <div className="container mx-auto lg:px-0 px-4">
        <div className="py-12 grid lg:grid-cols-2 items-center lg:gap-0 gap-y-4">
          <div className="text-white flex flex-col gap-y-4 lg:order-1 md:order-2">
            <h1 className="lg:text-5xl md:text-3xl text-xl font-bold lg:leading-[4rem] md:leading-[3rem] text-center">
              ইন্ডাস্ট্রি এবং একাডেমিক <br /> এক্সপার্টদের সঙ্গে আলোচনার <br />{" "}
              মাধ্যমে সঠিক সিধান্ত নাও!
            </h1>
            <div className="flex flex-col gap-y-2 items-center">
              <p className="font-medium text-center">All you need is a mentor</p>
              <button className="btn-secondary shadow mt-4">
                কি হতে চাও ?
              </button>
            </div>
          </div>
          <div className="lg:order-2 md:order-1">
            <img
              src="/assets/home/hero/bannerHero.svg"
              alt="banner_hero"
              loading="lazy"
              className="lg:ml-auto md:mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
