import { FaUserSecret } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { DiOpensource } from "react-icons/di";

const iconStyle = "lg:h-4 md:h-10 h-8 lg:w-4 md:w-10 w-8 lg:mx-0 md:mx-auto";

const whatToDoRoutes = [
  {
    icon: <HiAcademicCap className={iconStyle} />,
    name: "একাডেমিক",
    anchor: "academic",
  },
  {
    icon: <FaUserSecret className={iconStyle} />,
    name: "প্রফেশনাল",
    anchor: "professional",
  },
  {
    icon: <DiOpensource className={iconStyle} />,
    name: "জব সংক্রান্ত",
    anchor: "job-related",
  },
];

export default whatToDoRoutes;
