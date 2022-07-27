import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import axios from "axios";
import AppHeader from "../../main/app-header/AppHeader";
import AppReview from "../../main/app-review/AppReview";
import heartIcon from "../../../resources/icons/heart.svg";
import packageIcon from "../../../resources/icons/package.svg";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "./productMap.scss";



const ProductMap = () => {

    const location = useLocation();

    const [productInfo, setProductInfo] = useState([]);
    const [productType, setProductType] = useState("");
    const [recomendedProducts, setRecomendedProducts] = useState([]);

    useEffect(() => {
        const productId = location.pathname.slice(location.pathname.lastIndexOf("/") + 1, location.pathname.length);

        axios.get(`http://localhost:5000/product/${productId}`).then(res => {
            setProductType(res.data.type_name);
            setProductInfo([res.data]);
        });

        window.scrollTo(0, 0);
        const options = { method: 'GET', headers: { Accept: 'application/json' } };
        const _url = `https://search.visenze.com/v1/product/recommendations/${productId}?app_key=6261b9a4b2ff47561387bf848cd1945a&placement_id=1281&page=1&limit=10&alt_limit=5&facets_limit=10&facets_show_count=false&score=false&score_min=0&score_max=1&dedup=false`;

        fetch(_url, options)
            .then(response => response.json())
            .then(response => setRecomendedProducts(response.result))
            .catch(err => console.error(err));




        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const windowLocation = (href) => {
        window.location.href = href;
    }

    //TODO replace * text for break <br />
    // const modifiedText = () => {

    // }


    return (
        <>
            <AppHeader />
            <section className="productMap">
                <div className="container">
                    <div className="productMap_subtitle">
                        <Link to="/">

                            <div className="circleBack">
                                <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM18 3.5L1 3.5L1 4.5L18 4.5L18 3.5Z" fill="#FFFDF5" />
                                </svg>
                            </div>
                        </Link>

                        <div className="productMap_link">
                            <Link to="/">
                                Главная/
                            </Link>
                            {productType ? productType : null}

                        </div>
                    </div>

                    {productInfo.map((product) => {
                        return (


                            <div key={product.id} className="productMap__block">
                                <h2 className="productMap__headerText">{product.title}</h2>


                                <div className="productMap__blockInfo">
                                    <img src={product.image} alt="img product" className="productMap__img" />

                                    <div className="productMap__data">
                                        <div className="productMap__price">

                                            {product.variant_count}$

                                        </div>

                                        <div className="productMap__sizeText">
                                            Размер
                                        </div>

                                        <div className="productMap__sizeProducts">
                                            <div className="productMap__size">
                                                <span className="productMap__size-name">S</span>
                                                <span className="theSize">42</span>
                                            </div>
                                            <div className="productMap__size">
                                                <span className="productMap__size-name">M</span>
                                                <span className="theSize">44</span>
                                            </div>
                                            <div className="productMap__size">
                                                <span className="productMap__size-name">L</span>
                                                <span className="theSize">46</span>
                                            </div>
                                            <div className="productMap__size">
                                                <span className="productMap__size-name">XL</span>
                                                <span className="theSize">48</span>
                                            </div>

                                        </div>
                                        <div className="productMap__table">
                                            Таблица размеров
                                        </div>

                                        <div className="productMap__busket">
                                            <button className="btn productMap__busket-btn">В корзину
                                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.8893 5.66669V4.0278C11.8893 3.51711 11.7887 3.01141 11.5933 2.53959C11.3979 2.06777 11.1114 1.63906 10.7503 1.27795C10.3892 0.916829 9.96047 0.630375 9.48865 0.43494C9.01682 0.239505 8.51113 0.138916 8.00043 0.138916C7.48974 0.138916 6.98404 0.239505 6.51222 0.43494C6.0404 0.630375 5.61169 0.916829 5.25057 1.27795C4.88946 1.63906 4.603 2.06777 4.40757 2.53959C4.21213 3.01141 4.11154 3.51711 4.11154 4.0278V7.91669C4.11154 8.06404 4.17008 8.20534 4.27426 8.30953C4.37845 8.41372 4.51976 8.47225 4.6671 8.47225C4.81444 8.47225 4.95575 8.41372 5.05994 8.30953C5.16412 8.20534 5.22266 8.06404 5.22266 7.91669V6.7778H9.6671V5.66669H5.22266V4.0278C5.22266 3.29109 5.51531 2.58455 6.03625 2.06362C6.55718 1.54269 7.26372 1.25003 8.00043 1.25003C8.73715 1.25003 9.44368 1.54269 9.96462 2.06362C10.4856 2.58455 10.7782 3.29109 10.7782 4.0278V7.88892C10.7782 8.03626 10.8367 8.17757 10.9409 8.28175C11.0451 8.38594 11.1864 8.44447 11.3338 8.44447C11.4811 8.44447 11.6224 8.38594 11.7266 8.28175C11.8308 8.17757 11.8893 8.03626 11.8893 7.88892V6.7778H14.6671V16.7778H1.33377V6.7778H3.00043V5.66669H0.222656V16.8278C0.222656 17.1092 0.334451 17.3791 0.533448 17.5781C0.732445 17.7771 1.00234 17.8889 1.28377 17.8889H14.7171C14.9985 17.8889 15.2684 17.7771 15.4674 17.5781C15.6664 17.3791 15.7782 17.1092 15.7782 16.8278V5.66669H11.8893Z" fill="#FFFDF5" />
                                                </svg>

                                            </button>
                                            <div className="imgHeartIcon">
                                                <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.7797 30.3308C16.5526 30.3301 16.3321 30.2542 16.1527 30.115C10.4383 25.675 6.50191 21.8517 3.74747 18.0797C0.232467 13.2594 -0.5692 8.80916 1.36302 4.85222C2.74025 2.02583 6.69719 -0.286672 11.3222 1.05972C13.5273 1.69667 15.4513 3.06263 16.7797 4.93444C18.1081 3.06263 20.0321 1.69667 22.2372 1.05972C26.8519 -0.266117 30.8191 2.02583 32.1964 4.85222C34.1286 8.80916 33.3269 13.2594 29.8119 18.0797C27.0575 21.8517 23.1211 25.675 17.4066 30.115C17.2272 30.2542 17.0068 30.3301 16.7797 30.3308ZM8.69108 2.73499C7.59059 2.69216 6.49921 2.94985 5.5341 3.48039C4.56899 4.01093 3.76659 4.79429 3.21302 5.74638C1.61997 9.01472 2.33941 12.653 5.41247 16.8567C8.6783 21.0691 12.5025 24.8172 16.7797 27.9978C21.0562 24.8204 24.8804 21.0757 28.1469 16.8669C31.2303 12.653 31.9394 9.01472 30.3464 5.75666C29.3186 3.70111 26.2353 2.06694 22.8025 3.03305C21.7018 3.35834 20.6814 3.91048 19.8069 4.65393C18.9325 5.39738 18.2234 6.31568 17.7252 7.34972C17.6478 7.53822 17.5161 7.69945 17.3468 7.81292C17.1775 7.92639 16.9783 7.98697 16.7746 7.98697C16.5708 7.98697 16.3716 7.92639 16.2023 7.81292C16.033 7.69945 15.9013 7.53822 15.8239 7.34972C15.3295 6.31309 14.6216 5.39265 13.7466 4.64874C12.8716 3.90482 11.8493 3.35423 10.7466 3.03305C10.0786 2.83901 9.38676 2.7387 8.69108 2.73499Z" fill="#514A7E" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="review__stars productMap__stars">
                                            <div className="review__stars_item productMap__stars-item">
                                                <svg width="18" height="18" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.44473 4.661C9.54797 4.58409 9.62455 4.4768 9.66373 4.35417C9.70291 4.23154 9.70274 4.09972 9.66322 3.97719C9.62371 3.85467 9.54684 3.74759 9.44339 3.67095C9.33995 3.59432 9.21511 3.55199 9.08639 3.54988L6.58639 3.45544C6.5741 3.45459 6.56232 3.45021 6.55246 3.44281C6.5426 3.43542 6.53509 3.42534 6.53084 3.41377L5.66695 1.08044C5.62354 0.961729 5.54471 0.859223 5.44112 0.7868C5.33752 0.714378 5.21418 0.675537 5.08778 0.675537C4.96138 0.675537 4.83804 0.714378 4.73445 0.7868C4.63086 0.859223 4.55202 0.961729 4.50861 1.08044L3.6475 3.42211C3.64325 3.43367 3.63574 3.44376 3.62588 3.45115C3.61602 3.45854 3.60424 3.46293 3.59195 3.46377L1.09195 3.55822C0.963227 3.56032 0.838392 3.60266 0.734946 3.67929C0.6315 3.75592 0.554631 3.863 0.515117 3.98553C0.475603 4.10805 0.475426 4.23987 0.51461 4.3625C0.553795 4.48513 0.630375 4.59242 0.733615 4.66933L2.69473 6.211C2.70454 6.21872 2.71188 6.22915 2.71583 6.241C2.71978 6.25285 2.72017 6.26559 2.71695 6.27766L2.04195 8.66933C2.00697 8.79112 2.01036 8.92073 2.05165 9.04052C2.09295 9.16032 2.17014 9.26448 2.27274 9.33885C2.37533 9.41322 2.49835 9.45417 2.62505 9.45615C2.75174 9.45812 2.87597 9.42102 2.98084 9.34988L5.05306 7.961C5.06327 7.95395 5.07538 7.95017 5.08778 7.95017C5.10019 7.95017 5.1123 7.95395 5.1225 7.961L7.19473 9.34988C7.29817 9.42345 7.42196 9.46298 7.54889 9.46298C7.67583 9.46298 7.79961 9.42345 7.90306 9.34988C8.00568 9.27622 8.08295 9.17256 8.12424 9.05318C8.16553 8.93379 8.1688 8.80454 8.13362 8.68322L7.45306 6.28322C7.44945 6.27117 7.44965 6.2583 7.45363 6.24637C7.45761 6.23444 7.46517 6.22403 7.47528 6.21655L9.44473 4.661Z" fill="#514A7E" />
                                                </svg>
                                            </div>
                                            <div className="review__stars_item productMap__stars-item">
                                                <svg width="18" height="18" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.44473 4.661C9.54797 4.58409 9.62455 4.4768 9.66373 4.35417C9.70291 4.23154 9.70274 4.09972 9.66322 3.97719C9.62371 3.85467 9.54684 3.74759 9.44339 3.67095C9.33995 3.59432 9.21511 3.55199 9.08639 3.54988L6.58639 3.45544C6.5741 3.45459 6.56232 3.45021 6.55246 3.44281C6.5426 3.43542 6.53509 3.42534 6.53084 3.41377L5.66695 1.08044C5.62354 0.961729 5.54471 0.859223 5.44112 0.7868C5.33752 0.714378 5.21418 0.675537 5.08778 0.675537C4.96138 0.675537 4.83804 0.714378 4.73445 0.7868C4.63086 0.859223 4.55202 0.961729 4.50861 1.08044L3.6475 3.42211C3.64325 3.43367 3.63574 3.44376 3.62588 3.45115C3.61602 3.45854 3.60424 3.46293 3.59195 3.46377L1.09195 3.55822C0.963227 3.56032 0.838392 3.60266 0.734946 3.67929C0.6315 3.75592 0.554631 3.863 0.515117 3.98553C0.475603 4.10805 0.475426 4.23987 0.51461 4.3625C0.553795 4.48513 0.630375 4.59242 0.733615 4.66933L2.69473 6.211C2.70454 6.21872 2.71188 6.22915 2.71583 6.241C2.71978 6.25285 2.72017 6.26559 2.71695 6.27766L2.04195 8.66933C2.00697 8.79112 2.01036 8.92073 2.05165 9.04052C2.09295 9.16032 2.17014 9.26448 2.27274 9.33885C2.37533 9.41322 2.49835 9.45417 2.62505 9.45615C2.75174 9.45812 2.87597 9.42102 2.98084 9.34988L5.05306 7.961C5.06327 7.95395 5.07538 7.95017 5.08778 7.95017C5.10019 7.95017 5.1123 7.95395 5.1225 7.961L7.19473 9.34988C7.29817 9.42345 7.42196 9.46298 7.54889 9.46298C7.67583 9.46298 7.79961 9.42345 7.90306 9.34988C8.00568 9.27622 8.08295 9.17256 8.12424 9.05318C8.16553 8.93379 8.1688 8.80454 8.13362 8.68322L7.45306 6.28322C7.44945 6.27117 7.44965 6.2583 7.45363 6.24637C7.45761 6.23444 7.46517 6.22403 7.47528 6.21655L9.44473 4.661Z" fill="#514A7E" />
                                                </svg>
                                            </div>
                                            <div className="review__stars_item productMap__stars-item">
                                                <svg width="18" height="18" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.44473 4.661C9.54797 4.58409 9.62455 4.4768 9.66373 4.35417C9.70291 4.23154 9.70274 4.09972 9.66322 3.97719C9.62371 3.85467 9.54684 3.74759 9.44339 3.67095C9.33995 3.59432 9.21511 3.55199 9.08639 3.54988L6.58639 3.45544C6.5741 3.45459 6.56232 3.45021 6.55246 3.44281C6.5426 3.43542 6.53509 3.42534 6.53084 3.41377L5.66695 1.08044C5.62354 0.961729 5.54471 0.859223 5.44112 0.7868C5.33752 0.714378 5.21418 0.675537 5.08778 0.675537C4.96138 0.675537 4.83804 0.714378 4.73445 0.7868C4.63086 0.859223 4.55202 0.961729 4.50861 1.08044L3.6475 3.42211C3.64325 3.43367 3.63574 3.44376 3.62588 3.45115C3.61602 3.45854 3.60424 3.46293 3.59195 3.46377L1.09195 3.55822C0.963227 3.56032 0.838392 3.60266 0.734946 3.67929C0.6315 3.75592 0.554631 3.863 0.515117 3.98553C0.475603 4.10805 0.475426 4.23987 0.51461 4.3625C0.553795 4.48513 0.630375 4.59242 0.733615 4.66933L2.69473 6.211C2.70454 6.21872 2.71188 6.22915 2.71583 6.241C2.71978 6.25285 2.72017 6.26559 2.71695 6.27766L2.04195 8.66933C2.00697 8.79112 2.01036 8.92073 2.05165 9.04052C2.09295 9.16032 2.17014 9.26448 2.27274 9.33885C2.37533 9.41322 2.49835 9.45417 2.62505 9.45615C2.75174 9.45812 2.87597 9.42102 2.98084 9.34988L5.05306 7.961C5.06327 7.95395 5.07538 7.95017 5.08778 7.95017C5.10019 7.95017 5.1123 7.95395 5.1225 7.961L7.19473 9.34988C7.29817 9.42345 7.42196 9.46298 7.54889 9.46298C7.67583 9.46298 7.79961 9.42345 7.90306 9.34988C8.00568 9.27622 8.08295 9.17256 8.12424 9.05318C8.16553 8.93379 8.1688 8.80454 8.13362 8.68322L7.45306 6.28322C7.44945 6.27117 7.44965 6.2583 7.45363 6.24637C7.45761 6.23444 7.46517 6.22403 7.47528 6.21655L9.44473 4.661Z" fill="#514A7E" />
                                                </svg>
                                            </div>
                                            <div className="review__stars_item productMap__stars-item">
                                                <svg width="18" height="18" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.44473 4.661C9.54797 4.58409 9.62455 4.4768 9.66373 4.35417C9.70291 4.23154 9.70274 4.09972 9.66322 3.97719C9.62371 3.85467 9.54684 3.74759 9.44339 3.67095C9.33995 3.59432 9.21511 3.55199 9.08639 3.54988L6.58639 3.45544C6.5741 3.45459 6.56232 3.45021 6.55246 3.44281C6.5426 3.43542 6.53509 3.42534 6.53084 3.41377L5.66695 1.08044C5.62354 0.961729 5.54471 0.859223 5.44112 0.7868C5.33752 0.714378 5.21418 0.675537 5.08778 0.675537C4.96138 0.675537 4.83804 0.714378 4.73445 0.7868C4.63086 0.859223 4.55202 0.961729 4.50861 1.08044L3.6475 3.42211C3.64325 3.43367 3.63574 3.44376 3.62588 3.45115C3.61602 3.45854 3.60424 3.46293 3.59195 3.46377L1.09195 3.55822C0.963227 3.56032 0.838392 3.60266 0.734946 3.67929C0.6315 3.75592 0.554631 3.863 0.515117 3.98553C0.475603 4.10805 0.475426 4.23987 0.51461 4.3625C0.553795 4.48513 0.630375 4.59242 0.733615 4.66933L2.69473 6.211C2.70454 6.21872 2.71188 6.22915 2.71583 6.241C2.71978 6.25285 2.72017 6.26559 2.71695 6.27766L2.04195 8.66933C2.00697 8.79112 2.01036 8.92073 2.05165 9.04052C2.09295 9.16032 2.17014 9.26448 2.27274 9.33885C2.37533 9.41322 2.49835 9.45417 2.62505 9.45615C2.75174 9.45812 2.87597 9.42102 2.98084 9.34988L5.05306 7.961C5.06327 7.95395 5.07538 7.95017 5.08778 7.95017C5.10019 7.95017 5.1123 7.95395 5.1225 7.961L7.19473 9.34988C7.29817 9.42345 7.42196 9.46298 7.54889 9.46298C7.67583 9.46298 7.79961 9.42345 7.90306 9.34988C8.00568 9.27622 8.08295 9.17256 8.12424 9.05318C8.16553 8.93379 8.1688 8.80454 8.13362 8.68322L7.45306 6.28322C7.44945 6.27117 7.44965 6.2583 7.45363 6.24637C7.45761 6.23444 7.46517 6.22403 7.47528 6.21655L9.44473 4.661Z" fill="#514A7E" />
                                                </svg>
                                            </div>
                                            <div className="review__stars_item productMap__stars-item">
                                                <svg width="18" height="18" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.44473 4.661C9.54797 4.58409 9.62455 4.4768 9.66373 4.35417C9.70291 4.23154 9.70274 4.09972 9.66322 3.97719C9.62371 3.85467 9.54684 3.74759 9.44339 3.67095C9.33995 3.59432 9.21511 3.55199 9.08639 3.54988L6.58639 3.45544C6.5741 3.45459 6.56232 3.45021 6.55246 3.44281C6.5426 3.43542 6.53509 3.42534 6.53084 3.41377L5.66695 1.08044C5.62354 0.961729 5.54471 0.859223 5.44112 0.7868C5.33752 0.714378 5.21418 0.675537 5.08778 0.675537C4.96138 0.675537 4.83804 0.714378 4.73445 0.7868C4.63086 0.859223 4.55202 0.961729 4.50861 1.08044L3.6475 3.42211C3.64325 3.43367 3.63574 3.44376 3.62588 3.45115C3.61602 3.45854 3.60424 3.46293 3.59195 3.46377L1.09195 3.55822C0.963227 3.56032 0.838392 3.60266 0.734946 3.67929C0.6315 3.75592 0.554631 3.863 0.515117 3.98553C0.475603 4.10805 0.475426 4.23987 0.51461 4.3625C0.553795 4.48513 0.630375 4.59242 0.733615 4.66933L2.69473 6.211C2.70454 6.21872 2.71188 6.22915 2.71583 6.241C2.71978 6.25285 2.72017 6.26559 2.71695 6.27766L2.04195 8.66933C2.00697 8.79112 2.01036 8.92073 2.05165 9.04052C2.09295 9.16032 2.17014 9.26448 2.27274 9.33885C2.37533 9.41322 2.49835 9.45417 2.62505 9.45615C2.75174 9.45812 2.87597 9.42102 2.98084 9.34988L5.05306 7.961C5.06327 7.95395 5.07538 7.95017 5.08778 7.95017C5.10019 7.95017 5.1123 7.95395 5.1225 7.961L7.19473 9.34988C7.29817 9.42345 7.42196 9.46298 7.54889 9.46298C7.67583 9.46298 7.79961 9.42345 7.90306 9.34988C8.00568 9.27622 8.08295 9.17256 8.12424 9.05318C8.16553 8.93379 8.1688 8.80454 8.13362 8.68322L7.45306 6.28322C7.44945 6.27117 7.44965 6.2583 7.45363 6.24637C7.45761 6.23444 7.46517 6.22403 7.47528 6.21655L9.44473 4.661Z" fill="#514A7E" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="productMap__reviews">
                                            <div className="productMap__showReview">
                                                Смотреть все отзывы
                                            </div>

                                            <div className="productMap__addReview">
                                                Добавить отзыв
                                            </div>
                                        </div>

                                        <div className="productMap__descr">
                                            <div className="productMap__descrHeadText">
                                                Описание
                                            </div>

                                            <div className="productMap__descrText">
                                                {product.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </section>
            <AppReview />

            <section className="recomendedProduct mt150">
                <div className="container container_slide">
                    <h1 className="recomendedProduct-title">С этим товаром также покупают</h1>
                    <div className="catalog__slide">
                        <div className="catalog__blogs">
                            <Swiper
                                slidesPerView={4}
                                navigation={true}
                                spaceBetween={80}
                                modules={[Navigation]}
                            >
                                {
                                    recomendedProducts.map((recomendedProduct) => {
                                        return (
                                            <SwiperSlide key={recomendedProduct.product_id} >
                                                <div className="catalog__wrapper swiper-slide">
                                                    <div className="catalog__wrapper_img">
                                                        <img
                                                            src={recomendedProduct.main_image_url}
                                                            alt="catalog img"
                                                            width={300}
                                                            height="319"
                                                        />
                                                    </div>
                                                    <div className="catalog__info">
                                                        <div className="catalog__item">
                                                            {/* <div className="catalog__cost">
                                                                {recomendedProduct.variant_count}<span className="catalog__oldCost">{recomendedProduct.variant_count + 10}</span>
                                                            </div> */}

                                                            <div className="catalog__descr">
                                                                {recomendedProduct.data.title}
                                                            </div>
                                                            {/* <Link to={`/productMap/${recomendedProduct.product_id}`}> */}

                                                            <button className="catalog__btn" onClick={() => windowLocation(`/productMap/${recomendedProduct.product_id}`)}>
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
                                                            {/* </Link> */}
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
                                            </SwiperSlide>
                                        );
                                    })
                                }


                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default ProductMap;