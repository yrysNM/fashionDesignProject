import { Link } from "react-router-dom";
import useBreakpoint from "use-breakpoint";
import { UIBreakPoints } from "../AdaptiveMain /UIBreakPoints";
import promoImg1 from "../../../resources/img/promoImg1.png";
import promoImg2 from "../../../resources/img/promoImg2.png";
import "./appPromo.scss";


const AppPromo = () => {
    const { breakpoint, maxWidth, minWidth } = useBreakpoint(UIBreakPoints, "");
    return (

        <section className="promo">
            <div className="container">
                <div className="promo__wrapper">
                    <div className="promo__wrapper_welcome">
                        <img src={promoImg1} alt="promo img1" width="278px" height="242px" />

                        <div className="promo__wrapper_txtWel">

                            <h1 className="promo__wrapper_title">Добро пожаловать в <span>Cocteil</span></h1>

                            <div className="promo__wrapper_descr">
                                Экономим Ваше время! <br />
                                Предлагаем лучшие цены! <br />
                                Доставляем в кратчайшие сроки!
                            </div>
                        </div>
                    </div>

                    <div className="promo__wrapper_img2">
                        <img src={promoImg2} alt="promo img2" />

                    </div>
                </div>

                <Link to="/catalogs">
                    <div className="linkCatalog">
                        <div className="linkCatalog_text">
                            Каталог
                        </div>
                        <svg width="80" height="8" viewBox="0 0 80 8" fill="#514A7E" xmlns="http://www.w3.org/2000/svg">
                            <path d="M79.3536 4.35355C79.5488 4.15829 79.5488 3.84171 79.3536 3.64645L76.1716 0.464466C75.9763 0.269204 75.6597 0.269204 75.4645 0.464466C75.2692 0.659728 75.2692 0.976311 75.4645 1.17157L78.2929 4L75.4645 6.82843C75.2692 7.02369 75.2692 7.34027 75.4645 7.53553C75.6597 7.7308 75.9763 7.7308 76.1716 7.53553L79.3536 4.35355ZM0 4.5H79V3.5H0V4.5Z" fill="#514A7E" />
                        </svg>
                    </div>
                </Link>
            </div>

            { /** adaptive search panel */}
            {breakpoint === "phablet" || breakpoint === "mobile" ?
                <div className="promo-search">
                    <form className="promo-search_header">

                        <div className="promo-search_headerBlock">

                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_4171)">
                                    <path d="M9.77588 2.80539C10.9666 2.80429 12.1309 3.16014 13.1214 3.82792C14.112 4.49569 14.8843 5.4454 15.3408 6.55688C15.7972 7.66837 15.9172 8.8917 15.6855 10.0721C15.4539 11.2525 14.8811 12.337 14.0395 13.1883C13.1979 14.0396 12.1254 14.6196 10.9577 14.8548C9.78993 15.0899 8.5794 14.9698 7.47923 14.5095C6.37906 14.0493 5.43867 13.2695 4.77704 12.269C4.11541 11.2685 3.76225 10.0921 3.76225 8.88873C3.76947 7.27853 4.40519 5.73629 5.53125 4.59718C6.65731 3.45807 8.18269 2.81416 9.77588 2.80539ZM9.77588 1.6665C8.36254 1.6665 6.98093 2.09008 5.80578 2.88367C4.63063 3.67726 3.71471 4.80521 3.17384 6.1249C2.63298 7.44459 2.49146 8.89674 2.76719 10.2977C3.04292 11.6987 3.72351 12.9856 4.7229 13.9956C5.72229 15.0057 6.99558 15.6935 8.38177 15.9722C9.76796 16.2508 11.2048 16.1078 12.5105 15.5612C13.8163 15.0146 14.9324 14.0889 15.7176 12.9012C16.5028 11.7135 16.9219 10.3171 16.9219 8.88873C16.9219 6.97327 16.169 5.13627 14.8289 3.78184C13.4887 2.42741 11.6711 1.6665 9.77588 1.6665Z" fill="#7D7D7D" />
                                    <path d="M20.0398 18.4943L15.9886 14.3721L15.208 15.1554L19.2592 19.2776C19.3101 19.3294 19.3706 19.3706 19.4373 19.3988C19.5039 19.4269 19.5754 19.4416 19.6476 19.4418C19.7198 19.4421 19.7914 19.428 19.8582 19.4003C19.925 19.3726 19.9858 19.3318 20.0371 19.2804C20.0883 19.229 20.129 19.1678 20.1569 19.1005C20.1848 19.0331 20.1993 18.9609 20.1995 18.8879C20.1998 18.8149 20.1858 18.7426 20.1584 18.675C20.131 18.6075 20.0907 18.5461 20.0398 18.4943Z" fill="#7D7D7D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_4171">
                                        <rect x="0.799805" width="19.7889" height="20" rx="9.89446" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <input
                                type="search"
                                name="search"
                                className="promo-search_input"
                                placeholder="Поиск"
                            />
                        </div>
                    </form>
                </div>
                : null}
        </section>

    );
}

export default AppPromo;