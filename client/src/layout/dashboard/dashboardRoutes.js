import { BiPackage, BiListUl } from "react-icons/bi";
import { CgUserList } from "react-icons/cg";

const iconStyle = "lg:h-4 md:h-10 h-8 lg:w-4 md:w-10 w-8 lg:mx-0 md:mx-auto";

const dashboardRoutes = [
  {
    icon: <BiPackage className={iconStyle} />,
    name: "নতুন প্যাকেজ যোগ করুন",
    anchor: "add-package",
  },
  {
    icon: <BiListUl className={iconStyle} />,
    name: "প্যাকেজ গুলো দেখুন",
    anchor: "list-package",
  },
  {
    icon: <CgUserList className={iconStyle} />,
    name: "ব্যবহারকারীদের দেখুন",
    anchor: "list-user",
  },
];

export default dashboardRoutes;
