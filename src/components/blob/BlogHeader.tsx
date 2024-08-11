export const BlogHeader = () => {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h1 className="font-morabbaMedium text-zinc-700 text-2xl mb-1 dark:text-white">
        مطالب خواندنی
      </h1>
      <button className="flex items-center justify-center font-Dana text-orange-300 text-base bg-none border-none outline-none rounded-md p-1 hover:bg-orange-50 transition-all dark:hover:bg-[#fed7aa33]">
        مشاهده همه
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
  );
};
