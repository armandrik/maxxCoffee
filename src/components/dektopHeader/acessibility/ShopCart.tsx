import { useContext, useEffect, useRef, useState } from "react";
import { ShopCartContent } from "./ShopCartContent";
import { ProductContext } from "../../../context/productContext";

export const ShopCart = () => {
  const [openShop, setOpenShop] = useState<boolean>(false);
  const isShopOpen = useRef<HTMLDivElement | null>(null);
  const { shopProduct } = useContext(ProductContext);

  const closeShop = (event: MouseEvent) => {
    if (!isShopOpen.current?.contains(event.target as Node)) {
      setOpenShop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeShop);
  }, []);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        onClick={() => setOpenShop(!openShop)}
        className="size-7 relative cursor-pointer text-orange-200"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
      <div
        onClick={() => setOpenShop(!openShop)}
        className="absolute top-7 left-[297px] flex items-center justify-center cursor-pointer pt-[3px] w-5 h-5 text-xs font-Dana text-zinc-700 bg-white border-2 border-orange-200 rounded-full xl:left-[305px]"
      >
        <span
          className={
            shopProduct.length
              ? "animate-ping absolute top-0 right-0 w-4 h-4 rounded-full bg-orange-200 opacity-75"
              : "hidden"
          }
        ></span>
        {shopProduct.length}
      </div>
      {openShop && <ShopCartContent isShopOpen={isShopOpen} />}
    </>
  );
};
