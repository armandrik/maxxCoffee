import { Acessibility } from "./acessibility/Acessibility"
import { MenuItem } from "./MenuItem"

export const DektopHeader = () => {

  const navigateToTop = () => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div dir="rtl" className="hidden container z-50 items-center w-[90%] h-24 fixed mt-9 mx-auto inset-x-0 cursor-pointer rounded-3xl bg-desktopMenu backdrop-blur-[6px] lg:flex lg:gap-1 lg:px-8 xl:px-10 xl:gap-9">
      <img onClick={navigateToTop} src="../images/logo2 3.png" className="w-14 h-14"/>
      <MenuItem/>
      <Acessibility/>
    </div>
  )
}
