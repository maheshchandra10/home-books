interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return <div>Sidebar {children}</div>;
};

export default Sidebar;
