import { useContext } from "react";
import { SingleShopCartItem } from "./SingleShopCartItem";
import { ProductContext } from "../../../context/productContext";

export const ShopCartItem = () => {
  const { calculateTotalPrice, shopProduct } = useContext(ProductContext);

  return (
    <div className="container flex flex-col">
      <div className="h-[660px] snap-y snap-mandatory overflow-y-auto no-scrollbar scroll-smooth pb-36">
        <SingleShopCartItem />
      </div>
      <div className="container absolute bottom-0 left-0 w-64 h-20 flex items-center justify-center gap-4 mt-4 bg-white dark:bg-zinc-700">
        <button className=" w-28 h-11 bg-teal-600 text-white text-base rounded-xl hover:bg-teal-700 transition-all dark:bg-emerald-500 dark:hover:bg-emerald-600">
          ثبت سفارش
        </button>
        <div>
          <span className="text-xs font-DanaMedium text-gray-300">
            مبلغ قابل پرداخت
          </span>
          <p className="text-zinc-700 font-DanaDemiBold dark:text-white">
            {calculateTotalPrice(shopProduct)}
            <span className="font-Dana text-xs mr-[2px]">تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
};
