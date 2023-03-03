import { createBrowserRouter } from "react-router-dom";
import dashboardRoutes from "./dashboardRoutes";
import mainRoutes from "./mainRoutes";
import whatToDoRoutes from "./whatToDoRoutes";

const routes = createBrowserRouter([
  mainRoutes,
  dashboardRoutes,
  whatToDoRoutes,
]);

export default routes;
