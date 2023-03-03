import React from "react";
import Banner from "../../components/home/Banner";
import Necessary from "../../components/home/Necessary";
import AcademicPackages from "../../components/home/packages/AcademicPackages";
import JobRelatedPackages from "../../components/home/packages/JobRelatedPackages";
import ProfessionalPackages from "../../components/home/packages/ProfessionalPackages";
import Review from "../../components/home/Review";
import Solution from "../../components/home/Solution";
import PackageModal from "../../components/modals/PackageModal";
import { useGetPackagesQuery } from "../../features/package/packageApi";

const Home = () => {
  const { data, isLoading } = useGetPackagesQuery();
  const packages = data?.data?.result || {};

  if (isLoading) {
    return (
      <section className="h-[calc(100vh-60px)] w-full overflow-hidden flex justify-center items-center">
        <div className="w-20 h-20 rounded-full animate-spin border-x-4 border-solid border-[#008771] border-t-transparent" />
      </section>
    );
  }

  const academicPackages = packages?.filter(
    (pkg) => pkg.category === "academic"
  );
  const professionalPackages = packages?.filter(
    (pkg) => pkg.category === "professional"
  );
  const jobRelatedPackages = packages?.filter(
    (pkg) => pkg.category === "job-related"
  );

  return (
    <>
      <Banner />
      <Solution />
      <Necessary />
      <AcademicPackages packages={academicPackages} />
      <ProfessionalPackages packages={professionalPackages} />
      <JobRelatedPackages packages={jobRelatedPackages} />
      <Review />

      <PackageModal />
    </>
  );
};

export default Home;
