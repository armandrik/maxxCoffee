import { useContext, useEffect, useState } from "react";
import { ShopCartItem } from "./ShopCartItem";
import { EmptyShopCart } from "./EmptyShopCart";
import { ProductContext } from "../../../context/productContext";

type MobileShopCartProp = {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isShopOpen: React.RefObject<HTMLDivElement>;
};

export const MobileShopCart = ({ isOpen, isShopOpen }: MobileShopCartProp) => {
  const [isShopCartEmpty, setIsShopCartEmpty] = useState<boolean>(true);
  const { shopProduct } = useContext(ProductContext);

  useEffect(() => {
    setIsShopCartEmpty(shopProduct.length === 0);
  }, [shopProduct]);

  return (
    <div
      ref={isShopOpen}
      dir="rtl"
      className="w-64 h-dvh fixed top-0 left-0 bg-white px-4 pb-4 shadow-menuShadow dark:bg-zinc-700 transition-all"
    >
      <div className="flex items-center justify-between font-DanaDemiBold text-zinc-700 pt-5 border-b-[1px] pb-5 border-gray-200 dark:border-zinc-600">
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
        <h1 className="text-zinc-700 font-DanaMedium dark:text-white">
          سبد خرید
        </h1>
      </div>
      {isShopCartEmpty ? <EmptyShopCart /> : <ShopCartItem />}
    </div>
  );
};
