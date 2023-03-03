import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/auth/authSlice";
import Signin from "../account/Signin";
import Signup from "../account/Signup";

const AuthModal = () => {
  const [authTitle, setAuthTitle] = useState("Signin");
  const { isOpen } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    isOpen && (
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="fixed inset-0 z-10 overflow-y-auto my-4">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="text-right absolute right-4 top-4">
                  <button
                    className="bg-red-500 rounded-full p-2 text-white"
                    onClick={() => {
                      dispatch(openModal());
                      setAuthTitle("Signin");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/* content display here! */}
                {authTitle === "Signin" && (
                  <Signin authTitle={authTitle} setAuthTitle={setAuthTitle} />
                )}
                {authTitle === "Signup" && (
                  <Signup authTitle={authTitle} setAuthTitle={setAuthTitle} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AuthModal;
