import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entre na plataforma",
  description: "Sua biblioteca virtual",
};

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return <Sidebar>{children}</Sidebar>;
};

export default MainLayout;
