"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import Icons from "./Icons";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
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
          group
          flex
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
          <SidebarItem key={item.label} {...item} />
        ))}
      </div>
      <main>{children}</main>
    </>
  );
};

export default Sidebar;
