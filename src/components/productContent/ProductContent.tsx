export const ProductContent = () => {
  return (
    <div
      dir="rtl"
      className="flex flex-col gap-5 justify-start items-center px-4 pt-8 text-white bg-gray-100 dark:bg-[#27272A] md:flex-row md:pt-20 lg:px-[100px] 2xl:px-[270px]"
    >
      <div className="relative bg-productContent1 bg-no-repeat bg-cover w-full rounded-2xl h-44 p-4 flex flex-col justify-center items-start gap-4 lg:h-64 lg:px-12">
        <div className="w-full h-44 absolute right-0 top-0 rounded-2xl bg-gradient-to-l from-gradiantShadow-200 to-gradiantShadow-100 lg:h-64"></div>
        <h1 className="font-DanaDemiBold text-3xl z-10 lg:text-4xl">انواع قهوه</h1>
        <h3 className="font-Dana text-lg z-10 lg:text-xl">ترکیبی و تک خاستگاه</h3>
      </div>
      <div className="relative bg-productContent2 bg-no-repeat bg-cover w-full rounded-2xl h-44 p-4 flex flex-col justify-center items-start gap-4 lg:h-64 lg:px-12">
        <div className="w-full h-44 absolute right-0 top-0 rounded-2xl bg-gradient-to-l from-gradiantShadow-200 to-gradiantShadow-100 lg:h-64"></div>
        <h1 className="font-DanaDemiBold text-3xl z-10 lg:text-4xl">پودر های فوری</h1>
        <h3 className="font-Dana text-lg z-10 lg:text-xl">نسکافه ، هات چاکلت ، ماسالا</h3>
      </div>
    </div>
  );
};
