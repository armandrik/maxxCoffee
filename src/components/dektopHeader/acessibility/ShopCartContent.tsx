import { useContext, useEffect, useState } from "react";
import { EmptyShopCart } from "../../mobileHeader/shopCart/EmptyShopCart";
import { ShopCartProduct } from "./ShopCartProduct";
import { ProductContext } from "../../../context/productContext";

type ShopCartContentProp = {
  isShopOpen: React.MutableRefObject<HTMLDivElement | null>;
};

export const ShopCartContent = ({ isShopOpen }: ShopCartContentProp) => {
  const { shopProduct, calculateTotalPrice } = useContext(ProductContext);
  const [isShopCartEmpty, setIsShopCartEmpty] = useState<boolean>(true);

  useEffect(() => {
    setIsShopCartEmpty(shopProduct.length === 0);
  }, [shopProduct]);

  return (
    <div
      ref={isShopOpen}
      dir="rtl"
      className="absolute top-20 left-64 w-[410px] snap-y snap-mandatory overflow-y-auto no-scrollbar scroll-smooth p-5 bg-white rounded-2xl border-t-[3px] border-orange-300 shadow transition-all dark:bg-zinc-700"
    >
      {isShopCartEmpty ? (
        <EmptyShopCart />
      ) : (
        <>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-300">
              {shopProduct.length} مورد
            </span>
            <button className="flex items-center justify-center text-xs font-DanaMedium text-orange-300">
              مشاهده سبد خرید
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="container h-96 pl-[2px] snap-y snap-mandatory overflow-y-auto no-scrollbar scroll-smooth">
            <ShopCartProduct />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="font-DanaMedium text-xs text-gray-300">
                مبلغ قابل پرداخت
              </span>
              <h1 className="text-zinc-700 font-DanaDemiBold text-xl dark:text-white">
                {calculateTotalPrice(shopProduct)}{" "}
                <span className="text-sm">تومان</span>
              </h1>
            </div>
            <button className="w-36 h-14 bg-teal-600 rounded-xl text-white text-xl font-Dana hover:bg-teal-700 transition-all dark:bg-emerald-600 dark:hover:bg-emerald-700">
              ثبت سفارش
            </button>
          </div>
        </>
      )}
    </div>
  );
};
