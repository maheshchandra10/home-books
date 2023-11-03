"use client";

import Icons from "@/components/Icons";

const Categories = () => {
  return (
    <div className="py-[10px] px-5 w-full bg-white">
      <header className="flex justify-between w-full">
        <h1 className="text-2xl text-black font-bold">Dashboard</h1>
        <button className="w-12 h-12 bg-primary flex justify-center items-center rounded-[10px]">
          <Icons label="add" />
        </button>
      </header>
    </div>
  );
};

export default Categories;
