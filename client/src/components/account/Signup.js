import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSignupMutation } from "../../features/auth/authApi";

const Signup = ({ authTitle, setAuthTitle }) => {
  const { register, handleSubmit, reset } = useForm();
  const [signup, { isLoading, isSuccess }] = useSignupMutation();

  useEffect(() => {
    if (isLoading) {
      toast.loading("Signing up.", { id: "signup" });
    } else if (isSuccess) {
      toast.success("Signed up!", { id: "signup" });
      window.location.reload();
    }
  }, [isLoading, isSuccess]);

  function handleSignup(data) {
    data.whatsApp = "+88" + data.whatsApp;
    signup(data);
    reset();
  }

  return (
    <form
      className="shadow-lg bg-secondary/10 lg:px-10 md:px-5 px-2  py-4 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
      onSubmit={handleSubmit(handleSignup)}
    >
      <h1
        className="w-full text-2xl text-secondary mb-5 font-semibold text-ellipsis overflow-hidden whitespace-nowrap"
        title={authTitle}
      >
        {authTitle}
      </h1>

      {/* name */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="name">
          Name
        </label>
        <input type="text" id="name" {...register("name")} />
      </div>

      {/* email */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="email">
          Email
        </label>
        <input type="email" id="email" {...register("email")} />
      </div>

      {/* password */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="password">
          Password
        </label>
        <input type="password" id="password" {...register("password")} />
      </div>

      {/* whatsApp */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="whatsApp">
          WhatsApp
        </label>
        <input type="number" id="whatsApp" {...register("whatsApp")} />
      </div>

      <button className="btn-primary w-full mt-4" type="submit">
        Signup
      </button>

      <p
        className="text-primary font-medium mx-auto underline cursor-pointer"
        onClick={() => setAuthTitle("Signin")}
      >
        Signin to your account
      </p>
    </form>
  );
};

export default Signup;
