import timeIcon from "../../../resources/icons/footerIcons/time.svg";
import phoneIcon from "../../../resources/icons/footerIcons/carbon_phone-voice.svg";
import telegram from "../../../resources/icons/socialIcons/telegram.svg";
import phone from "../../../resources/icons/socialIcons/phone.svg";
import instagram from "../../../resources/icons/socialIcons/instagram.svg";
import message from "../../../resources/icons/socialIcons/message.svg";
import logoImg from "../../../resources/img/logoImg.png";

import "./appFooter.scss";

const AppFooter = () => {
  return (
    <footer className="footer mt150">
      <div className="container">
        <div className="footer__info-row">
          <div className="footer__info-column">
            <div className="footer__info-block-column_heading">Информация</div>
            <div className="footer__info-block-column_link">
              <a href="#a">Главная</a>
            </div>
            <div className="footer__info-block-column_link">
              <a href="#a">Акции</a>
            </div>
            <div className="footer__info-block-column_link">
              <a href="#a">Каталог</a>
            </div>
            <div className="footer__info-block-column_link">
              <a href="#a">Доставка</a>
            </div>
            <div className="footer__info-block-column_link">
              <a href="#a">Партнёрам</a>
            </div>
            <div className="footer__info-block-column_link">
              <a href="#a">Способы оплаты</a>
            </div>
            <div className="footer__info-block-column_link">
              <a href="#a">Как сделать заказ?</a>
            </div>
          </div>
          <div className="footer__info-column">
            <div className="footer__info-block-column_heading">Мой кабинет</div>
            <div className="footer__info-block-column_link">
              <a href="#a">Мои заказы</a>
            </div>
            <div className="footer__info-block-column_link">
              <a href="#a">Мои адреса</a>
            </div>
            <div className="footer__info-block-column_link">
              <a href="#a">Мои скидки</a>
            </div>
            <div className="footer__info-block-column_link">
              <a href="#a">Моя информация</a>
            </div>
          </div>
          <div className="footer__info-column">
            <div className="footer__info-block-column_heading">
              Контактная информация
            </div>
            <div className="footer__info-block-column_descr">
              ИП Вишневский Иван Сергеевич государственная регистрация
              №690867884 <br /> от 31.07.2020. <br />
              Логойским горисполкомом <br />
              Защита прав потребителей +375259990755
            </div>
          </div>
          <div className="footer__info-column">
            <div className="footer__info-block-column_heading">Соц. сети</div>
            <div className="footer__info-block-column_socialIcon">
              <img src={telegram} alt="telegram icon" />
              <img src={instagram} alt="instagram icon" />
              <img src={message} alt="message icon" />
              <img src={phone} alt="phone icon" />
            </div>
            <div className="footer__info-block-column_info">
              <img src={phoneIcon} alt="phone call" />
              <a
                href="tel:375255990755"
                className="footer__info-block-column_info-link"
              >
                +375255990755
              </a>
            </div>
            <div className="footer__info-block-column_info">
              <img src={timeIcon} alt="phone call" />
              <span className="footer__info-block-column_info-text">
                круглосуточно, без выходных
              </span>
            </div>
          </div>
        </div>

        <div className="footer_logoImg">
          <img src={logoImg} alt="logo img" />
        </div>
      </div>
      <div className="rightCircle rightCircle-footer">
        <div className="rightCircle_bgCircle"></div>
        <div className="rightCircle_circle w380"></div>
      </div>
    </footer>
  );
};

export default AppFooter;
