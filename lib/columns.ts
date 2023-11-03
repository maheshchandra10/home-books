import { ColumnDef } from "@tanstack/react-table";

import { TBook } from "@/books";

export const columns: ColumnDef<TBook>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
];
