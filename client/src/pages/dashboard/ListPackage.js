import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import OverviewModal from "../../components/modals/OverviewModal";
import {
  useDeletePackageMutation,
  useGetPackagesQuery,
} from "../../features/package/packageApi";
import { setPackage } from "../../features/package/packageSlice";

const ListPackage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading: isFetching } = useGetPackagesQuery(page);
  const packages = data?.data?.result || {};
  const count = Number(data?.data?.count);
  const [deletePackage, { isLoading: isRemoving, isSuccess }] =
    useDeletePackageMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isRemoving) {
      toast.loading("Package removing.", { id: "deletePackage" });
    } else if (isSuccess) {
      toast.success("Package removed!", { id: "deletePackage" });
    }
  }, [isRemoving, isSuccess]);

  return (
    <section className="flex flex-col justify-center items-center h-full w-full">
      <div className="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <div className="font-semibold text-gray-800">Packages</div>
        </header>

        {isFetching ? (
          <div className="w-12 h-12 rounded-full animate-spin border-x-4 border-solid border-[#008771] border-t-transparent my-12 mx-auto" />
        ) : (
          <div className="overflow-x-auto p-3">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2">
                    <div className="font-semibold text-left">Thumbnail</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Title</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Category</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Price</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Status</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Users</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Action</div>
                  </th>
                </tr>
              </thead>

              <tbody className="text-sm divide-y divide-gray-100">
                {packages.map(
                  ({
                    _id,
                    title,
                    category,
                    thumbnail,
                    price,
                    status,
                    users,
                    about,
                    description,
                  }) => (
                    <tr key={_id} className="hover:bg-slate-50 transition-all">
                      <td className="p-2">
                        <img
                          src={process.env.REACT_APP_BASE_URL + thumbnail}
                          alt={title}
                          className="w-10 h-10 object-cover object-center rounded-full shadow"
                          loading="lazy"
                        />
                      </td>
                      <td className="p-2">
                        <div
                          className="text-left capitalize overflow-hidden text-ellipsis whitespace-nowrap"
                          title={title}
                        >
                          {title}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-left text-purple-500">
                          {category}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-left font-medium">
                          ৳ {Number(price).toLocaleString("bn-BD")}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-left font-medium">{status}</div>
                      </td>
                      <td className="p-2">
                        <div className="text-center font-medium">
                          {users?.length}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="flex justify-center">
                          {/* overview */}
                          <button
                            onClick={() =>
                              dispatch(
                                setPackage({
                                  _id,
                                  title,
                                  category,
                                  thumbnail,
                                  price,
                                  status,
                                  users,
                                  about,
                                  description,
                                })
                              )
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-8 h-8 hover:text-green-600 rounded-full hover:bg-gray-100 p-1"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </button>
                          {/* edit button */}
                          <button
                            onClick={() =>
                              navigate(`/dashboard/list-package/${_id}`)
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-8 h-8 hover:text-indigo-600 rounded-full hover:bg-gray-100 p-1"
                            >
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>
                          </button>
                          {/* remove button */}
                          <button onClick={() => deletePackage(_id)}>
                            <svg
                              className="w-8 h-8 hover:text-red-600 rounded-full hover:bg-gray-100 p-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-row gap-x-4">
        <button
          onClick={() => page >= 2 && setPage(page - 1)}
          className="btn-secondary"
        >
          Previous
        </button>
        <button
          onClick={() => page < Math.ceil(count / 10) && setPage(page + 1)}
          className="btn-primary"
        >
          Next
        </button>
      </div>

      <OverviewModal />
    </section>
  );
};

export default ListPackage;
