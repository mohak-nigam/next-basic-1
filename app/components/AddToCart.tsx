"use client";
import React from "react";

const AddToCart = () => {
  const handleOnClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <button onClick={handleOnClick}>Add</button>
    </div>
  );
};

export default AddToCart;
