import {  Link } from "react-router-dom";

import promoImg1 from "../../../resources/img/promoImg1.png";
import promoImg2 from "../../../resources/img/promoImg2.png";

import "./appPromo.scss";

const AppPromo = () => {
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
            </section>

    );
}

export default AppPromo;