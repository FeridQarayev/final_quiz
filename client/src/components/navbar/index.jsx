import React from "react";
import styled from "./navbar.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styled.navbar}>
      <div className={styled.navbar__container}>
        <div className={styled.navbar__container__left}>
          <div className={styled.navbar__container__left__logo}>
            <img
              src="https://preview.colorlib.com/theme/aroma/img/logo.png"
              alt="Logo"
            />
          </div>
          <div className={styled.navbar__container__left__links}>
            <Link to={""}>Home</Link>
            <Link to={"add"}>Create</Link>
            <a href="#3">Blog</a>
            <a href="#4">Pages</a>
            <a href="#5">Contact</a>
          </div>
        </div>
        <div className={styled.navbar__container__right}>
          <div className={styled.navbar__container__right__icons}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </div>
          <div className={styled.navbar__container__right__button}>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
