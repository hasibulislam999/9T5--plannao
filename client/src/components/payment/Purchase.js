import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Purchase = ({ mentor, setOption }) => {
  const [mentorship, setMentorship] = useState({});

  useEffect(() => {
    setMentorship(mentor);
  }, [mentor]);

  const { title, category, about, description, price, status, _id, thumbnail } =
    mentorship;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title,
      category,
      about,
      price,
      status,
      description,
    },
  });

  useEffect(() => {
    reset(mentor);
  }, [mentor, reset]);

  function handlePurchase(data) {
    console.log({ ...data, _id, thumbnail });
  }

  return (
    <form
      className="shadow-lg bg-secondary/10 lg:px-10 md:px-5 px-2  py-4 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
      onSubmit={handleSubmit(handlePurchase)}
    >
      <h1
        className="w-full text-2xl text-secondary mb-5 font-semibold text-ellipsis overflow-hidden whitespace-nowrap"
        title={title}
      >
        {title}
      </h1>

      {/* title */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="title">
          Title
        </label>
        <input readOnly type="text" id="title" {...register("title")} />
      </div>

      {/* category */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="category">
          Category
        </label>
        <input readOnly type="text" id="category" {...register("category")} />
      </div>

      {/* about */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="about">
          About
        </label>
        <textarea
          rows="4"
          readOnly
          type="text"
          id="about"
          {...register("about")}
        />
      </div>

      {/* structure */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="structure">
          Structure
        </label>
        <textarea
          rows="4"
          type="text"
          id="structure"
          {...register("description.structure")}
        />
      </div>

      {/* purpose */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="purpose">
          Purpose
        </label>
        <textarea
          rows="4"
          type="text"
          id="purpose"
          {...register("description.purpose")}
        />
      </div>

      {/* price */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="price">
          Price
        </label>
        <input readOnly type="text" id="price" {...register("price")} />
      </div>

      {/* status */}
      <div className="flex flex-col gap-y-2 w-full">
        <label className="font-semibold" htmlFor="status">
          Status
        </label>
        <input readOnly type="text" id="status" {...register("status")} />
      </div>

      <button
        className="btn-primary w-full mt-4"
        type="submit"
        onClick={() => setOption("Transaction")}
      >
        Purchase
      </button>
    </form>
  );
};

export default Purchase;
