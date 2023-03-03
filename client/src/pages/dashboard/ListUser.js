import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  useGetAllUsersQuery,
  useRemoveUserInfoMutation,
} from "../../features/auth/authApi";

const ListUser = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading: isFetching } = useGetAllUsersQuery(page);
  const users = data?.data?.result || {};
  const count = Number(data?.data?.count);
  const [deleteUser, { isLoading: isRemoving, isSuccess }] =
    useRemoveUserInfoMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isRemoving) {
      toast.loading("User removing.", { id: "deleteUser" });
    } else if (isSuccess) {
      toast.success("User removed!", { id: "deleteUser" });
    }
  }, [isRemoving, isSuccess]);

  return (
    <section className="flex flex-col justify-center items-center h-full w-full">
      <div className="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <div className="font-semibold text-gray-800">Users</div>
        </header>

        {isFetching ? (
          <div className="w-12 h-12 rounded-full animate-spin border-x-4 border-solid border-[#008771] border-t-transparent my-12 mx-auto" />
        ) : (
          <div className="overflow-x-auto p-3">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2">
                    <div className="font-semibold text-left">Avatar</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Name</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Email</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Transactions</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">WhatsApp</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Role</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-left">Status</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Action</div>
                  </th>
                </tr>
              </thead>

              <tbody className="text-sm divide-y divide-gray-100">
                {users?.map(
                  ({
                    _id,
                    name,
                    email,
                    whatsApp,
                    role,
                    status,
                    transaction,
                  }) => (
                    <tr key={_id} className="hover:bg-slate-50 transition-all">
                      <td className="p-2">
                        <span className="h-fit w-fit flex justify-center items-center px-2 py-1 rounded-full shadow">
                          {name
                            ?.split(" ")
                            ?.map((k) => k[0])
                            ?.join("")}
                        </span>
                      </td>
                      <td className="p-2">
                        <div
                          className="text-left capitalize overflow-hidden text-ellipsis whitespace-nowrap"
                          title={name}
                        >
                          {name}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-left">{email}</div>
                      </td>
                      <td className="p-2">
                        <div className="text-left">
                          {transaction?.transactionInfo
                            ? transaction?.transactionInfo?.length
                            : "N/A"}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-left">{whatsApp}</div>
                      </td>
                      <td className="p-2">
                        <div className="text-center text-purple-500">
                          {role}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-left font-medium">{status}</div>
                      </td>
                      <td className="p-2">
                        <div className="flex justify-center">
                          {/* overview */}
                          {role === "user" && (
                            <button
                              onClick={() =>
                                navigate(`/dashboard/list-user/${_id}`)
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
                          )}
                          {/* remove button */}
                          {role !== "admin" ? <button onClick={() => deleteUser(_id)}>
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
                          </button> : "N/A"}
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
    </section>
  );
};

export default ListUser;
