import React from "react";
import styled from "./navbar.module.scss";

function Navbar() {
  return (
    <div className={styled.navbar}>
      <div className={styled.navbar__container}>
        <div className={styled.navbar__container__left}>
          <div className={styled.navbar__container__left__logo}></div>
          <div className={styled.navbar__container__left__links}>
            <a href="#1">Home</a>
            <a href="#2">Shop</a>
            <a href="#3">Blog</a>
            <a href="#4">Pages</a>
            <a href="#5">Contact</a>
          </div>
        </div>
        <div className={styled.navbar__container__right}>
          <div className={styled.navbar__conatiner__right__icons}></div>
          <div className={styled.navbar__conatiner__right__button}></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
