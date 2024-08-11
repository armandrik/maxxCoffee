import { useContext } from "react";
import { SingleProduct } from "./SingleProduct";
import { ProductContext } from "../../context/productContext";
import { SceletonLoad } from "./SceletonLoad";

export const Product = () => {
  const { loading } = useContext(ProductContext);

  return (
    <div className="grid grid-cols-2 gap-3.5 mt-5 md:grid-cols-3 xl:grid-cols-4">
      {loading ? (
        <>
          <SceletonLoad />
          <SceletonLoad />
          <SceletonLoad />
        </>
      ) : (
        <SingleProduct />
      )}
    </div>
  );
};
