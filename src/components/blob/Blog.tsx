export const Blog = () => {
  return (
    <div className="flex items-center justify-around w-full h-[150px] rounded-2xl shadow p-[10px] gap-[10px] bg-white dark:bg-zinc-700">
      <img src="../images/Mask group.png" alt="blog pic"/>
      <div className="flex flex-col justify-between">
        <p className="font-DanaMedium text-sm text-zinc-700 dark:text-white md:text-base">
          طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی
        </p>
        <div className="w-full h-[1px] bg-gray-100 my-6 dark:bg-zinc-600 md:my-3"></div>
        <div className="flex items-center justify-between">
          <p className="text-teal-600 font-Dana text-xs dark:text-emerald-500 md:text-sm">21 مرداد 1402</p>
          <button className="flex items-center justify-center w-20 h-6 gap-1 rounded-md bg-orange-50 text-orange-300 text-xs dark:bg-[#fed7aa33] md:text-sm">
            مطالعه
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
