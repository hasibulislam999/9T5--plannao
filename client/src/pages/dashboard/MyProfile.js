import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const {
    user: { name, email, whatsApp, role, status },
  } = useSelector((state) => state.auth);
  const { register } = useForm({
    defaultValues: {
      name,
      email,
      whatsApp,
      role,
      status,
    },
  });

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
      </form>
    </section>
  );
};

export default MyProfile;
