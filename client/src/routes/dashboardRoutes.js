import Dashboard from "../layout/dashboard/Dashboard";
import AddPackage from "../pages/dashboard/AddPackage";
import ListPackage from "../pages/dashboard/ListPackage";
import ListUser from "../pages/dashboard/ListUser";
import MyProfile from "../pages/dashboard/MyProfile";
import PackageUpdate from "../pages/dashboard/PackageUpdate";
import UserInformation from "../pages/dashboard/UserInformation";

const dashboardRoutes = {
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    {
      path: "/dashboard",
      element: <MyProfile />,
    },
    {
      path: "add-package",
      element: <AddPackage />,
    },
    {
      path: "list-package",
      element: <ListPackage />,
    },
    {
      path: "list-package/:id",
      element: <PackageUpdate />,
    },
    {
      path: "list-user",
      element: <ListUser />,
    },
    {
      path: "list-user/:id",
      element: <UserInformation />,
    },
  ],
};

export default dashboardRoutes;
