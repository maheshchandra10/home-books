interface IconsProps {
  label: string;
}

const Icons: React.FC<IconsProps> = ({ label }) => {
  return <i className="material-symbols-outlined">{label}</i>;
};

export default Icons;
