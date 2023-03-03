import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { usePostTransactionMutation } from "../../features/transaction/transactionApi";
import { toast } from "react-hot-toast";

const Transaction = ({ mentor }) => {
  const { title, _id, price } = mentor;
  const { user } = useSelector((state) => state.auth);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      user: user?.name,
      package: title,
      price,
    },
  });
  const [insertTransaction, { isLoading, isSuccess }] =
    usePostTransactionMutation();

  useEffect(() => {
    if (isLoading) {
      toast.loading("Transaction adding.", { id: "insertTransaction" });
    } else if (isSuccess) {
      toast.success("Transaction added!", { id: "insertTransaction" });
    }
  }, [isLoading, isSuccess]);

  useEffect(() => {
    reset(mentor);
  }, [mentor, reset]);

  function handleTransaction(data) {
    const transactionInformation = {
      user: user?._id,
      transactionInfo: {
        transactionId: data.transactionId,
        package: _id,
      },
    };

    insertTransaction(transactionInformation);
    reset();
  }

  return (
    <form
      className="shadow-lg bg-secondary/10 lg:px-10 md:px-5 px-2  py-4 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
      onSubmit={handleSubmit(handleTransaction)}
    >
      <h1
        className="w-full text-2xl text-secondary mb-5 font-semibold text-ellipsis overflow-hidden whitespace-nowrap"
        title={title}
      >
        {title}
      </h1>

      {/* user */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="user">
          User
        </label>
        <input readOnly type="text" id="user" {...register("user")} />
      </div>

      {/* package */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="package">
          Package
        </label>
        <input readOnly type="text" id="package" {...register("package")} />
      </div>

      {/* price */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="price">
          Price
        </label>
        <input readOnly type="text" id="price" {...register("price")} />
      </div>

      {/* transactionId */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="transactionId">
          Price
        </label>
        <input
          type="text"
          id="transactionId"
          placeholder="Enter 10 digit trnxID"
          {...register("transactionId")}
        />
      </div>

      <button className="btn-primary w-full mt-4" type="submit">
        Purchase
      </button>
    </form>
  );
};

export default Transaction;
