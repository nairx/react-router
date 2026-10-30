import React from "react";
import { useParams } from "react-router-dom";
export default function ProductDetails() {
  const { id } = useParams();
  const products = [
    { id: 1, name: "Product 1", price: 199 },
    { id: 2, name: "Product 2", price: 100 },
    { id: 3, name: "Product 3", price: 200 },
  ];
  return <div>Product Details of {id}</div>;
}
