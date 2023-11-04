"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import Icons from "./Icons";
import MenuItem from "./MenuItem";
import { Profile } from "./Profile";

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
          fixed
          flex
          sm:hidden
          bottom-0 
          w-full
          h-[80px]
          items-center
          gap-5
          bg-[#222222]
          p-[30px]
          z-10
        "
      >
        {routes.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
        <Profile className="static" />
      </div>
    </>
  );
};

export default MobileMenu;
