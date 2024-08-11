import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { BestSellingProductsHeader } from "./BestSellingProductsHeader";
import { SceletonLoad } from "../product/SceletonLoad";
import { Rating } from "../product/Rating";

export const BestSellingProducts = () => {
  const { loading, product, addItemToCart } = useContext(ProductContext);

  return (
    <div
      dir="rtl"
      className="px-4 pt-10 bg-gray-100 dark:bg-[#27272A] md:pt-0 lg:px-[100px] 2xl:px-[270px]"
    >
      <BestSellingProductsHeader />
      <div
        id="scrollContainer"
        className="flex snap-x snap-mandatory gap-x-[14px] overflow-x-auto no-scrollbar scroll-smooth"
      >
        {loading ? (
          <>
            <SceletonLoad />
            <SceletonLoad />
          </>
        ) : (
          product.slice(0, 3).map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col justify-around items-center bg-white shadow rounded-2xl p-2 h-72 dark:bg-zinc-700 md:h-auto"
              >
                <img
                  src={item.productImage}
                  alt="product"
                  className="w-32 h-32 my-2 md:w-40 md:h-40 md:mb-5 lg:w-[260px] lg:h-[260px]"
                />
                <p className="w-full font-DanaMedium text-zinc-700 dark:text-white md:text-lg">
                  {item.productName}
                </p>
                <p className="font-DanaDemiBold text-teal-600 self-start dark:text-emerald-500 md:my-3 md:text-lg">
                  {item.price}
                  <span className="font-Dana text-xs mr-1 md:text-sm">
                    تومان
                  </span>
                </p>
                <div className="flex items-center justify-between gap-4 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    onClick={() => addItemToCart(item.id)}
                    className="max-w-8 max-h-8 min-w-7 min-h-7 p-[5px] text-gray-400 bg-gray-100 rounded-full cursor-pointer hover:bg-teal-600 hover:text-white transition-all dark:hover:bg-emerald-500 dark:bg-[#27272A]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="max-w-5 max-h-5 min-w-4 min-h-4 text-gray-400 ml-auto cursor-pointer hover:text-teal-600 transition-all dark:hover:text-emerald-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                  <Rating star={item.rate} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
