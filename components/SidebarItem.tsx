import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  label: string;
  href: string;
  active?: boolean;
  icon: React.ReactNode;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  active,
  icon,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
        flex  
        items-center
        justify-center group-hover:justify-normal
        h-[69px]
        w-full 
        gap-[10px] 
        text-2xl
        font-medium
        cursor-pointer
        text-white
        hover:text-[#3ba1ff]
        transition
        py-5`,
        active && "text-[#3ba1ff]"
      )}
    >
      {icon}
      <p className="hidden group-hover:flex">{label}</p>
    </Link>
  );
};

export default SidebarItem;
