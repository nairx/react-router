import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const [seachParams] = useSearchParams();
  const showProduct = () => {
    console.log(tempid)
    const id = seachParams.get("id");
    const price = seachParams.get("price");
    setProduct(
      products.find(
        (product) => product.id === Number(id) && product.price > price,
      ),
    );
  };
  const products = [
    { id: 1, name: "Product 1", price: 199 },
    { id: 2, name: "Product 2", price: 100 },
    { id: 3, name: "Product 3", price: 200 },
  ];
  useEffect(() => {
    showProduct();
  }, []);
  return (
    <div>
      Product Details
      {product?.name && (
        <div>
          <h1>{product.name}</h1>
          <h3>{product.price}</h3>
        </div>
      )}
    </div>
  );
}
