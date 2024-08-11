import { useContext, useEffect, useRef, useState } from "react";
import { IconSvg } from "./IconSvg";
import { MobileMenu } from "./sidebar/MobileMenu";
import { MobileShopCart } from "./shopCart/MobileShopCart";
import { ProductContext } from "../../context/productContext";

export const Header = () => {
  const [menuOpen, setisMenuOpen] = useState<boolean>(false);
  const [shopCartOpen, setisShopCartOpen] = useState<boolean>(false);
  const isMenuOpen = useRef<HTMLDivElement | null>(null);
  const isShopOpen = useRef<HTMLDivElement | null>(null);
  const { shopProduct } = useContext(ProductContext);

  const closeMenu = (event: MouseEvent) => {
    if (!isMenuOpen.current?.contains(event.target as Node)) {
      setisMenuOpen(false);
    }
  };

  const closeShop = (event: MouseEvent) => {
    if (!isShopOpen.current?.contains(event.target as Node)) {
      setisShopCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    document.addEventListener("mousedown", closeShop);
  }, []);

  return (
    <div className="container relative z-50 h-16 min-w-full w-full py-3 px-4 bg-white flex items-center justify-between dark:bg-zinc-700 lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 relative cursor-pointer dark:text-white"
        onClick={() => setisShopCartOpen(!shopCartOpen)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
      <div className="absolute top-3 left-8 flex items-center justify-center pt-[3px] w-4 h-4 text-xs font-Dana text-white bg-orange-300 border-2 border-orange-200 rounded-full dark:text-zinc-700 dark:bg-white">
        <span
          className={
            shopProduct.length
              ? "animate-ping absolute top-0 right-0 w-3 h-3 rounded-full bg-orange-200 opacity-75"
              : "hidden"
          }
        ></span>
        {shopProduct.length}
      </div>
      <IconSvg />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 cursor-pointer dark:text-white"
        onClick={() => setisMenuOpen(!menuOpen)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {menuOpen && (
        <MobileMenu isOpen={setisMenuOpen} isMenuOpen={isMenuOpen} />
      )}
      {shopCartOpen && (
        <MobileShopCart isOpen={setisShopCartOpen} isShopOpen={isShopOpen} />
      )}
    </div>
  );
};
