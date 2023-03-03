import React from "react";

const Solution = () => {
  return (
    <section className="bg-slate-50">
      <div className="container mx-auto lg:px-0 px-4">
        <div className="py-12 grid lg:grid-cols-2 items-center lg:gap-0 gap-y-4">
          <div className="flex flex-col gap-y-4 order-2">
          <h1 className="lg:text-5xl md:text-3xl text-xl font-bold lg:leading-[4rem] md:leading-[3rem] text-center">
              তোমার একাডেমিক ও প্রফেশনাল <br /> ক্যারিয়ারের জন্য ডিজিটাল{" "}
              <span className="text-[#004f3a]">কনসালটেন্সি এবং মেন্টরশিপ</span>
            </h1>
            <div className="flex flex-col gap-y-2 items-center">
              <p className="font-bold text-center">
                কোন পথে এগুবে ভেবে পাচ্ছো না? আমরাই তোমাকে পথ বলে দিব!
              </p>
              <button className="btn-primary shadow mt-4">
                কি হতে চাও ?
              </button>
            </div>
          </div>
          <div className="order-1">
            <img
              src="/assets/home/solution/man1.svg"
              alt="solution_hero"
              loading="lazy"
              className="lg:mr-auto md:mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
