import { Contact } from "./Contact";
import { EasyAccess } from "./EasyAccess";
import { TopSection } from "./TopSection";

export const Footer = () => {
  return (
    <div dir="rtl" className="w-full px-4 py-8 bg-zinc-700 text-gray-300 lg:flex lg:px-24 items-center justify-start flex-wrap gap-24">
      <TopSection />
      <EasyAccess />
      <Contact />
      <p dir="ltr" className="font-Dana text-sm border-t border-t-gray-500 pt-10 text-center lg:w-full">Copyright © 2024 Maxx Coffee. All rights reserved.</p>
    </div>
  );
};
