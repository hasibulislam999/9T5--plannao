import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/package/packageSlice";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const OverviewModal = () => {
  const { package: mentor, isOpen } = useSelector((state) => state.package);
  const {
    title,
    category,
    about,
    description,
    price,
    status,
    _id,
    thumbnail,
    users,
  } = mentor;
  const dispatch = useDispatch();
  const [aboutAccordion, setAboutAccordion] = useState(false);
  const [purposeAccordion, setPurposeAccordion] = useState(false);
  const [structureAccordion, setStructureAccordion] = useState(false);
  const [userAccordion, setUserAccordion] = useState(false);

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
                    onClick={() => dispatch(closeModal())}
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
                <div className="w-full flex flex-col gap-y-4">
                  {/* name and thumbnail */}
                  <div className="flex flex-row gap-x-4">
                    <img
                      src={process.env.REACT_APP_BASE_URL + thumbnail}
                      alt={_id}
                      className="w-10 h-10 object-cover object-center rounded-full shadow"
                      loading="lazy"
                    />
                    <h2 className="text-lg font-medium">{title}</h2>
                  </div>
                  {/* category, status and price */}
                  <div className="flex flex-row gap-x-1">
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded border border-red-400">
                      {category}
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded border border-green-400">
                      {status}
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded border border-yellow-300">
                      ৳ {Number(price).toLocaleString("bn-BD")}
                    </span>
                  </div>
                  {/* about, purpose and structure */}
                  <div className="flex flex-col gap-y-4">
                    <article className="shadow px-2 py-1 rounded-md flex flex-col gap-y-2">
                      <h3
                        className="text-lg font-medium flex justify-between items-center"
                        onClick={() => setAboutAccordion(!aboutAccordion)}
                      >
                        About
                        {aboutAccordion === false && (
                          <AiFillPlusCircle className="text-primary h-5 w-5" />
                        )}
                        {aboutAccordion === true && (
                          <AiFillMinusCircle className="text-secondary h-5 w-5" />
                        )}
                      </h3>
                      {aboutAccordion && <p>{about}</p>}
                    </article>
                    <article className="shadow px-2 py-1 rounded-md flex flex-col gap-y-2">
                      <h3
                        className="text-lg font-medium flex justify-between items-center"
                        onClick={() => setPurposeAccordion(!purposeAccordion)}
                      >
                        Purpose
                        {purposeAccordion === false && (
                          <AiFillPlusCircle className="text-primary h-5 w-5" />
                        )}
                        {purposeAccordion === true && (
                          <AiFillMinusCircle className="text-secondary h-5 w-5" />
                        )}
                      </h3>
                      {purposeAccordion && <p>{description?.purpose}</p>}
                    </article>
                    <article className="shadow px-2 py-1 rounded-md flex flex-col gap-y-2">
                      <h3
                        className="text-lg font-medium flex justify-between items-center"
                        onClick={() =>
                          setStructureAccordion(!structureAccordion)
                        }
                      >
                        Structure
                        {structureAccordion === false && (
                          <AiFillPlusCircle className="text-primary h-5 w-5" />
                        )}
                        {structureAccordion === true && (
                          <AiFillMinusCircle className="text-secondary h-5 w-5" />
                        )}
                      </h3>
                      {structureAccordion && <p>{description?.structure}</p>}
                    </article>
                    <article className="shadow px-2 py-1 rounded-md flex flex-col gap-y-4">
                      <h3
                        className="text-lg font-medium flex justify-between items-center"
                        onClick={() => setUserAccordion(!userAccordion)}
                      >
                        Users
                        {userAccordion === false && (
                          <AiFillPlusCircle className="text-primary h-5 w-5" />
                        )}
                        {userAccordion === true && (
                          <AiFillMinusCircle className="text-secondary h-5 w-5" />
                        )}
                      </h3>
                      {userAccordion && (
                        <div className="flex flex-col gap-y-4 h-28 overflow-y-scroll">
                          {users?.map(({ _id, name, email }) => (
                            <div key={_id} className="flex flex-row gap-x-2">
                              <span className="h-fit w-fit flex justify-center items-center px-2 py-1 rounded-full shadow">
                                {name
                                  ?.split(" ")
                                  ?.map((k) => k[0])
                                  ?.join("")}
                              </span>
                              <span className="flex flex-col">
                                <span>{name}</span>
                                <span>{email}</span>
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default OverviewModal;
