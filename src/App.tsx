import { Advantages } from "./components/advantages/Advantages";
import { BestSellingProducts } from "./components/bestSellingProducts/BestSellingProducts";
import { BlogWrapper } from "./components/blob/BlogWrapper";
import { Category } from "./components/category/Category";
import { CoffeeClub } from "./components/club/CoffeeClub";
import { DektopHeader } from "./components/dektopHeader/DektopHeader";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/mobileHeader/Header";
import { Home } from "./components/home/Home";
import { PlaceOrder } from "./components/placeOrder/PlaceOrder";
import { ProductWrapper } from "./components/product/ProductWrapper";
import { ProductContent } from "./components/productContent/ProductContent";
import { RegisterProvider } from "./context/registerContext";

function App() {
  return (
    <>
      <RegisterProvider>
        <DektopHeader />
        <Header />
        <Home />
      </RegisterProvider>
      <ProductWrapper />
      <ProductContent />
      <Category />
      <BestSellingProducts />
      <CoffeeClub />
      <BlogWrapper />
      <PlaceOrder />
      <Advantages />
      <Footer />
    </>
  );
}

export default App;
