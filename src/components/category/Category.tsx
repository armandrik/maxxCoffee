export const Category = () => {
  return (
    <div
      dir="rtl"
      className="w-full pt-10 px-4 flex items-start justify-center flex-wrap gap-7 bg-gray-100 dark:bg-[#27272A] md:py-20 lg:justify-between lg:px-[100px] xl:gap-16 2xl:px-[270px]"
    >
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <img
          src="../../images/i1 1.png"
          className="w-[100px] h-[100px] lg:w-36 lg:h-36 xl:w-50 xl:h-50"
        />
        <h3 className="text-zinc-700 dark:text-white lg:text-lg xl:text-xl">
          قهوه دمی و اسپرسو
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <img
          src="../../images/i2 1.png"
          className="w-[100px] h-[100px] lg:w-36 lg:h-36 xl:w-50 xl:h-50"
        />
        <h3 className="text-zinc-700 dark:text-white lg:text-lg xl:text-xl">
          لوازم جانبی و تجهیزات
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <img
          src="../../images/i3 1.png"
          className="w-[100px] h-[100px] lg:w-36 lg:h-36 xl:w-50 xl:h-50"
        />
        <h3 className="text-zinc-700 dark:text-white lg:text-lg xl:text-xl">
          اسپرسو ساز
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <img
          src="../../images/i4 1.png"
          className="w-[100px] h-[100px] lg:w-36 lg:h-36 xl:w-50 xl:h-50"
        />
        <h3 className="text-zinc-700 dark:text-white lg:text-lg xl:text-xl">
          پک تستر قهوه
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <img
          src="../../images/i5 1.png"
          className="w-[100px] h-[100px] lg:w-36 lg:h-36 xl:w-50 xl:h-50"
        />
        <h3 className="text-zinc-700 dark:text-white lg:text-lg xl:text-xl">
          قهوه ترک
        </h3>
      </div>
    </div>
  );
};
