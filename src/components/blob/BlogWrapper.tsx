import { Blog } from "./Blog";
import { BlogHeader } from "./BlogHeader";

export const BlogWrapper = () => {
  return (
    <div dir="rtl" className="px-4 pt-8 bg-gray-100 dark:bg-[#27272A] md:pt-0 lg:px-[100px] 2xl:px-[270px]">
      <BlogHeader />
      <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};
