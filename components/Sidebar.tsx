"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import Icons from "./Icons";
import MenuItem from "./MenuItem";
import { Profile } from "./Profile";

const Sidebar = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: <Icons label="dashboard" />,
        label: "Dashboard",
        active: pathname === "/dashboard",
        href: "/dashboard",
      },
      {
        icon: <Icons label="category" />,
        label: "Categorias",
        active: pathname === "/categories",
        href: "/categories",
      },
      {
        icon: <Icons label="groups" />,
        label: "Autores",
        active: pathname === "/authors",
        href: "/authors",
      },
      {
        icon: <Icons label="book_4" />,
        label: "Livros",
        active: pathname === "/books",
        href: "/books",
      },
    ],
    [pathname]
  );

  return (
    <>
      <div
        className="
          relative
          group
          hidden
          sm:flex
          flex-col
          h-full
          items-center
          w-20 hover:w-[369px]
          gap-5
          bg-[#222222]
          p-[30px]
          transition-all
        "
      >
        {routes.map((item) => (
          <MenuItem key={item.label} {...item} />
        ))}

        <Profile />
      </div>
    </>
  );
};

export default Sidebar;
