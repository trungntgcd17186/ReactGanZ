import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Home/home.css";
import SimpleSlider from "./slider";
import ProductNewSlider from "./productNewSlider";
import ProductHightlight from "./productHightlight";
import FeedbackSlider from "./feedbackSlider";
//Import Image

import download from "../../img/download.png";
import daphop from "../../img/daphop.jpeg";
import daphop1 from "../../img/daphop1.jpeg";
import daphop2 from "../../img/daphop2.jpeg";
import daphop3 from "../../img/daphop3.jpeg";
import daphop4 from "../../img/3327_Ha_Thu_3.jpeg";
//==================================================//
import Footer from "../Footer/footer";
//==================================================//
import React from "react";

import Product from "../Product/index";
//==================================================//
function Home(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productApi = "http://localhost:3001/products";
    fetch(productApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (datas) {
        setProducts(datas);
      });
  }, []);

  return (
    <div className="app">
      <div className="grid__full-width">
        <div className="app__slider">
          <div className="slider__container">
            <div className="grid">
              <div className="slider__content">
                <div className="slider__container-delivery">
                  <h4 className="slider__container-delivery-name">
                    Delivering Happiness
                  </h4>
                  <h2 className="slider__container-delivery-date">
                    New Shopping
                  </h2>
                  <h2 className="slider__container-delivery-freeship">
                    Experience for Men
                  </h2>
                </div>
                <SimpleSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app__express">
        <div className="grid">
          <div className="gird__row">
            <div className="slider__express slider__express-mobile">
              <div className="slider__express-box">
                <i className="express-icon far fa-clock"></i>
                <p className="slider__express-des">
                  Giao h??ng <span>24h</span> ??? HN & HCM 2-3 ng??y ??? t???nh kh??c
                </p>
              </div>
              <div className="slider__express-box slider__express-box-border">
                <i className="express-icon fas fa-shipping-fast"></i>
                <p className="slider__express-des">
                  Mi???n ph?? v???n chuy???n <span>cho ????n h??ng tr??n 300k</span>
                </p>
              </div>
              <div className="slider__express-box slider__express-box-border">
                <i className="express-icon fas fa-undo"></i>
                <p className="slider__express-des">
                  <span>60 ng??y</span> ?????i tr??? cho b???t k?? l?? do g??
                </p>
              </div>
              <div className="slider__express-box slider__express-box-border">
                <i className="express-icon fas fa-home"></i>
                <p className="slider__express-des">
                  Giao h??ng <span>t???n n??i</span> nh???n ho??n tr???, ho??n ti???n trong{" "}
                  <span>24h</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app__container">
        <div className="grid">
          <div className="grid__row grid__row-table">
            <div className="content__product-new">
              <h2 className="product__new-heading">m???i ra m???t</h2>
              <div className="product__new-slide1">
                <ProductNewSlider />
              </div>
            </div>

            <div className="content__product-new">
              <h2 className="product__new-heading2">n???i b???t</h2>
              <div className="product__new-slide2">
                <ProductHightlight />
              </div>
            </div>
          </div>

          <div className="feature__product">
            <h2 className="feature__product-title">S???n ph???m ph??? bi???n</h2>
            <div className="feature__product-container">
              <div id="productRender" className="grid__col-2-5">
                {products.map((pr, index) =>
                  index <= 3 ? (
                    <Product
                      key={pr.id}
                      id={pr.id}
                      title={pr.title}
                      price={pr.price}
                      priceSale={pr.priceSale}
                      image={pr.image}
                      quantity={pr.quantity}
                    />
                  ) : (
                    ""
                  )
                )}
              </div>
              <div className="grid__row grid__row-feature "></div>
            </div>

            <div className="recommend__product">
              <h2 className="recommend__product-title">????? xu???t cho b???n</h2>
              <div className="feature__product-container">
                <div id="productRender" className="grid__col-2-5">
                  {products.map((pr, index) =>
                    pr.category == "boxer" ? (
                      <Product
                        key={pr.id}
                        id={pr.id}
                        title={pr.title}
                        price={pr.price}
                        priceSale={pr.priceSale}
                        image={pr.image}
                        quantity={pr.quantity}
                      />
                    ) : (
                      ""
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="feedback__customer">
              <div className="feedback__customer-title">
                <div className="feedback__customer-name">
                  <h2>kh??ch h??ng n??i g?? v??? ganz</h2>
                </div>
              </div>
              <FeedbackSlider />
            </div>
          </div>
        </div>
        <div className="product__process">
          <div className="grid__full-width">
            <div className="product__process-logo">
              <img src={download} alt="logo" className="product__process-img" />
              <h4 className="product__process-title">
                Tr???i nghi???m mua s???m <span>GanZ</span>
              </h4>
              <h2 className="product__process-text">
                Cam K???t 100% <span>H??i L??ng</span>
              </h2>
            </div>
            <div className="product__background">
              <img
                src={daphop}
                alt="daphop"
                className="product__image-background"
              />
              <img
                src={daphop4}
                alt="daphop"
                className="product__image-background1"
              />
              <img
                src={daphop1}
                alt="daphop"
                className="product__image-background2"
              />
              <img
                src={daphop2}
                alt="daphop"
                className="product__image-background3"
              />
              <img
                src={daphop3}
                alt="daphop"
                className="product__image-background4"
              />
            </div>
          </div>

          <div className="grid">
            <div className="product__process-content">
              <ul className="product__process-list">
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>01. Li??n h??? ch??m s??c kh??ch h??ng d??? d??ng</span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>
                      02. Th???i gian trao ?????i v???i c??c b???n t???ng ????i vi??n l?? kh??ng
                      h???n ch???
                    </span>
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>03. V??n ho?? say YES trong x??? l?? t??nh hu???ng</span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>04. S??? t????ng t??c mang t??nh c?? nh??n ho?? </span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>
                      05. CSKH ho???t ?????ng 13,5h/1 ng??y v?? 7 ng??y/1 tu???n{" "}
                    </span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>
                      06. D???ch v??? ?????i tr??? mi???n ph?? 60 ng??y v???i B???T C??? L?? DO G??{" "}
                    </span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>07. D???ch v??? ?????i tr??? t???n n??i c???a Coolmate</span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>
                      08. Tr??? h??ng ho??n ti???n v?? c?? b??u t?? l???y h??ng t???n n??i{" "}
                    </span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>09. Giao h??ng nhanh m?? kh??ng thu th??m ph??</span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>10. ????ng g??i c???n th???n </span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item product__process-item-end">
                    {" "}
                    <span>11. D???ch v??? t???ng chi???c t???t/v??? b??? m???t </span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
              </ul>
            </div>
          </div>

          <div className="process__produc-url">
            <Link to="/deliverydetail" className="product__process-link">
              <span>Xem chi ti???t</span>
            </Link>
          </div>
        </div>
        <div className="grid__full-width">
          <div className="banner">
            <div className="banner__box">
              <h2 className="banner__box-content">
                M???c <span>?????p</span>{" "}
                <p>
                  S???ng <span>Ch???t</span>
                </p>{" "}
                <p className="end">
                  c??ng <span>GanZ</span>{" "}
                </p>
              </h2>
            </div>
            <div className="banner__box-image">
              <div className="banner__box1">
                <div className="banner__box-des">
                  <h3 className="banner__box-name">
                    <a href="">
                      Phim Netflix: ?????ng b??? l??? 12 b??? phim Netflix th??ng 9/2021
                      c???c h???p d???n n??y
                    </a>
                  </h3>
                  <a href="" className="banner__box-link">
                    xem chi ti???t
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
              <div className="banner__box2">
                <div className="banner__box-des">
                  <h3 className="banner__box-name">
                    <a href="">Phim chi???u r???p th??ng 9/2021 c?? g?? h???p d???n?</a>
                  </h3>
                  <a href="" className="banner__box-link">
                    xem chi ti???t
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
              <div className="banner__box3">
                <div className="banner__box-des">
                  <h3 className="banner__box-name">
                    <a href="">
                      ??i???m Danh 10 ?????a ??i???m Mua ??o Kho??c Th??? Thao Nam ?????p V?? Uy
                      T??n
                    </a>
                  </h3>
                  <a href="" className="banner__box-link">
                    xem chi ti???t
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
              <div className="banner__box4">
                <div className="banner__box-des">
                  <h3 className="banner__box-name">
                    <a href="">
                      ??i???m danh m???t s??? thrifting shop n???i ti???ng nh???t t???i H?? N???i
                    </a>
                  </h3>
                  <a href="" className="banner__box-link">
                    xem chi ti???t
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="notification-message success"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
