import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/auth/authSlice";
import { closeModal } from "../../features/package/packageSlice";
import Purchase from "../payment/Purchase";
import Transaction from "../payment/Transaction";

const PackageModal = () => {
  const { package: mentor, isOpen } = useSelector((state) => state.package);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [option, setOption] = useState("Purchase");

  return (
    <>
      {isOpen && (
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
                        dispatch(closeModal());
                        setOption("Purchase");
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
                  {Object.keys(user).length ? (
                    <>
                      {/* content display here! */}
                      {option === "Purchase" && (
                        <Purchase setOption={setOption} mentor={mentor} />
                      )}
                      {option === "Transaction" && (
                        <Transaction mentor={mentor} />
                      )}
                    </>
                  ) : (
                    <span class="bg-red-100 text-red-800 text-xs inline-flex items-center px-2.5 py-0.5 rounded border border-red-500 font-bold gap-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      প্রথমে
                      <span
                        onClick={() => dispatch(openModal())}
                        className="underline cursor-pointer"
                      >
                        সাইন-ইন
                      </span>
                      করুন
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PackageModal;
