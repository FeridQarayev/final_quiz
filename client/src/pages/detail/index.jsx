import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../service/getAllProduct";
import styled from "./detail.module.scss";

function Detail() {
  const [product, setProduct] = useState({});
  useEffect(() => {
    getAllProduct().then((res) => setProduct(res.data));
  });
  console.log(product);
  return (
    <div className={styled.detail}>
      <img
        src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png"
        alt="add"
      />
      <div className={styled.detail__container}>
        <p>Name: </p>
        <p>Description: </p>
        <p>Price: $</p>
      </div>
    </div>
  );
}

export default Detail;
