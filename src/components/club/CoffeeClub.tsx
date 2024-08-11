import { Prize } from "./Prize";

export const CoffeeClub = () => {
  return (
    <div dir="rtl" className="px-4 pt-8 bg-gray-100 dark:bg-[#27272A] md:py-20 lg:px-[100px] 2xl:px-[270px]">
      <div className="w-full px-3 py-8 bg-gradient-to-l from-club-200 to-club-100 rounded-2xl md:flex md:items-center md:justify-around md:h-36 xs:h-64">
        <div className="flex items-center justify-start gap-3 mb-8 md:mb-0 md:justify-center">
          <img src="../images/Group 95.png" alt="diamond" />
          <div className="text-white">
            <h1 className="font-morabbaBold text-2xl">کافی کلاب</h1>
            <p className="font-morabba text-lg">
              میدونستی میتونی با امتیاز هات قهوه بگیری ؟
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-7 md:w-1/2 xs:flex-row">
          <div className="flex items-center justify-center gap-2">
            <Prize />
            <Prize />
            <Prize />
          </div>
          <div className="text-white">
            <h3 className="font-DanaDemiBold text-2xl pr-1">542</h3>
            <p className="text-xs font-Dana pr-1 mb-1">امتیـــــــاز شما</p>
            <button className="flex items-center justify-end w-[90px] h-7 py-4 text-xs bg-gradient-to-l from-prizeBtn-100 to-prizeBtn-200 rounded-2xl">
              دریافت جایزه
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
        </div>
      </div>
    </div>
  );
};
