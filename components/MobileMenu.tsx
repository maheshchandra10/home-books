"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import Icons from "./Icons";
import MenuItem from "./MenuItem";

const MobileMenu = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: <Icons label="dashboard" />,
        active: pathname === "/dashboard",
        href: "/dashboard",
      },
      {
        icon: <Icons label="category" />,
        active: pathname === "/categories",
        href: "/categories",
      },
      {
        icon: <Icons label="groups" />,
        active: pathname === "/authors",
        href: "/authors",
      },
      {
        icon: <Icons label="book_4" />,
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
          absolute 
          flex
          sm:hidden
          inset-x-0 
          bottom-0 
          w-full
          h-[80px]
          items-center
          gap-5
          bg-[#222222]
          p-[30px]
        "
      >
        {routes.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default MobileMenu;
