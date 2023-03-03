import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useFindUserQuery } from "../../features/auth/authApi";

const UserInformation = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useFindUserQuery(id);
  const user = useMemo(() => {
    return data?.data;
  }, [data?.data]);

  const { register, reset } = useForm({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      whatsApp: user?.whatsApp,
      role: user?.role,
      status: user?.status,
    },
  });

  useEffect(() => {
    reset(user);
  }, [reset, user]);

  useEffect(() => {
    if (isLoading) {
      toast.loading("Fetching user.", { id: "fetchUser" });
    } else if (isSuccess) {
      toast.success("Fetched user!", { id: "fetchUser" });
    }
  }, [isLoading, isSuccess]);

  return (
    <section className="flex justify-center items-center h-full w-full">
      <form className="shadow-lg md:p-10 p-4 rounded-lg flex flex-wrap gap-y-6 max-w-3xl justify-between bg-white">
        {/* name field */}
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white cursor-not-allowed"
          type="text"
          name="name"
          disabled
          {...register("name", {
            required: true,
            minLength: 3,
            maxLength: 100,
          })}
        />

        {/* email field */}
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white cursor-not-allowed"
          type="email"
          name="email"
          {...register("email")}
          required
          disabled
        />

        {/* whatsApp field */}
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white cursor-not-allowed"
          type="whatsApp"
          name="whatsApp"
          {...register("whatsApp")}
          required
          disabled
        />

        <div className="flex lg:flex-row flex-col w-full gap-4">
          {/* role field */}
          <input
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white cursor-not-allowed capitalize"
            type="text"
            name="role"
            {...register("role")}
            disabled
          />

          {/* status field */}
          <input
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white cursor-not-allowed capitalize"
            type="text"
            name="status"
            {...register("status")}
            disabled
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {user?.transaction?.transactionInfo?.map((transaction) => (
            <div key={transaction?._id}>
              <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <img
                  src={
                    process.env.REACT_APP_BASE_URL +
                    transaction?.package?.thumbnail
                  }
                  alt={transaction?.package?.title}
                  class="w-12 h-12 mb-2 text-gray-500 object-cover object-center rounded-full"
                />
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                  {transaction?.package?.title}
                </h5>
                <p class="mb-3 font-normal text-gray-500">
                  {transaction?.package?.about}
                </p>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded border border-green-400">
                  {transaction?.transactionId}
                </span>
              </div>
            </div>
          ))}
        </div>
      </form>
    </section>
  );
};

export default UserInformation;
