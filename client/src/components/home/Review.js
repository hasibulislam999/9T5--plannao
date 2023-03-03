import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Review = () => {
  const reviews = [
    {
      name: "আবরার হোসেন",
      picture: "/assets/home/review/man.svg",
      opinion:
        "ছোটবেলা থেকে ইচ্ছে ইঞ্জিনিয়ারিং পড়ার। একজন সিনিয়র ভাইয়া বা আপুকে খুঁজছিলাম যিনি আমাকে সঠিক গাইডলাইন দিবেন, কিন্তু তেমন কাউকে পাচ্ছিলাম না। শেষমেশ সন্ধান পেলাম প্ল্যান নাও এর, সার্ভিস নিতে রেজিস্টার করলাম। এক্সপার্ট ভাইয়ারা এতো সুন্দর করে গাইডলাইন দিলেন যে আমি আমার সমস্ত প্রশ্নের উত্তর পেয়ে গেলাম। আলহামদুলিল্লাহ আমি এখন গাইডলাইন মোতাবেক পড়াশোনা করছি।",
      qualification: "পিএইচডি, ইউনিভার্সিটি",
      ratings: 5,
    },
    {
      name: "আবরার হোসেন",
      picture: "/assets/home/review/man.svg",
      opinion:
        "ছোটবেলা থেকে ইচ্ছে ইঞ্জিনিয়ারিং পড়ার। একজন সিনিয়র ভাইয়া বা আপুকে খুঁজছিলাম যিনি আমাকে সঠিক গাইডলাইন দিবেন, কিন্তু তেমন কাউকে পাচ্ছিলাম না। শেষমেশ সন্ধান পেলাম প্ল্যান নাও এর, সার্ভিস নিতে রেজিস্টার করলাম। এক্সপার্ট ভাইয়ারা এতো সুন্দর করে গাইডলাইন দিলেন যে আমি আমার সমস্ত প্রশ্নের উত্তর পেয়ে গেলাম। আলহামদুলিল্লাহ আমি এখন গাইডলাইন মোতাবেক পড়াশোনা করছি।",
      qualification: "পিএইচডি, ইউনিভার্সিটি",
      ratings: 3,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="py-12 bg-[#F0FCF7]">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center font-bold pb-12">
          সেবা গ্রহণকারীদের <span className="text-[#004f3a]">মতামত</span>
        </h1>
        <Carousel
          swipeable="true"
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite={true}
        >
          {reviews?.map((review, index) => (
            <div
              key={index}
              className="grid grid-cols-1 p-8 md:grid-cols-2 md:gap-2 gap-12 items-center"
            >
              <div className="reviewBg w-3/4 lg:block md:block hidden rounded-2xl">
                <img
                  className="mx-auto"
                  src={review.picture}
                  alt={review.name}
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex -mb-6 ml-8">
                  {" "}
                  <img
                    className="mr-2"
                    src="/assets/home/review/quotation.svg"
                    loading="lazy"
                    alt="quotation"
                  />
                  <img
                    src="/assets/home/review/quotation.svg"
                    loading="lazy"
                    alt="quotation"
                  />
                </div>
                <div className="shadow rounded-xl p-8 lg:pt-16">
                  <p className="text-slate-500 leading-7 pb-4 text-justify font-semibold">
                    {review.opinion}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="border-2 border-[#007f7b] h-20 w-20 object-cover rounded-full lg:hidden md:hidden block">
                        <img
                          className="mx-auto max-w-full h-20 w-20 object-cover lg:hidden md:hidden block rounded-full"
                          src={review.picture}
                          alt="review"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-3 text-end">
                      <div className="flex justify-end">
                        {[...Array(review.ratings).keys()]?.map((rating) => (
                          <img
                            key={rating}
                            src="/assets/home/review/star.svg"
                            alt="rating"
                            loading="lazy"
                          />
                        ))}
                      </div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-[#8C8C8C] font-semibold">{review.qualification}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Review;
