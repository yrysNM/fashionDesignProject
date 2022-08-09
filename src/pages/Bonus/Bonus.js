import { Link } from "react-router-dom";
import AppHeader from "../main/app-header/AppHeader";
import heartIcon from "../../resources/icons/heart.svg";
import packageIcon from "../../resources/icons/package.svg";
import exitIcon from "../../resources/icons/catalogIcons/exit.svg";
import profileIcon from "../../resources/icons/catalogIcons/profile.svg";
import "./bonus.scss";


const Bonus = () => {
    return (
        <div className="pos">
            <AppHeader />
            <section className="bonus">
                <div className="container">
                    <div className="title mt94">
                        <h2 className="title_text">Бонусы</h2>
                    </div>

                    <div className="bonus__section">
                        <div className="catalog__section-filters">

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
                        <div className="bonus__info">
                            <div className="bonus__info-block">
                                <div className="bonus__number">
                                    0.00
                                </div>

                                <div className="bonus__descr">
                                    Бонусных баллов
                                </div>
                            </div>

                            <div className="bonus__info-block">
                                <div className="bonus__number">
                                    3%
                                </div>

                                <div className="bonus__descr">
                                    Бонусов от суммы покупок
                                </div>
                            </div>

                            <div className="bonus__info-block">
                                <div className="bonus__number">
                                    325, 00 р.
                                </div>

                                <div className="bonus__descr">
                                    Сумма покупок
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="rightCircle-bonus">
                <div className="rightCircle_bgCircle"></div>
                <div className="rightCircle_circle w380"></div>
            </div>
        </div>
    );
}

export default Bonus;