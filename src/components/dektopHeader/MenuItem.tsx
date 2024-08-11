export const MenuItem = () => {
  return (
    <ul className="flex items-center justify-between gap-9 tracking-tighter h-14">
      <li className="flex items-center font-DanaMedium text-orange-200 hover:text-orange-300 hover:cursor-pointer transition-colors h-full">
        صفحه اصلی
      </li>
      <li className="flex items-center relative text-gray-300 hover:text-orange-300 hover:cursor-pointer transition-all group h-full">
        فروشگاه
        <ul className="w-52 h-72 flex flex-col items-start justify-start gap-4 absolute top-full right-0 opacity-0 invisible px-6 py-5 tracking-normal shadow bg-white rounded-2xl border-t-[3px] border-orange-300 group-hover:opacity-100 group-hover:visible transition-all dark:bg-zinc-700">
          <li className="menu-item">قهوه ویژه</li>
          <li className="menu-item">ویژه در سطح جهانی</li>
          <li className="menu-item">قهوه درجه یک</li>
          <li className="menu-item">ترکیبات تجاری</li>
          <li className="menu-item">کپسول قهوه</li>
          <li className="menu-item">قهوه زینو برزیلی</li>
        </ul>
      </li>
      <li className="flex items-center text-gray-300 hover:text-orange-300 hover:cursor-pointer transition-colors h-full">
        دیکشنری
      </li>
      <li className="flex items-center text-gray-300 hover:text-orange-300 hover:cursor-pointer transition-colors h-full">
        بلاگ
      </li>
      <li className="flex items-center text-gray-300 hover:text-orange-300 hover:cursor-pointer transition-colors h-full">
        درباره ما
      </li>
      <li className="flex items-center text-gray-300 hover:text-orange-300 hover:cursor-pointer transition-colors h-full">
        تماس با ما
      </li>
    </ul>
  );
};
