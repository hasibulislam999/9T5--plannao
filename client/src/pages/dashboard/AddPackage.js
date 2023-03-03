import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { usePostPackageMutation } from "../../features/package/packageApi";

const token = localStorage.getItem("accessToken");

const AddPackage = () => {
  const { handleSubmit, register, reset } = useForm();
  const [thumbnail, setThumbnail] = useState("");
  const [thumbnailLoading, setThumbnailLoading] = useState(false);
  const [postPackage, { isLoading, isSuccess }] = usePostPackageMutation();

  useEffect(() => {
    if (isLoading) {
      toast.loading("Package posting.", { id: "postPackage" });
    } else if (isSuccess) {
      toast.success("Package posted!", { id: "postPackage" });
      setThumbnail("");
    }
  }, [isLoading, isSuccess]);

  function handlePackageThumbnail(event) {
    const formData = new FormData();
    formData.append("thumbnail", event.target.files[0]);

    setThumbnailLoading(true);
    const postThumbnail = async () => {
      const request = await fetch(
        `${process.env.REACT_APP_BASE_URL}package/thumbnail`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      const response = await request.json();
      setThumbnail(response?.data?.filename);
      setThumbnailLoading(false);
    };
    postThumbnail();
  }

  function handleAddPackage(data) {
    data.price = Number(data.price);
    postPackage({ ...data, thumbnail });
    reset();
  }

  return (
    <section className="flex justify-center items-center h-full w-full">
      <form
        className="shadow-lg md:p-10 p-4 rounded-lg flex flex-wrap gap-y-6 max-w-3xl justify-between bg-white"
        onSubmit={handleSubmit(handleAddPackage)}
      >
        {/* package title */}
        <div className="flex flex-col w-full">
          <label className="mb-2 flex justify-between" htmlFor="title">
            Title
          </label>
          <input
            className="w-full px-8 py-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type="text"
            name="title"
            placeholder="Package title"
            {...register("title", {
              required: true,
            })}
          />
        </div>

        {/* package category */}
        <div className="w-full flex flex-col">
          <label className="mb-2 flex justify-between" htmlFor="title">
            Category
          </label>
          <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            {...register("category")}
          >
            <option value="academic">Academic</option>
            <option value="professional">Professional</option>
            <option value="job-related">Job Related</option>
          </select>
        </div>

        {/* package thumbnail */}
        {thumbnailLoading ? (
          "Uploading..."
        ) : thumbnail?.length === 0 ? (
          <div className="flex flex-col w-full">
            <label className="mb-2 flex justify-between" htmlFor="structure">
              Thumbnail
            </label>
            <div className="flex items-center justify-center w-full">
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-3"
                id="file_input"
                name="thumbnail"
                type="file"
                onChange={handlePackageThumbnail}
                required
              />
            </div>
          </div>
        ) : (
          "Thumbnail uploaded!"
        )}

        {/* package about */}
        <div className="flex flex-col w-full">
          <label className="mb-2 flex justify-between" htmlFor="about">
            About
          </label>
          <textarea
            rows={3}
            {...register("about", {
              required: true,
            })}
            id="about"
            className="bg-gray-50 rounded-xl"
            placeholder="Write brief package about"
          />
        </div>

        {/* package structure */}
        <div className="flex flex-col w-full">
          <label className="mb-2 flex justify-between" htmlFor="structure">
            Structure
          </label>
          <textarea
            rows={3}
            {...register("description.structure", {
              required: true,
            })}
            id="structure"
            className="bg-gray-50 rounded-xl"
            placeholder="Write brief package structure"
          />
        </div>

        {/* package purpose */}
        <div className="flex flex-col w-full">
          <label className="mb-2 flex justify-between" htmlFor="purpose">
            Purpose
          </label>
          <textarea
            rows={3}
            {...register("description.purpose", {
              required: true,
            })}
            id="purpose"
            className="bg-gray-50 rounded-xl"
            placeholder="Write brief package purpose"
          />
        </div>

        {/* package price */}
        <div className="flex flex-col w-full">
          <label className="mb-2 flex justify-between" htmlFor="price">
            Price
          </label>
          <input
            className="w-full px-8 py-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type="number"
            name="price"
            placeholder="Package price"
            {...register("price", {
              required: true,
            })}
          />
        </div>

        {/* submit button */}
        <button type="submit" className="btn-primary">
          Add new package
        </button>
      </form>
    </section>
  );
};

export default AddPackage;
