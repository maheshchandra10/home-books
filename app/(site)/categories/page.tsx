import { data } from "@/books";
import Icons from "@/components/Icons";

import { DataTable } from "@/components/data-table";
import { columns } from "@/lib/columns";

const Categories = () => {
  return (
    <div className="py-[10px] px-5 w-full h-full overflow-y-auto bg-white">
      <header className="flex justify-between w-full">
        <h1 className="text-2xl text-black font-bold">Categorias</h1>
        <button className="w-12 h-12 bg-primary flex justify-center items-center rounded-[10px]">
          <Icons label="add" />
        </button>
      </header>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Categories;
