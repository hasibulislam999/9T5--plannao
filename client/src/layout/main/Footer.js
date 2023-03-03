import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  const socialIcons = [
    "/assets/home/social/facebook.svg",
    "/assets/home/social/instagram.svg",
    "/assets/home/social/twitter.svg",
    "/assets/home/social/youtube.svg",
  ];

  return (
    <section className="lg:py-20 md:py-20 py-12 lg:px-0 px-6 bg-white dark:bg-gray-900">
      <footer className="container mx-auto">
        <div className="md:flex md:justify-between">
          <div className="flex flex-col gap-y-4">
            <Link to="/">
              <img
                src="logo.svg"
                className="h-8 mr-3"
                alt="PlanNao Logo"
                loading="lazy"
              />
            </Link>
            <article className="flex flex-col gap-y-1">
              <p className="text-white">
                ইন্ডাস্ট্রি এবং একাডেমিক এক্সপার্টদের সঙ্গে{" "}
              </p>
              <p className="text-white">
                আলোচনার মাধ্যমে সঠিক ডিসিশন টি পছন্দ করুন
              </p>
            </article>
          </div>
          <div className="flex flex-wrap items-start gap-8 lg:mt-0 md:mt-0 mt-8">
            <div className="flex flex-col gap-y-4">
              <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">
                যোগাযোগ
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-2">
                  <a
                    href="tel:+8801906315901"
                    className="hover:underline flex items-center gap-x-1"
                  >
                    <AiOutlinePhone />
                    +8801906-315901
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="mailto:plannao2022@gmail.com"
                    className="hover:underline flex items-center gap-x-1"
                  >
                    <AiOutlineMail />
                    plannao2022@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">
                ডাউনলোড করুন
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-2">
                  <Link
                    to="/"
                    className="hover:underline flex items-center gap-x-2"
                  >
                    <FaGooglePlay />
                    Google Play
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/"
                    className="hover:underline flex items-center gap-x-2"
                  >
                    <GrAppleAppStore />
                    App Store
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {year}{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              PlanNao™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {socialIcons.map((icon, index) => (
              <Link key={index} to="/">
                <img src={icon} alt={index} loading="lazy" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
