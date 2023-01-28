import React from "react";
import styled from "./home.module.scss";
import { getAllProduct } from "../../service/getAllProduct";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(false);
  const [inpVal, setInpVal] = useState("");

  const Sorting = () => {
    setProducts(
      [...products].sort((a, b) =>
        sort ? (a.price > b.price ? 1 : -1) : a.price < b.price ? 1 : -1
      )
    );

    setSort(!sort);
  };
  useEffect(() => {
    getAllProduct().then((res) => setProducts(res.data));
  }, []);

  return (
    <div className={styled.home}>
      <div className={styled.home__up}>
        <div className={styled.home__up__left}></div>
        <div className={styled.home__up__img}>
          <img
            src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png"
            alt="basket"
          />
        </div>
        <div className={styled.home__up__right}>
          <div className={styled.home__up__right__text}>
            <div className={styled.home__up__right__text__title}>
              <p className={styled.home__up__right__text__title__shop}>
                Shop is fun
              </p>
              <h1 className={styled.home__up__right__text__title__browse}>
                BROWSE OUR PREMIUM PRODUCT
              </h1>
            </div>
            <div className={styled.home__up__right__text__down}>
              <p>
                Us which over of signs divide dominion deep fill bring they're
                meat beho upon own earth without morning over third. Their male
                dry. They are great appear whose land fly grass.
              </p>
              <button>Browse Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styled.home__container}>
        <div className={styled.home__container__products}>
          <div className={styled.home__container__products__title}>
            <p>Popular Item in the market</p>
            <h2>
              Trending <span>Product</span>
            </h2>
            <div
              onClick={() => Sorting()}
              className={styled.home__container__products__title__filter}
            >
              Filter By Price
            </div>
            <input
              className={styled.home__container__products__title__search}
              type="text"
              placeholder="Search by Name"
              onChange={(e) => setInpVal(e.target.value)}
            />
          </div>
          <div className={styled.home__container__products__down}>
            {products
              .filter((fill) => {
                if (inpVal === "") return fill;
                else if (fill.name.toLowerCase().includes(inpVal.toLowerCase()))
                  return fill;
              })

              .map((product) => {
                return (
                  <div
                    key={product._id}
                    className={styled.home__container__products__down__card}
                  >
                    <div
                      className={
                        styled.home__container__products__down__card__img
                      }
                    >
                      <img
                        src="https://preview.colorlib.com/theme/aroma/img/product/product1.png"
                        alt={product.name}
                      />
                    </div>
                    <div
                      className={
                        styled.home__container__products__down__card__text
                      }
                    >
                      <div
                        className={
                          styled.home__container__products__down__card__text__up
                        }
                      >
                        {product.description}
                      </div>
                      <div
                        className={
                          styled.home__container__products__down__card__text__middle
                        }
                      >
                        {product.name}
                      </div>
                      <div
                        className={
                          styled.home__container__products__down__card__text__down
                        }
                      >
                        ${product.price}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className={styled.home__sale}>
        <div className={styled.home__sale__container}>
          <div className={styled.home__sale__container__text}>
            <h3>Up To 50% Off</h3>
            <h4>Winter Sale</h4>
            <p>Him she'd let them sixth saw light</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>

      <div className={styled.home__container}>
        <div className={styled.home__container__products}>
          <div className={styled.home__container__products__title}>
            <p>Popular Item in the market</p>
            <h2>
              Best <span>Sellers</span>
            </h2>
          </div>
          <div className={styled.home__container__products__down}>
            <div className={styled.home__container__products__down__card}>
              <div
                className={styled.home__container__products__down__card__img}
              >
                <img
                  src="https://preview.colorlib.com/theme/aroma/img/product/product1.png"
                  alt="wotch"
                />
              </div>
              <div
                className={styled.home__container__products__down__card__text}
              >
                <div
                  className={
                    styled.home__container__products__down__card__text__up
                  }
                >
                  Accessories
                </div>
                <div
                  className={
                    styled.home__container__products__down__card__text__middle
                  }
                >
                  Quartz Belt Watch
                </div>
                <div
                  className={
                    styled.home__container__products__down__card__text__down
                  }
                >
                  $150.00
                </div>
              </div>
            </div>
            <div className={styled.home__container__products__down__card}>
              <div
                className={styled.home__container__products__down__card__img}
              >
                <img
                  src="https://preview.colorlib.com/theme/aroma/img/product/product2.png"
                  alt="wotch"
                />
              </div>
              <div
                className={styled.home__container__products__down__card__text}
              >
                <div
                  className={
                    styled.home__container__products__down__card__text__up
                  }
                >
                  Beauty
                </div>
                <div
                  className={
                    styled.home__container__products__down__card__text__middle
                  }
                >
                  Women Freshwash
                </div>
                <div
                  className={
                    styled.home__container__products__down__card__text__down
                  }
                >
                  $150.00
                </div>
              </div>
            </div>
            <div className={styled.home__container__products__down__card}>
              <div
                className={styled.home__container__products__down__card__img}
              >
                <img
                  src="https://preview.colorlib.com/theme/aroma/img/product/product3.png"
                  alt="wotch"
                />
              </div>
              <div
                className={styled.home__container__products__down__card__text}
              >
                <div
                  className={
                    styled.home__container__products__down__card__text__up
                  }
                >
                  Decor
                </div>
                <div
                  className={
                    styled.home__container__products__down__card__text__middle
                  }
                >
                  Room Flash Light
                </div>
                <div
                  className={
                    styled.home__container__products__down__card__text__down
                  }
                >
                  $150.00
                </div>
              </div>
            </div>
            <div className={styled.home__container__products__down__card}>
              <div
                className={styled.home__container__products__down__card__img}
              >
                <img
                  src="https://preview.colorlib.com/theme/aroma/img/product/product4.png"
                  alt="wotch"
                />
              </div>
              <div
                className={styled.home__container__products__down__card__text}
              >
                <div
                  className={
                    styled.home__container__products__down__card__text__up
                  }
                >
                  Decor
                </div>
                <div
                  className={
                    styled.home__container__products__down__card__text__middle
                  }
                >
                  Room Flash Light
                </div>
                <div
                  className={
                    styled.home__container__products__down__card__text__down
                  }
                >
                  $150.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styled.home__container}>
        <div className={styled.home__container__products}>
          <div className={styled.home__container__products__title}>
            <p>Popular Item in the market</p>
            <h2>
              Latest <span>News</span>
            </h2>
          </div>
          <div className={styled.home__container__products__down}>
            <div className={styled.home__container__products__down__news}>
              <div
                className={styled.home__container__products__down__news__img}
              >
                <img
                  src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png"
                  alt="clothes"
                />
              </div>
              <div
                className={styled.home__container__products__down__news__text}
              >
                <div
                  className={
                    styled.home__container__products__down__news__text__up
                  }
                >
                  <span>By Admin</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 352C293.2 352 319.2 334.5 334.4 318.1C343.3 308.4 358.5 307.7 368.3 316.7C378 325.7 378.6 340.9 369.6 350.6C347.7 374.5 309.7 400 256 400C202.3 400 164.3 374.5 142.4 350.6C133.4 340.9 133.1 325.7 143.7 316.7C153.5 307.7 168.7 308.4 177.6 318.1C192.8 334.5 218.8 352 256 352zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                  </svg>
                  <span> 2 Comments</span>
                </div>
                <div
                  className={
                    styled.home__container__products__down__news__text__middle
                  }
                >
                  The Richland Center Shooping News and weekly shooper
                </div>
                <div
                  className={
                    styled.home__container__products__down__news__text__down
                  }
                >
                  <p>
                    Let one fifth i bring fly to divided face for bearing divide
                    unto seed. Winged divided light Forth.
                  </p>
                  <span>
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className={styled.home__container__products__down__news}>
              <div
                className={styled.home__container__products__down__news__img}
              >
                <img
                  src="https://preview.colorlib.com/theme/aroma/img/blog/blog2.png"
                  alt="clothes"
                />
              </div>
              <div
                className={styled.home__container__products__down__news__text}
              >
                <div
                  className={
                    styled.home__container__products__down__news__text__up
                  }
                >
                  <span>By Admin</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 352C293.2 352 319.2 334.5 334.4 318.1C343.3 308.4 358.5 307.7 368.3 316.7C378 325.7 378.6 340.9 369.6 350.6C347.7 374.5 309.7 400 256 400C202.3 400 164.3 374.5 142.4 350.6C133.4 340.9 133.1 325.7 143.7 316.7C153.5 307.7 168.7 308.4 177.6 318.1C192.8 334.5 218.8 352 256 352zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                  </svg>
                  <span> 2 Comments</span>
                </div>
                <div
                  className={
                    styled.home__container__products__down__news__text__middle
                  }
                >
                  The Shopping News also offers top-quality printing services
                </div>
                <div
                  className={
                    styled.home__container__products__down__news__text__down
                  }
                >
                  <p>
                    Let one fifth i bring fly to divided face for bearing divide
                    unto seed. Winged divided light Forth.
                  </p>
                  <span>
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className={styled.home__container__products__down__news}>
              <div
                className={styled.home__container__products__down__news__img}
              >
                <img
                  src="https://preview.colorlib.com/theme/aroma/img/blog/blog3.png"
                  alt="clothes"
                />
              </div>
              <div
                className={styled.home__container__products__down__news__text}
              >
                <div
                  className={
                    styled.home__container__products__down__news__text__up
                  }
                >
                  <span>By Admin</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 352C293.2 352 319.2 334.5 334.4 318.1C343.3 308.4 358.5 307.7 368.3 316.7C378 325.7 378.6 340.9 369.6 350.6C347.7 374.5 309.7 400 256 400C202.3 400 164.3 374.5 142.4 350.6C133.4 340.9 133.1 325.7 143.7 316.7C153.5 307.7 168.7 308.4 177.6 318.1C192.8 334.5 218.8 352 256 352zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                  </svg>
                  <span> 2 Comments</span>
                </div>
                <div
                  className={
                    styled.home__container__products__down__news__text__middle
                  }
                >
                  Professional design staff and efficient equipment you’ll find
                  we offer
                </div>
                <div
                  className={
                    styled.home__container__products__down__news__text__down
                  }
                >
                  <p>
                    Let one fifth i bring fly to divided face for bearing divide
                    unto seed. Winged divided light Forth.
                  </p>
                  <span>
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
    </div>
  );
}

export default Home;
