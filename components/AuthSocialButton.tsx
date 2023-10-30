import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface AuthSocialButtonProps {
  icon: IconType;
  text: string;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  text,
  icon: Icon,
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
        px-6 
        py-3
        bg-white
        text-black
        text-xl
        font-semibold
        shadow-sm
        hover:bg-slate-100
        transition`
      )}
    >
      <Icon size={24} />
      {text}
    </button>
  );
};

export default AuthSocialButton;
