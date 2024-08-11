export const PlaceOrder = () => {
  return (
    <div dir="rtl" className="px-4 pt-7 bg-gray-100 dark:bg-[#27272A] md:py-28 md:flex md:items-center md:justify-around md:gap-5 lg:px-[100px] 2xl:px-[270px]">
      <img
        src="../images/coffee3 1.png"
        alt="coffe bin"
        className="mx-auto mb-8 md:m-0"
      />
      <div className="container">
        <h1 className="text-zinc-700 text-2xl font-morabbaMedium dark:text-white md:text-3xl">
          یکی از بهترین قهوه ها !
        </h1>
        <p className="text-zinc-700 text-lg font-morabba dark:text-white md:text-xl">
          کیفیت قهوه را از ما بخواهید ...
        </p>
        <h1 className="text-zinc-700 text-4xl dark:text-gray-400">...</h1>
        <p className="text-zinc-700 text-lg mt-2 mb-4 dark:text-white">
          فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا
          کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان
          کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!
        </p>
        <button className="w-[180px] h-[50px] flex items-center justify-center gap-2 border border-orange-300 rounded-full text-orange-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
            />
          </svg>
          ثبت سفارش تلفنی
        </button>
      </div>
    </div>
  );
};
