import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetPackageQuery } from "../../features/package/packageApi";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setPackage } from "../../features/package/packageSlice";
import PackageModal from "../../components/modals/PackageModal";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading: isFetching } = useGetPackageQuery(id);
  const mentor = data?.data || {};
  const [toggle, setToggle] = useState("trainer");
  const [purposeAccordion, setPurposeAccordion] = useState(false);
  const [structureAccordion, setStructureAccordion] = useState(false);
  const dispatch = useDispatch();

  if (isFetching) {
    return (
      <section className="h-[calc(100vh-60px)] w-full overflow-hidden flex justify-center items-center">
        <div className="w-20 h-20 rounded-full animate-spin border-x-4 border-solid border-[#008771] border-t-transparent" />
      </section>
    );
  }

  const facilities = [
    {
      thumb: "/assets/details-page/video.svg",
      title: "প্রোগ্রাম সংক্রান্ত ভিডিও প্রদান",
    },
    {
      thumb: "/assets/details-page/support.svg",
      title: "মেন্টর্স লাইফটাইম সাপোর্ট",
    },
    {
      thumb: "/assets/details-page/clock.svg",
      title: "ওভার টাইম ডিউরেশন",
    },
    {
      thumb: "/assets/details-page/layers.svg",
      title: "প্রয়োজনীয় এক্সেসোরিজ প্রদান",
    },
  ];

  return (
    <section className="container mx-auto my-12">
      <div className="grid grid-cols-12 gap-4">
        <div className="lg:col-span-8 col-span-12 lg:px-0 px-4">
          <div className="">
            <h1 className="text-2xl font-bold">{mentor?.title}</h1>
            <p className="text-[#4A4A4A] my-4">{mentor?.about}</p>
            <img
              src={process.env.REACT_APP_BASE_URL + mentor?.thumbnail}
              alt={mentor?.title}
              loading="lazy"
              className="my-8 rounded-2xl h-[390px] w-full object-cover object-center shadow-sm"
            />

            <div className="flex flex-col gap-4">
              <div className="bg-slate-100 flex flex-row justify-between rounded-lg font-bold">
                <button
                  className={`py-4 mx-auto w-full h-full ${
                    toggle === "overview"
                      ? "bg-primary text-white rounded-l-lg"
                      : null
                  }`}
                  onClick={() => setToggle("overview")}
                >
                  মেন্টরস ওভারভিউ
                </button>
                <button
                  className={`py-4 mx-auto w-full h-full ${
                    toggle === "trainer"
                      ? "bg-primary text-white rounded-r-lg"
                      : null
                  }`}
                  onClick={() => setToggle("trainer")}
                >
                  প্রশিক্ষক
                </button>
              </div>
              <>
                {toggle === "overview" && (
                  <div className="text-[#4A4A4A]">
                    <div className="flex flex-col gap-y-4">
                      <article className="shadow px-2 py-1 rounded-md flex flex-col gap-y-2">
                        <h3
                          className="text-lg font-bold flex justify-between items-center"
                          onClick={() => setPurposeAccordion(!purposeAccordion)}
                        >
                          মেন্টরশিপের উদ্দেশ্য
                          {purposeAccordion === false && (
                            <AiFillPlusCircle className="text-primary h-5 w-5" />
                          )}
                          {purposeAccordion === true && (
                            <AiFillMinusCircle className="text-secondary h-5 w-5" />
                          )}
                        </h3>
                        {purposeAccordion && (
                          <p>{mentor?.description?.purpose}</p>
                        )}
                      </article>
                      <article className="shadow px-2 py-1 rounded-md flex flex-col gap-y-2">
                        <h3
                          className="text-lg font-bold flex justify-between items-center"
                          onClick={() =>
                            setStructureAccordion(!structureAccordion)
                          }
                        >
                          মেন্টরশিপের স্ট্রাকচার
                          {structureAccordion === false && (
                            <AiFillPlusCircle className="text-primary h-5 w-5" />
                          )}
                          {structureAccordion === true && (
                            <AiFillMinusCircle className="text-secondary h-5 w-5" />
                          )}
                        </h3>
                        {structureAccordion && (
                          <p>{mentor?.description?.structure}</p>
                        )}
                      </article>
                    </div>
                  </div>
                )}
                {toggle === "trainer" && (
                  <div className="text-[#4A4A4A]">N/A</div>
                )}
              </>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12 lg:px-0 px-4">
          <div className="p-5 rounded-lg m-5 h-fit shadow">
            <h2 className="text-xl font-bold">ক্যারিয়ার প্লেসমেন্ট করুন !</h2>
            <p className="text-[#8C8C8C] py-4">
              যে কোন ব্যাচে সুবিধামতো যে কোন সময় বেছে নিয়ে ভর্তি হতে পারেন এখনই।
            </p>
            <div className="bg-[#1A6241] rounded-lg text-white p-5">
              <div className="flex flex-col gap-y-3">
                {facilities?.map((facility, index) => (
                  <div key={index} className="flex">
                    <img
                      className="mr-4"
                      src={facility?.thumb}
                      alt={facility?.title}
                    />
                    <p>{facility?.title}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between bg-[#32DB8E] text-[#4D876E] my-5 px-8 py-3 rounded-lg font-bold">
                <p className="text-black">মেন্টরশিপের মূল্য</p>
                <p className="text-black">
                  <span className="bg-green-100 text-green-800 text-base font-medium px-2.5 py-0.5 rounded border border-green-400 whitespace-nowrap">
                    ৳ {Number(mentor?.price).toLocaleString("bn-BD")}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 my-5">
              {/* mendatory */}
              <div className="text-center">
                <button
                  className="btn-secondary w-full"
                  onClick={() => dispatch(setPackage(mentor))}
                >
                  এখনই অর্ডার করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {<PackageModal />}
    </section>
  );
};

export default Detail;
