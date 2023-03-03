import React from "react";
import { useDispatch } from "react-redux";
import { setPackage } from "../../../features/package/packageSlice";
import { useNavigate } from "react-router-dom";

const PackageCard = ({ mentor }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      key={mentor?._id}
      className="mx-4 bg-white border border-gray-200 rounded-md shadow-md"
    >
      <img
        src={process.env.REACT_APP_BASE_URL + mentor?.thumbnail}
        alt={mentor?.title}
        className="h-[250px] w-full object-cover rounded-t-md"
        loading="lazy"
      />
      <div className="p-5">
        <h2
          className="card-title justify-between whitespace-nowrap text-ellipsis overflow-hidden text-xl font-bold cursor-pointer"
          title={mentor?.title}
          onClick={() => navigate(`/package-detail/${mentor?._id}`)}
        >
          {mentor?.title.toUpperCase()}
        </h2>
        <div className="card-actions justify-between items-center">
          <p className="font-bold">
            ৳ {Number(mentor?.price).toLocaleString("bn-BD")}
          </p>
          <button
            className="btn-primary mt-4"
            onClick={() => dispatch(setPackage(mentor))}
          >
            {mentor?.status === "inactive" ? "Coming Soon" : "অর্ডার কর"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
