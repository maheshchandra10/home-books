import MobileMenu from "@/components/MobileMenu";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Books - Dashboard",
  description: "Sua biblioteca virtual",
};

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <MobileMenu />
      {children}
    </div>
  );
};

export default MainLayout;
