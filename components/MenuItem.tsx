import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  label?: string;
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
    <>
      <Link
        href={href}
        className={twMerge(
          `
        flex  
        items-center
        left-5
        h-[69px]
        w-full 
        gap-[10px] 
        text-2xl
        font-medium
        cursor-pointer
        text-white
        hover:text-primary
        transition
        py-5`,
          active && "text-[#3ba1ff]"
        )}
      >
        {icon}
        <p className="hidden group-hover:flex">{label}</p>
      </Link>
    </>
  );
};

export default SidebarItem;
