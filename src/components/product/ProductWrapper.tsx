import { Product } from "./Product"
import { ProductHeader } from "./ProductHeader"

export const ProductWrapper = () => {
  return (
    <div id="productSection" dir="rtl" className="px-4 pt-8 bg-gray-100 dark:bg-[#27272A] md:pt-20 lg:px-[100px] xl:pt-48 xl:bg-paint bg-no-repeat bg-contain 2xl:px-[270px]">
        <ProductHeader/>
        <Product/>
    </div>
  )
}
