import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface AuthSocialButtonProps {
  icon: IconType;
  text: string;
  loading?: boolean;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  text,
  icon: Icon,
  loading,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        `
        inline-flex
        justify-center 
        items-center
        gap-2
        rounded-md
        w-full md:w-fit
        px-[40px] 
        py-[20px]
        bg-white
        text-black
        text-2xl
        font-semibold
        shadow-sm
        hover:bg-slate-100
        transition`
      )}
    >
      {!loading && <Icon size={36} />}
      {!loading ? text : "Carregando"}
    </button>
  );
};

export default AuthSocialButton;
