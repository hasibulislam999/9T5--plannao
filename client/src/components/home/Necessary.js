const Necessary = () => {
  const necessities = [
    {
      picture: "/assets/home/necessary/package-1.svg",
      content: "ইন্ডাস্ট্রি ও একাডেমিক এক্সপার্টদের কাছ থেকে দিকনির্দেশনা ",
    },
    {
      picture: "/assets/home/necessary/package-2.svg",
      content: "রোডম্যাপ প্রস্তুতিতে সহায়তা  ",
    },
    {
      picture: "/assets/home/necessary/package-3.svg",
      content: "ম্যাটেরিয়ালস বাছাই করে দেয়া ",
    },
    {
      picture: "/assets/home/necessary/package-4.svg",
      content: "এন্ড টু এন্ড মেন্টরশিপ",
    },
  ];

  return (
    <div className="bg-[#F0FCF7] py-12">
      <div className="container mx-auto lg:px-0 px-4">
        <h1 className="text-4xl text-center font-bold py-8">
          কেন আমাদের মেন্টরসমূহ{" "}
          <span className="text-[#004f3a]">কার্যকরী?</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {necessities?.map((necessary, index) => (
            <div key={index} className="bg-white shadow p-8 rounded-md">
              <img
                className="mx-auto pb-5"
                src={necessary.picture}
                alt={necessary.content}
                loading="lazy"
              />
              <p
                className="text-center text-[#4A4A4A] font-bold overflow-hidden text-ellipsis whitespace-nowrap"
                title={necessary.content}
              >
                {necessary.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Necessary;
