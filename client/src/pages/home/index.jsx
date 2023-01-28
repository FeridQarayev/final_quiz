import React from "react";
import styled from "./home.module.scss";

function Home() {
  return <div className={styled.home}>
    <div className={styled.home__container}>
      <div className={styled.home__container__up}>
        <div className={styled.home__container__up__left}></div>
        <div className={styled.home__container__up__img}>
          <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png" alt="basket" />
        </div>
        <div className={styled.home__container__up__right}>
          <div className={styled.home__container__up__right__text}>
            <div className={styled.home__container__up__right__text__title}>
              <p className={styled.home__container__up__right__text__title__shop}>Shop is fun</p>
              <h1 className={styled.home__container__up__right__text__title__browse}>BROWSE OUR PREMIUM PRODUCT</h1>
            </div>
            <div className={styled.home__container__up__right__text__down}>
              <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
              <button>Browse Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Home;
