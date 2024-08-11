import { Aceeseeblity } from "./Aceeseeblity";
import { MenuItem } from "./MenuItem";
import { MobileSvgIcon } from "./MobileSvgIcon";

type MobileMenuProps = {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: React.RefObject<HTMLDivElement>;
};

export const MobileMenu = ({ isOpen, isMenuOpen }: MobileMenuProps) => {
  return (
    <div
      ref={isMenuOpen}
      dir="rtl"
      className="container fixed right-0 top-0 overflow-y-auto flex flex-col items-center justify-start w-64 h-dvh bg-white px-4 shadow-menuShadow dark:bg-zinc-700"
    >
      <div className="container flex items-center justify-between pt-3 pb-5 border-b border-gray-100 dark:border-zinc-600">
        <MobileSvgIcon />
        <button onClick={() => isOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <MenuItem />
      <Aceeseeblity />
    </div>
  );
};
