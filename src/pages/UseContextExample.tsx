import React, { useState, useContext } from "react";
import CartContext from "./CartContextExample";

const UseContextExample: React.FC = () => {
  const { products } = useContext(CartContext);

  return <form action="">{products?.map(product => product.id)}</form>;
};

export default UseContextExample;
