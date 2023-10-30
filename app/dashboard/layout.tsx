import Sidebar from "@/components/Sidebar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return <Sidebar>{children}</Sidebar>;
};

export default MainLayout;
