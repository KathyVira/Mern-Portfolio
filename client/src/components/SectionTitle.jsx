import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex gap-10 items-center py-20 sm:pt-40 px-40">
      <h2 className="text-3xl sm:text-xl text-secondary ">{title}</h2>
      <div className="w-60 h-[1px] sm:w-20 bg-primary"></div>
    </div>
  );
}

export default SectionTitle;
