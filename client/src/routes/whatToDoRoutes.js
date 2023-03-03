import WhatToDo from "../layout/whatToDo/WhatToDo";
import MyProfile from "../pages/dashboard/MyProfile";
import Academic from "../pages/package/Academic";
import JobRelated from "../pages/package/JobRelated";
import Professional from "../pages/package/Professional";

const whatToDoRoutes = {
  path: "/what-to-do",
  element: <WhatToDo />,
  children: [
    {
      path: "/what-to-do",
      element: <MyProfile />,
    },
    {
      path: "academic",
      element: <Academic />,
    },
    {
      path: "professional",
      element: <Professional />,
    },
    {
      path: "job-related",
      element: <JobRelated />,
    },
  ],
};

export default whatToDoRoutes;
