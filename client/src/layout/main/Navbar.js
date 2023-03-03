import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { AiFillCaretUp } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logout, openModal } from "../../features/auth/authSlice";

const Navbar = () => {
  const [visibility, setVisibility] = useState(false);
  const { user, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const menuRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setVisibility(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  if (isLoading) {
    return (
      <section className="h-screen w-screen flex justify-center items-center overflow-hidden">
        <div className="w-12 h-12 rounded-full animate-spin border-x-4 border-solid border-[#008771] border-t-transparent" />
      </section>
    );
  }


  return (
    <section className="bg-[#298770] lg:py-0 py-2">
      <div className="container mx-auto lg:px-0 px-4 py-2">
        <div className="flex lg:justify-between md:justify-between lg:items-center md:items-center lg:flex-row md:flex-row flex-col lg:gap-0 gap-y-2">
          {/* logo */}
          <Link to="/" title="Go to home">
            <img src="logo.svg" alt="logo" loading="lazy" className="w-40 lg:mx-0 md:mx-0 mx-auto" />
          </Link>

          {/* nav items */}
          <div className="flex lg:gap-x-4 md:gap-x-4 lg:flex-row md:flex-row flex-col gap-y-4 items-center">
            <Link
              to="/dashboard"
              className="font-bold text-white hover:text-secondary"
            >
              ড্যাশবোর্ড
            </Link>
            <div
              className="font-bold text-white flex items-center relative hover:text-secondary"
              ref={menuRef}
              onClick={() => setVisibility(!visibility)}
            >
              কি হতে চাও? <BiChevronDown className="font-bold w-6 h-6" />
              {visibility && (
                <div className="absolute top-full mt-4 bg-white p-4 rounded-md text-black flex flex-col gap-y-3">
                  <AiFillCaretUp className="w-8 h-8 text-white absolute -top-6" />
                  <Link
                    to="/what-to-do/academic"
                    className="whitespace-nowrap hover:text-secondary"
                  >
                    একাডেমিক
                  </Link>
                  <Link
                    to="/what-to-do/professional"
                    className="whitespace-nowrap hover:text-secondary"
                  >
                    প্রফেশনাল
                  </Link>
                  <Link
                    to="/what-to-do/job-related"
                    className="whitespace-nowrap hover:text-secondary"
                  >
                    জব সংক্রান্ত
                  </Link>
                </div>
              )}
            </div>
            {Object.keys(user).length ? (
              <button
                className="btn-secondary flex items-center gap-x-2"
                onClick={() => dispatch(logout())}
              >
                <span className="h-fit w-fit flex justify-center items-center px-2 py-1 rounded-full shadow">
                  {user?.name
                    ?.split(" ")
                    ?.map((k) => k[0])
                    ?.join("")}
                </span>{" "}
                সাইন আউট
              </button>
            ) : (
              <button
                className="btn-secondary"
                onClick={() => dispatch(openModal())}
              >
                সাইন ইন
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
