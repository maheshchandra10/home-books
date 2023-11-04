"use client";

import Icons from "@/components/Icons";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";

import { data, TBook } from "@/books";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Categories = () => {
  const [books, setBooks] = useState<TBook[]>([]);

  useEffect(() => {
    setBooks(data);
  }, []);

  const columns: ColumnDef<TBook>[] = [
    {
      accessorKey: "id",
      header: "#",
    },
    {
      accessorKey: "category",
      header: "Nome",
    },
    {
      accessorKey: "description",
      header: "Descrição",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const book = row.original;
        const bookId = book.id;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="w-8 h-8 p-0" variant="ghost">
                <Icons label="more_horiz" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => {
                  setBooks(
                    books.filter((book) => {
                      return book.id !== bookId;
                    })
                  );
                }}
                className="gap-[10px] hover:cursor-pointer"
              >
                <Icons label="delete" />
                Excluir
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-[10px] hover:cursor-pointer">
                <Icons label="edit" />
                Editar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div className="py-[10px] px-5 w-full h-screen overflow-y-auto bg-white">
      <header className="flex justify-between w-full">
        <h1 className="text-2xl text-black font-bold">Categorias</h1>
        <Button
          className="
            w-12
            h-12
            bg-primary
            hover:bg-blue-500
            flex 
            justify-center 
            items-center 
            rounded-[10px]
          "
        >
          <Icons label="add" />
        </Button>
      </header>
      <DataTable columns={columns} data={books} />
    </div>
  );
};

export default Categories;
