import { createContext, useEffect, useState, ReactNode } from "react";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Product } from "../types/productType";

type ProductProviderProps = {
  children: ReactNode;
};

type ProductContextType = {
  product: Product[];
  loading: boolean;
  shopProduct: Product[];
  addItemToCart: (id: number) => void;
  removeItemFromCart: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  calculateTotalPrice: (products: Product[]) => number;
};

// Provide a default value for the context
const defaultProductContext: ProductContextType = {
  product: [],
  shopProduct: [],
  loading: true,
  addItemToCart: (id: number) => {
    console.log(`Add item to cart with id ${id}`);
  },
  removeItemFromCart: (id: number) => {
    console.log(`Remove item to cart with id ${id}`);
  },
  calculateTotalPrice: () => {
    return 0;
  },
  increment: (id: number) => {
    console.log(`Increment item quantity with id ${id}`);
    return undefined;
  },
  decrement: (id: number) => {
    console.log(`Decrement item quantity with id ${id}`);
    return undefined;
  },
};

export const ProductContext = createContext<ProductContextType>(
  defaultProductContext
);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [product, setProduct] = useState<Product[]>([]);
  const [shopProduct, setShopProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const addItemToCart = (id: number) => {
    let isProductExisInCart = shopProduct.find((item) => item.id === id);
    let audio = new Audio("../audio/addToShopSound.wav");

    if (isProductExisInCart) {
      shopProduct.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count++ };
        } else {
          return item;
        }
      });
    } else {
      let productInCart = product.find((item) => item.id === id) as Product;
      setShopProduct((prev) => {
        return [...prev, { ...productInCart, count: 1 }];
      });

      toastMessage();
    }
    audio.play();
  };

  const removeItemFromCart = (id: number) => {
    setShopProduct((prev) => prev.filter((item) => item.id !== id));
  };

  const increment = (id: number) => {
    const productExists = shopProduct.some((product) => product.id === id);

    if (!productExists) {
      console.error(`Product with id ${id} not found`);
      return;
    }

    setShopProduct((prevShopProduct: Product[]) =>
      prevShopProduct.map((product: Product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const decrement = (id: number): void => {
    const productExists = shopProduct.some((product) => product.id === id);

    if (!productExists) {
      console.error(`Product with id ${id} not found`);
      return;
    }

    setShopProduct((prevShopProduct: Product[]) =>
      prevShopProduct.map((product: Product) =>
        product.id === id
          ? { ...product, count: product.count > 1 ? product.count - 1 : 1 }
          : product
      )
    );
  };

  const toastMessage = () => {
    toast.success("محصول به سبد خرید اضافه شد", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  const calculateTotalPrice = (products: Product[]): number => {
    return products.reduce(
      (total, product) => total + product.price * product.count,
      0
    );
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.iransweb.com/products/coffee"
        );
        const json = await response.json();
        setProduct(json);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(true);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        product,
        loading,
        shopProduct,
        addItemToCart,
        calculateTotalPrice,
        removeItemFromCart,
        increment,
        decrement,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
