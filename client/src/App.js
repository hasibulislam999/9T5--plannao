import "./App.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import AuthModal from "./components/modals/AuthModal";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMe, stopLoading } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage?.getItem("accessToken");

    if (token) {
      console.log("AccessToken founded :)");
      dispatch(getMe(token));
    } else {
      dispatch(stopLoading());
      console.log("No accessToken found :(");
    }
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
      <AuthModal />
    </>
  );
}

export default App;
