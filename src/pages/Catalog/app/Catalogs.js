import { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import useProductService from "../../../services/ProductCatalogService";
import ErrorMessage from "../../../components/errorMessage/ErrorMessage";
import Spinner from "../../../components/spinner/Spinner";
import AppMatching2 from "../app-mathing/AppMatching2";
import Error from "../../ModalWindows/Error/Error";
import AppHeader from "../../main/app-header/AppHeader";
import heartIcon from "../../../resources/icons/heart.svg";
import packageIcon from "../../../resources/icons/package.svg";
import viewsIcon from "../../../resources/icons/catalogIcons/views.svg";
import exitIcon from "../../../resources/icons/catalogIcons/exit.svg";
import bonusIcon from "../../../resources/icons/catalogIcons/bonus.svg";
import profileIcon from "../../../resources/icons/catalogIcons/profile.svg";
import "../../main/app-catalog-clothes/AppCatalogClothes";
import "./templateCatalogs.scss";

const Catalogs = () => {
  const [itemProducts, setItemProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState([]);
  const [active, setActive] = useState(false);
  const [showToggleMathing, setShowToggleMathing] = useState(false);
  const [offset, setOffset] = useState(0);
  const [taggingModalError, setTaggingModalError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const { loading, error, getItemProductsCatalog } = useProductService();

  const getItemCatalogProducts = (items) => {
    setItemProducts(itemProducts => [...itemProducts, ...items]);

  };

  const getValueErrorModal = (value, textError) => {
    setTaggingModalError(value);
    setMessageError(textError);
  }

  useEffect(() => {
    getItemProducts();
  }, []);

  useEffect(() => {
    // window.scrollTo(0, 0);
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 450) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };


  const getItemProducts = async () => {

    await getItemProductsCatalog().then(res => {
      if (res) setLoadingProducts(itemProducts => [...itemProducts, res]);

    });

  };

  const hideToggleMathcing = () => {
    setShowToggleMathing(!showToggleMathing);
  };

  const offsetProducts = () => {

    setOffset(offset => offset + 1);
    getOffSet();
  }

  const getOffSet = () => {
    return offset;
  }

  const renderItems = () => {
    return (

      <>
        {itemProducts.map((clothe, i) => {
          return (
            <div
              key={i}
              className="catalog__wrapper catalog__section-list_wrapper"
            >
              <div className="catalog__wrapper_img">
                <img
                  src={clothe.image}
                  alt={clothe.type}
                  width={300}
                  height="319"
                />
              </div>
              <div className="catalog__info">
                <div className="catalog__item">
                  <div className="catalog__cost">
                    {clothe.price}$
                    <div style={{ display: "inline", marginLeft: "10px", lineHeight: "20px", fontSize: "12px" }}>
                      {clothe.title}
                    </div>
                  </div>



                  <div className="catalog__descr">
                    {`${clothe.description.slice(0, 30)}...`}
                  </div>

                  <Link to={`/productMap/${clothe.id}`}>

                    <button className="catalog__btn">
                      Подробнее
                      <svg
                        width="26"
                        height="4"
                        viewBox="0 0 26 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z"
                          fill="#121212"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
                <div className="catalog__icons">
                  <div className="icons">
                    <img src={heartIcon} alt="heart img" />
                    <img src={packageIcon} alt="package img" />
                  </div>

                  <div className="catalog__stars">
                    <div className="catalog__stars_item">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.44473 4.661C9.54797 4.58409 9.62455 4.4768 9.66373 4.35417C9.70291 4.23154 9.70274 4.09972 9.66322 3.97719C9.62371 3.85467 9.54684 3.74759 9.44339 3.67095C9.33995 3.59432 9.21511 3.55199 9.08639 3.54988L6.58639 3.45544C6.5741 3.45459 6.56232 3.45021 6.55246 3.44281C6.5426 3.43542 6.53509 3.42534 6.53084 3.41377L5.66695 1.08044C5.62354 0.961729 5.54471 0.859223 5.44112 0.7868C5.33752 0.714378 5.21418 0.675537 5.08778 0.675537C4.96138 0.675537 4.83804 0.714378 4.73445 0.7868C4.63086 0.859223 4.55202 0.961729 4.50861 1.08044L3.6475 3.42211C3.64325 3.43367 3.63574 3.44376 3.62588 3.45115C3.61602 3.45854 3.60424 3.46293 3.59195 3.46377L1.09195 3.55822C0.963227 3.56032 0.838392 3.60266 0.734946 3.67929C0.6315 3.75592 0.554631 3.863 0.515117 3.98553C0.475603 4.10805 0.475426 4.23987 0.51461 4.3625C0.553795 4.48513 0.630375 4.59242 0.733615 4.66933L2.69473 6.211C2.70454 6.21872 2.71188 6.22915 2.71583 6.241C2.71978 6.25285 2.72017 6.26559 2.71695 6.27766L2.04195 8.66933C2.00697 8.79112 2.01036 8.92073 2.05165 9.04052C2.09295 9.16032 2.17014 9.26448 2.27274 9.33885C2.37533 9.41322 2.49835 9.45417 2.62505 9.45615C2.75174 9.45812 2.87597 9.42102 2.98084 9.34988L5.05306 7.961C5.06327 7.95395 5.07538 7.95017 5.08778 7.95017C5.10019 7.95017 5.1123 7.95395 5.1225 7.961L7.19473 9.34988C7.29817 9.42345 7.42196 9.46298 7.54889 9.46298C7.67583 9.46298 7.79961 9.42345 7.90306 9.34988C8.00568 9.27622 8.08295 9.17256 8.12424 9.05318C8.16553 8.93379 8.1688 8.80454 8.13362 8.68322L7.45306 6.28322C7.44945 6.27117 7.44965 6.2583 7.45363 6.24637C7.45761 6.23444 7.46517 6.22403 7.47528 6.21655L9.44473 4.661Z"
                          fill="#514A7E"
                        />
                      </svg>
                    </div>
                    <div className="catalog__stars_item">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.44473 4.661C9.54797 4.58409 9.62455 4.4768 9.66373 4.35417C9.70291 4.23154 9.70274 4.09972 9.66322 3.97719C9.62371 3.85467 9.54684 3.74759 9.44339 3.67095C9.33995 3.59432 9.21511 3.55199 9.08639 3.54988L6.58639 3.45544C6.5741 3.45459 6.56232 3.45021 6.55246 3.44281C6.5426 3.43542 6.53509 3.42534 6.53084 3.41377L5.66695 1.08044C5.62354 0.961729 5.54471 0.859223 5.44112 0.7868C5.33752 0.714378 5.21418 0.675537 5.08778 0.675537C4.96138 0.675537 4.83804 0.714378 4.73445 0.7868C4.63086 0.859223 4.55202 0.961729 4.50861 1.08044L3.6475 3.42211C3.64325 3.43367 3.63574 3.44376 3.62588 3.45115C3.61602 3.45854 3.60424 3.46293 3.59195 3.46377L1.09195 3.55822C0.963227 3.56032 0.838392 3.60266 0.734946 3.67929C0.6315 3.75592 0.554631 3.863 0.515117 3.98553C0.475603 4.10805 0.475426 4.23987 0.51461 4.3625C0.553795 4.48513 0.630375 4.59242 0.733615 4.66933L2.69473 6.211C2.70454 6.21872 2.71188 6.22915 2.71583 6.241C2.71978 6.25285 2.72017 6.26559 2.71695 6.27766L2.04195 8.66933C2.00697 8.79112 2.01036 8.92073 2.05165 9.04052C2.09295 9.16032 2.17014 9.26448 2.27274 9.33885C2.37533 9.41322 2.49835 9.45417 2.62505 9.45615C2.75174 9.45812 2.87597 9.42102 2.98084 9.34988L5.05306 7.961C5.06327 7.95395 5.07538 7.95017 5.08778 7.95017C5.10019 7.95017 5.1123 7.95395 5.1225 7.961L7.19473 9.34988C7.29817 9.42345 7.42196 9.46298 7.54889 9.46298C7.67583 9.46298 7.79961 9.42345 7.90306 9.34988C8.00568 9.27622 8.08295 9.17256 8.12424 9.05318C8.16553 8.93379 8.1688 8.80454 8.13362 8.68322L7.45306 6.28322C7.44945 6.27117 7.44965 6.2583 7.45363 6.24637C7.45761 6.23444 7.46517 6.22403 7.47528 6.21655L9.44473 4.661Z"
                          fill="#514A7E"
                        />
                      </svg>
                    </div>

                    <div className="catalog__stars_item">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.44473 4.661C9.54797 4.58409 9.62455 4.4768 9.66373 4.35417C9.70291 4.23154 9.70274 4.09972 9.66322 3.97719C9.62371 3.85467 9.54684 3.74759 9.44339 3.67095C9.33995 3.59432 9.21511 3.55199 9.08639 3.54988L6.58639 3.45544C6.5741 3.45459 6.56232 3.45021 6.55246 3.44281C6.5426 3.43542 6.53509 3.42534 6.53084 3.41377L5.66695 1.08044C5.62354 0.961729 5.54471 0.859223 5.44112 0.7868C5.33752 0.714378 5.21418 0.675537 5.08778 0.675537C4.96138 0.675537 4.83804 0.714378 4.73445 0.7868C4.63086 0.859223 4.55202 0.961729 4.50861 1.08044L3.6475 3.42211C3.64325 3.43367 3.63574 3.44376 3.62588 3.45115C3.61602 3.45854 3.60424 3.46293 3.59195 3.46377L1.09195 3.55822C0.963227 3.56032 0.838392 3.60266 0.734946 3.67929C0.6315 3.75592 0.554631 3.863 0.515117 3.98553C0.475603 4.10805 0.475426 4.23987 0.51461 4.3625C0.553795 4.48513 0.630375 4.59242 0.733615 4.66933L2.69473 6.211C2.70454 6.21872 2.71188 6.22915 2.71583 6.241C2.71978 6.25285 2.72017 6.26559 2.71695 6.27766L2.04195 8.66933C2.00697 8.79112 2.01036 8.92073 2.05165 9.04052C2.09295 9.16032 2.17014 9.26448 2.27274 9.33885C2.37533 9.41322 2.49835 9.45417 2.62505 9.45615C2.75174 9.45812 2.87597 9.42102 2.98084 9.34988L5.05306 7.961C5.06327 7.95395 5.07538 7.95017 5.08778 7.95017C5.10019 7.95017 5.1123 7.95395 5.1225 7.961L7.19473 9.34988C7.29817 9.42345 7.42196 9.46298 7.54889 9.46298C7.67583 9.46298 7.79961 9.42345 7.90306 9.34988C8.00568 9.27622 8.08295 9.17256 8.12424 9.05318C8.16553 8.93379 8.1688 8.80454 8.13362 8.68322L7.45306 6.28322C7.44945 6.27117 7.44965 6.2583 7.45363 6.24637C7.45761 6.23444 7.46517 6.22403 7.47528 6.21655L9.44473 4.661Z"
                          fill="#514A7E"
                        />
                      </svg>
                    </div>

                    <div className="catalog__stars_item">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.44473 4.661C9.54797 4.58409 9.62455 4.4768 9.66373 4.35417C9.70291 4.23154 9.70274 4.09972 9.66322 3.97719C9.62371 3.85467 9.54684 3.74759 9.44339 3.67095C9.33995 3.59432 9.21511 3.55199 9.08639 3.54988L6.58639 3.45544C6.5741 3.45459 6.56232 3.45021 6.55246 3.44281C6.5426 3.43542 6.53509 3.42534 6.53084 3.41377L5.66695 1.08044C5.62354 0.961729 5.54471 0.859223 5.44112 0.7868C5.33752 0.714378 5.21418 0.675537 5.08778 0.675537C4.96138 0.675537 4.83804 0.714378 4.73445 0.7868C4.63086 0.859223 4.55202 0.961729 4.50861 1.08044L3.6475 3.42211C3.64325 3.43367 3.63574 3.44376 3.62588 3.45115C3.61602 3.45854 3.60424 3.46293 3.59195 3.46377L1.09195 3.55822C0.963227 3.56032 0.838392 3.60266 0.734946 3.67929C0.6315 3.75592 0.554631 3.863 0.515117 3.98553C0.475603 4.10805 0.475426 4.23987 0.51461 4.3625C0.553795 4.48513 0.630375 4.59242 0.733615 4.66933L2.69473 6.211C2.70454 6.21872 2.71188 6.22915 2.71583 6.241C2.71978 6.25285 2.72017 6.26559 2.71695 6.27766L2.04195 8.66933C2.00697 8.79112 2.01036 8.92073 2.05165 9.04052C2.09295 9.16032 2.17014 9.26448 2.27274 9.33885C2.37533 9.41322 2.49835 9.45417 2.62505 9.45615C2.75174 9.45812 2.87597 9.42102 2.98084 9.34988L5.05306 7.961C5.06327 7.95395 5.07538 7.95017 5.08778 7.95017C5.10019 7.95017 5.1123 7.95395 5.1225 7.961L7.19473 9.34988C7.29817 9.42345 7.42196 9.46298 7.54889 9.46298C7.67583 9.46298 7.79961 9.42345 7.90306 9.34988C8.00568 9.27622 8.08295 9.17256 8.12424 9.05318C8.16553 8.93379 8.1688 8.80454 8.13362 8.68322L7.45306 6.28322C7.44945 6.27117 7.44965 6.2583 7.45363 6.24637C7.45761 6.23444 7.46517 6.22403 7.47528 6.21655L9.44473 4.661Z"
                          fill="#514A7E"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
        }
      </>
    );
  }


  const items = renderItems();
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !itemProducts) ? items : null;


  return (
    <>
      <AppHeader />
      <section className="catalog">
        <div className="container">
          <div className="productMap_subtitle">


            <div className="productMap_link catalog_link">
              <Link to="/">
                Главная/
              </Link>
              <span className="catalog_nowPath">Каталог</span>

            </div>
          </div>
          <div className="title mt94">
            <h2 className="title_text">Каталог</h2>
          </div>

          <div className="catalog__section">
            <div className="catalog__section-filters">
              <div className="filters-block btLine pb20">
                <div className="filters-block_img">
                  <img src={viewsIcon} alt="package icon" />
                </div>

                <div
                  className="filters-block_text downlist"
                  onClick={hideToggleMathcing}
                >
                  Соответствие
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 1.04907e-06L7 5L12 1.74846e-07L14 1L7 8L-6.11959e-07 1L2 1.04907e-06Z" fill="#514A7E" />
                  </svg>
                </div>
                <Fade top when={showToggleMathing}>

                  <div
                    className="filters-block_matching"
                    style={{
                      display: `${showToggleMathing ? "block" : "none"}`,
                    }}
                  >

                    <AppMatching2 getOffSet={getOffSet}
                      getItemCatalogProducts={getItemCatalogProducts}
                      getValueErrorModal={getValueErrorModal}
                    />
                  </div>
                </Fade>
              </div>
              <div className="filters-block">
                <div className="filters-block_img">
                  <img
                    style={{ opacity: 0.5 }}
                    src={heartIcon}
                    alt="package icon"
                  />
                </div>

                <div className="filters-block_text">
                  Избранное <span className="circle-number"></span>
                </div>
              </div>

              <div className="filters-block btLine pb20">
                <div className="filters-block_img">
                  <img
                    style={{ opacity: 0.5 }}
                    src={packageIcon}
                    alt="package icon"
                  />
                </div>

                <div className="filters-block_text">
                  Корзина <span className="circle-number"></span>
                </div>
              </div>

              <div className="filters-block">
                <div className="filters-block_img">
                  <img src={bonusIcon} alt="package icon" />
                </div>

                <div className="filters-block_text">
                  Бонусы <span className="circle-number"></span>
                </div>
              </div>
              <div className="filters-block">
                <div className="filters-block_img">
                  <img src={profileIcon} alt="package icon" />
                </div>

                <div className="filters-block_text">
                  Личные данные <span className="circle-number"></span>
                </div>
              </div>
              <div className="filters-block">
                <div className="filters-block_img">
                  <a href="./">
                    <img src={exitIcon} alt="package icon" />
                  </a>
                </div>

                <div className="filters-block_text">
                  <a href="./">
                    Выйти <span className="circle-number"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="catalog__section-list">
              {errorMessage}
              {spinner}
              {content}
            </div>
          </div>
          <div style={{ "minHeight": 130, "marginBottom": "66px", "marginTop": "61px" }}>

            <button onClick={offsetProducts} className="btn btn-more">
              Ещё
              <svg width="8" height="24" viewBox="0 0 8 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.64645 23.3536C3.84171 23.5488 4.15829 23.5488 4.35355 23.3536L7.53553 20.1716C7.7308 19.9763 7.7308 19.6597 7.53553 19.4645C7.34027 19.2692 7.02369 19.2692 6.82843 19.4645L4 22.2929L1.17157 19.4645C0.976312 19.2692 0.659729 19.2692 0.464467 19.4645C0.269205 19.6597 0.269205 19.9763 0.464467 20.1716L3.64645 23.3536ZM3.5 2.18557e-08L3.5 23L4.5 23L4.5 -2.18557e-08L3.5 2.18557e-08Z" fill="#514A7E" />
              </svg>
            </button>
          </div>
          <Fade bottom opposite when={active}>
            <div className="top right" onClick={scrollTop}>
              <div className="about__topBtn">
                <svg
                  width="8"
                  height="27"
                  viewBox="0 0 8 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.35355 0.646446C4.15829 0.451185 3.84171 0.451185 3.64645 0.646446L0.464467 3.82843C0.269205 4.02369 0.269205 4.34027 0.464467 4.53553C0.659729 4.7308 0.976312 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646446ZM4.5 27L4.5 1L3.5 1L3.5 27L4.5 27Z"
                    fill="#FFFDF5"
                  />
                </svg>
              </div>
            </div>
          </Fade>
        </div>
      </section>



      <Error taggingError={taggingModalError} messageError={messageError} />

    </>
  );
};

export default Catalogs;
