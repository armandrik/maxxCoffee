import { useContext } from "react";
import { ProductContext } from "../../../context/productContext";

export const ShopCartProduct = () => {
  const { shopProduct, increment, decrement, removeItemFromCart } =
    useContext(ProductContext);

  return (
    <>
      {shopProduct.map((item) => {
        return (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 my-6 border-b-[1px] pb-6 border-gray-200"
          >
            <img
              src={item.productImage}
              className="w-32 h-32"
              alt="bin coffee"
            />
            <div className="flex flex-col items-start justify-between">
              <h3 className="font-DanaMedium text-base text-zinc-700 mb-6 dark:text-white">
                {item.productName}
              </h3>
              <div className="flex items-center justify-between w-56 gap-6">
                <div>
                  <span className="text-xs text-teal-600 dark:text-emerald-500">
                    0 تومان تخفیف
                  </span>
                  <h1 className="text-zinc-700 font-DanaDemiBold text-xl dark:text-white">
                    {item.price} <span className="text-sm">تومان</span>
                  </h1>
                </div>
                <div className="w-[90px] h-11 flex items-center justify-center gap-1 ring-1 p-4 rounded-full ring-gray-300 ">
                  <button onClick={() => increment(item.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
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
                    className="w-6 outline-none bg-transparent text-orange-300 text-center text-l"
                  />
                  <button>
                    {item.count === 1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        onClick={() => removeItemFromCart(item.id)}
                        className="size-4 text-orange-300"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        onClick={() => decrement(item.id)}
                        className="size-4 text-orange-300"
                      >
                        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
