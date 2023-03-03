import Main from "../layout/main/Main";
import Home from "../pages/main/Home";
import Detail from "../pages/package/Detail";

const mainRoutes = {
  path: "/",
  element: <Main />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "package-detail/:id",
      element: <Detail />,
    },
  ],
};

export default mainRoutes;
