import { useContext } from "react";
import { ProductContext } from "../../../context/productContext";

export const SingleShopCartItem = () => {
  const { shopProduct, removeItemFromCart, increment, decrement } = useContext(ProductContext);

  return (
    <>
      {shopProduct.map((item) => {
        return (
          <div key={item.id}>
            <div className="my-5 flex items-center justify-start dark:gap-4">
              <img
                src={item.productImage}
                alt="product"
                className="w-[90px] h-[90px]"
              />
              <div>
                <h3 className="text-sm text-zinc-700 dark:text-white">
                  {item.productName}
                </h3>
                <p className="text-xs text-teal-600 my-1 dark:text-emerald-500">
                  0 تومان تخفیف
                </p>
                <p className="flex items-center justify-start gap-1 text-zinc-700 font-DanaDemiBold text-base dark:text-white">
                  {item.price}
                  <span className="text-xs font-Dana">تومان</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 border-b border-gray-100 dark:border-gray-50/10 pb-5 pr-[2px]">
              <div className="flex items-center justify-center gap-2 p-2 ring-1 ring-gray-300 rounded-full">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    onClick={() => increment(item.id)}
                    className="size-4 text-orange-300"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                  </svg>
                </button>
                <input
                  type="number"
                  name="quantity"
                  value={item.count}
                  readOnly
                  className="w-9 h-5 outline-none pt-[4px] bg-transparent text-s text-orange-300 text-center"
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    onClick={() => decrement(item.id)}
                    className="size-4 text-orange-300"
                  >
                    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                  </svg>
                </button>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                onClick={() => removeItemFromCart(item.id)}
                className="size-4 cursor-pointer text-orange-300"
              >
                <path
                  fillRule="evenodd"
                  d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </>
  );
};
