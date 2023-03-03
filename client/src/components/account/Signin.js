import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSigninMutation } from "../../features/auth/authApi";

const Signin = ({ authTitle, setAuthTitle }) => {
  const { register, handleSubmit, reset } = useForm();
  const [signin, { isLoading, isSuccess }] = useSigninMutation();

  useEffect(() => {
    if (isLoading) {
      toast.loading("Signing in.", { id: "signin" });
    } else if (isSuccess) {
      toast.success("Signed in!", { id: "signin" });
      window.location.reload();
    }
  }, [isLoading, isSuccess]);

  function handleSignin(data) {
    signin(data);
    reset();
  }

  return (
    <form
      className="shadow-lg bg-secondary/10 lg:px-10 md:px-5 px-2  py-4 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
      onSubmit={handleSubmit(handleSignin)}
    >
      <h1
        className="w-full text-2xl text-secondary mb-5 font-semibold text-ellipsis overflow-hidden whitespace-nowrap"
        title={authTitle}
      >
        {authTitle}
      </h1>

      {/* email */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="email">
          Email
        </label>
        <input type="text" id="email" {...register("email")} />
      </div>

      {/* password */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="password">
          Password
        </label>
        <input type="password" id="password" {...register("password")} />
      </div>

      <button className="btn-primary w-full mt-4" type="submit">
        Signin
      </button>

      <p
        className="text-primary font-medium mx-auto underline cursor-pointer"
        onClick={() => setAuthTitle("Signup")}
      >
        Create an account
      </p>
    </form>
  );
};

export default Signin;
