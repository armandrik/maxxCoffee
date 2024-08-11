export const Advantages = () => {
  return (
    <div
      dir="rtl"
      className="px-4 pt-16 pb-12 grid grid-cols-2 bg-gray-100 dark:bg-[#27272A] md:grid-cols-4 md:pb-36 lg:px-[100px] 2xl:px-[270px]"
    >
      <div className="flex flex-col items-center justify-center border-l border-b dark:border-zinc-600 p-5 md:border-none flex-wrap">
        <img src="../images/support.png" className="mb-5" />
        <div className="flex flex-col items-center justify-center 2xl:justify-start 2xl:gap-[14px]">
          <h3 className="text-zinc-700 font-DanaMedium text-sm mb-1 dark:text-white lg:text-lg">
            پشتیبانی شبانه روزی
          </h3>
          <p className="text-zinc-700 text-xs dark:text-white lg:text-sm">
            7 روز هفته ، 24 ساعته
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-5 flex-wrap">
        <img src="../images/express-delivery.png" className="mb-5" />
        <div className="flex flex-col items-center justify-center 2xl:justify-start 2xl:gap-[14px]">
          <h3 className="text-zinc-700 font-DanaMedium text-sm mb-1 dark:text-white lg:text-lg">
            امکان تحویل اکسپرس
          </h3>
          <p className="text-zinc-700 text-xs dark:text-white lg:text-sm">
            ارسال بسته با سرعت باد
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-5 -mt-[1px] flex-wrap">
        <img src="../images/mochapot.png" className="mb-5" />
        <div className="flex flex-col items-center justify-center 2xl:justify-start 2xl:gap-[14px]">
          <h3 className="text-zinc-700 font-DanaMedium text-sm mb-1 dark:text-white lg:text-lg">
            اکسسوری قهوه
          </h3>
          <p className="text-zinc-700 text-xs dark:text-white lg:text-sm">
            وسایل و ادوات دم آوری
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-t border-r p-5 -mt-[1px] -mr-[1px] dark:border-zinc-600 md:border-none flex-wrap">
        <img src="../images/Group.png" className="mb-5" />
        <div className="flex flex-col items-center justify-center 2xl:justify-start 2xl:gap-[14px]">
          <h3 className="text-zinc-700 font-DanaMedium text-sm mb-1 dark:text-white lg:text-lg">
            رست تخصصی
          </h3>
          <p className="text-zinc-700 text-xs dark:text-white lg:text-sm">
            تازه برشته شده و با کیفیت
          </p>
        </div>
      </div>
    </div>
  );
};
