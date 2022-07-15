import Fade from "react-reveal/Fade";
import "./appOftenQuestions.scss";
import plusIcon from "../../../resources/icons/plus.svg";

const AppOftenQuestion = () => {
  return (
    <section className="oftenQuestions mt150">
      <div className="container">
        <div className="title">
          <h2 className="title_text mt60">
            Часто задаваемые вопросы
            <span className="subtitle">FAQ</span>
          </h2>
        </div>
        <div className="oftenQuestions__wrap">
          <div className="oftenQuestions__list">
            <div className="oftenQuestions__list_text">Как сделать заказ?</div>
            {/**close */}
            <div className="oftenQuestions__list_plus alt">
              <img src={plusIcon} alt="plus icon" width="20" height="20" />
            </div>
            <Fade bottom>
              <div className="oftenQuestions__list_descr">
                Чтобы сделать заказ пользователь переходит в каталог сайта,
                выбирает нужный товар, отпраляет его в коризину, выбрав нужный
                размер и цвет, и нажимает кнопку “заказать”. Выбирает способ
                оплаты и доставки и покупает товар.
              </div>
            </Fade>
          </div>
          <div className="oftenQuestions__list">
            <div className="oftenQuestions__list_text">Способы оплаты</div>
            <div className="oftenQuestions__list_plus alt">
              <img src={plusIcon} alt="plus icon" width="20" height="20" />
            </div>
            <Fade bottom>
              <div className="oftenQuestions__list_descr">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, sunt porro! Voluptas, voluptates excepturi
                praesentium nisi nam eum harum, labore fugit sint, veniam libero
                earum illo enim at placeat commodi.
              </div>
            </Fade>
          </div>
          <div className="oftenQuestions__list">
            <div className="oftenQuestions__list_text">Доставка</div>
            <div className="oftenQuestions__list_plus alt">
              <img src={plusIcon} alt="plus icon" width="20" height="20" />
            </div>
            <Fade bottom>
              <div className="oftenQuestions__list_descr">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, sunt porro! Voluptas, voluptates excepturi
                praesentium nisi nam eum harum, labore fugit sint, veniam libero
                earum illo enim at placeat commodi.
              </div>
            </Fade>
          </div>
          <div className="oftenQuestions__list">
            <div className="oftenQuestions__list_text">Сроки доставки</div>
            <div className="oftenQuestions__list_plus alt">
              <img src={plusIcon} alt="plus icon" width="20" height="20" />
            </div>
            <Fade bottom>
              <div className="oftenQuestions__list_descr">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, sunt porro! Voluptas, voluptates excepturi
                praesentium nisi nam eum harum, labore fugit sint, veniam libero
                earum illo enim at placeat commodi.
              </div>
            </Fade>
          </div>
          <div className="oftenQuestions__list">
            <div className="oftenQuestions__list_text">Как сделать обмен?</div>
            <div className="oftenQuestions__list_plus alt">
              <img src={plusIcon} alt="plus icon" width="20" height="20" />
            </div>
            <Fade bottom>
              <div className="oftenQuestions__list_descr">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, sunt porro! Voluptas, voluptates excepturi
                praesentium nisi nam eum harum, labore fugit sint, veniam libero
                earum illo enim at placeat commodi.
              </div>
            </Fade>
          </div>
          <div className="oftenQuestions__list">
            <div className="oftenQuestions__list_text">
              Как сделать возврат?
            </div>
            <div className="oftenQuestions__list_plus alt">
              <img src={plusIcon} alt="plus icon" width="20" height="20" />
            </div>
            <Fade bottom>
              <div className="oftenQuestions__list_descr">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, sunt porro! Voluptas, voluptates excepturi
                praesentium nisi nam eum harum, labore fugit sint, veniam libero
                earum illo enim at placeat commodi.
              </div>
            </Fade>
          </div>
          <div className="oftenQuestions__list">
            <div className="oftenQuestions__list_text">
              Куда и когда вернутся деньги за возвращённый товар?
            </div>
            <div className="oftenQuestions__list_plus alt">
              <img src={plusIcon} alt="plus icon" width="20" height="20" />
            </div>
            <Fade bottom>
              <div className="oftenQuestions__list_descr">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, sunt porro! Voluptas, voluptates excepturi
                praesentium nisi nam eum harum, labore fugit sint, veniam libero
                earum illo enim at placeat commodi.
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="rightCircle">
        <div className="rightCircle_circle w380"></div>
      </div>
    </section>
  );
};

export default AppOftenQuestion;
