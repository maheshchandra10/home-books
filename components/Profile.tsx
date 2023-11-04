import { signOut } from "next-auth/react";

import { LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { twMerge } from "tailwind-merge";
import { Avatar, AvatarImage } from "./ui/avatar";

interface ProfileProps {
  className?: string;
}

export const Profile: React.FC<ProfileProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        `
          bottom-3 
          absolute
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
          py-5
        `,
        className
      )}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="<NAME>"
            />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 ml-6 bg-[#333333] text-white border-none">
          <DropdownMenuLabel>Perfil</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer hover:bg-transparent"
            onClick={() => signOut()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sair do App
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
