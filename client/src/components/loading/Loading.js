import React from "react";
import "./Loading.module.css";

const Loading = () => {
  return (
    <section className="h-full w-full overflow-hidden">
      <div className="w-12 h-12 rounded-full animate-spin border-x-4 border-solid border-[#008771] border-t-transparent" />
    </section>
  );
};

export default Loading;
