import React from "react";
import { HiHome } from "react-icons/hi";
import { MdCategory } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import whatToDoRoutes from "./whatToDoRoutes";

const Sidebar = () => {
  const location = useLocation();

  return (
    <section className="col-span-2 bg-[#008771]/60 lg:p-4 md:p-4 p-2 rounded-lg">
      <ul className="flex gap-y-4  flex-col h-full">
        <li className="font-medium text-lg overflow-hidden text-ellipsis whitespace-nowrap flex gap-x-2 items-center">
          <MdCategory className="lg:h-6 md:h-10 h-8 lg:w-6 md:w-10 w-8 lg:mx-0 md:mx-auto" />{" "}
          <span className="lg:inline-block hidden font-bold">কি হতে চাও?</span>
        </li>
        <hr />

        {whatToDoRoutes.map((whatToDoRoute, index) => (
          <li key={index} className="py-1 rounded-lg">
            <Link
              to={whatToDoRoute.anchor}
              className={`overflow-hidden text-ellipsis whitespace-nowrap flex gap-x-2 items-center font-bold hover:text-secondary ${
                location.pathname.includes(whatToDoRoute.anchor)
                  ? "text-secondary"
                  : null
              }`}
            >
              {whatToDoRoute.icon}{" "}
              <span className="lg:inline-block hidden">
                {whatToDoRoute.name}
              </span>
            </Link>
          </li>
        ))}

        {/* redirect to home route */}
        <li className="mt-auto">
          <Link
            to="/"
            className="overflow-hidden text-ellipsis whitespace-nowrap flex gap-x-1 items-center"
          >
            <HiHome className="lg:h-5 md:h-10 h-8 lg:w-5 md:w-10 w-8 lg:mx-0 md:mx-auto" />{" "}
            <span className="lg:inline-block hidden font-bold">
              হোম এ ফিরুন
            </span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
