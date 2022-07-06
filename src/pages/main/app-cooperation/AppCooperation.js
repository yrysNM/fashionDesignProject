import iconList from "../../resources/icons/cooperationIcons/clarity_list-line.svg";
import coinBag from "../../resources/icons/cooperationIcons/coin-bag-line.svg";
import peopleIcon from "../../resources/icons/cooperationIcons/people.svg";
import settingIcon from "../../resources/icons/cooperationIcons/cog-line-settings.svg";
import "./appCooperation.scss";

const AppCooperation = () => {
    return (
        <section className="cooperation mt150">
            <div className="container">
                <div className="title">
                    <h2 className="title_text">Сотрудничество с нами</h2>
                </div>

                <div className="cooperation__descr">
                    Наша компания постоянно растёт и расширяет рынок, поэтому мы заинтересованы в новых партнёрах и рассматриваем новые проекты, которые могут быть привлекательны и интересны с коммерческой точки зрения.
                </div>


                <div className="cooperation__descr_blocks">
                    <div className="cooperation__descr_block">
                        <div className="cooperation__descr_block-title">
                            Становитесь партнёром
                        </div>
                        <div className="cooperation__descr_block-text">
                            Регистрируйтесь и <br />
                            переходите в свой кабинет
                        </div>
                    </div>
                    <div className="cooperation__descr_block">
                        <div className="cooperation__descr_block-title">
                            Рекламируйте
                            товары
                        </div>
                        <div className="cooperation__descr_block-text">
                            Рекламируйте наши товары    <br />
                            на форумах, сайтах, в социальных сетях
                        </div>
                    </div>
                    <div className="cooperation__descr_block">
                        <div className="cooperation__descr_block-title">
                            Приводите покупателей
                        </div>
                        <div className="cooperation__descr_block-text">
                            Приводите покупателей на   <br />
                            наш сайт по уникальной ссылке
                        </div>
                    </div>
                    <div className="cooperation__descr_block">
                        <div className="cooperation__descr_block-title">
                            Получайте
                            бонусы
                        </div>
                        <div className="cooperation__descr_block-text">
                            Копите бонусы от каждого <br /> оплаченного заказа
                        </div>
                    </div>
                </div>

                <div className="cooperation__subdescr">
                    <div className="cooperation__subdescr_title">
                        Это выгодно. Какие преимущества?
                    </div>

                    <div className="cooperation__subdescr_blocks">
                        <div className="cooperation__subdescr_block">
                            <div className="cooperation__subdescr_block-icon">
                                <img src={settingIcon} alt="settings icon" />
                            </div>
                            <div className="cooperation__subdescr_block-text">
                                Автоматизация процессов
                            </div>
                        </div>
                        <div className="cooperation__subdescr_block">
                            <div className="cooperation__subdescr_block-icon">
                                <img src={iconList} alt="list icon" />
                            </div>
                            <div className="cooperation__subdescr_block-text">
                                Пополнение ассортимента
                            </div>
                        </div>
                        <div className="cooperation__subdescr_block">
                            <div className="cooperation__subdescr_block-icon">
                                <img src={peopleIcon} alt="settings icon" />
                            </div>
                            <div className="cooperation__subdescr_block-text">
                                Поддержка и обучение
                            </div>
                        </div>
                        <div className="cooperation__subdescr_block">
                            <div className="cooperation__subdescr_block-icon">
                                <img src={coinBag} alt="settings icon" />
                            </div>
                            <div className="cooperation__subdescr_block-text">
                                Бонусы за новых клиентов
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppCooperation;