import React from "react";
import PackageCard from "../../components/home/packages/PackageCard";
import PackageModal from "../../components/modals/PackageModal";
import { useGetPackagesQuery } from "../../features/package/packageApi";

const Professional = () => {
  const { data, isLoading } = useGetPackagesQuery();

  const packages = data?.data?.result || {};

  if (isLoading) {
    return (
      <section className="h-[calc(100vh-60px)] w-full overflow-hidden flex justify-center items-center">
        <div className="w-20 h-20 rounded-full animate-spin border-x-4 border-solid border-[#008771] border-t-transparent" />
      </section>
    );
  }

  const professionalPackages = packages?.filter(
    (pkg) => pkg.category === "professional"
  );

  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-4">
      {professionalPackages?.map((mentor) => (
        <PackageCard key={mentor?._id} mentor={mentor} />
      ))}

      <PackageModal />
    </section>
  );
};

export default Professional;
