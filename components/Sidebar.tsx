interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return <div className="flex gap-9">Sidebar {children}</div>;
};

export default Sidebar;
