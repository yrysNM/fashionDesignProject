import { useToggleDescr } from "../../../hooks/toggleDescr.hook";
import Fade from "react-reveal/Fade";
import "./appOftenQuestions.scss";
import plusIcon from "../../../resources/icons/plus.svg";



const AppOftenQuestion = () => {



  const { toggleDescr, onMouseOutDescFucn, onMouseOverDescFucn } = useToggleDescr();
  const toggleDescr1 = useToggleDescr();
  const toggleDescr2 = useToggleDescr();
  const toggleDescr3 = useToggleDescr();
  const toggleDescr4 = useToggleDescr();
  const toggleDescr5 = useToggleDescr();
  const toggleDescr6 = useToggleDescr();



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
          <div className="oftenQuestions__list" onMouseOut={onMouseOutDescFucn} onMouseOver={onMouseOverDescFucn}>
            <div className="oftenQuestions__list_text">Как сделать заказ?</div>
            {/**close */}
            <div className={`oftenQuestions__list_plus alt ${toggleDescr ? 'oftenQuestions__list_plus-hoverBlock' : ''}`} >
              <img src={plusIcon} alt="plus icon" width="20" height="20" />
            </div>
            <Fade bottom when={toggleDescr}>
              <div className="oftenQuestions__list_descr" style={{ display: `${toggleDescr ? "block" : "none"}` }}>
                Чтобы сделать заказ пользователь переходит в каталог сайта,
                выбирает нужный товар, отпраляет его в коризину, выбрав нужный
                размер и цвет, и нажимает кнопку “заказать”. Выбирает способ
                оплаты и доставки и покупает товар.
              </div>
            </Fade>
          </div>
          <div className="oftenQuestions__list" onMouseOut={toggleDescr1.onMouseOutDescFucn} onMouseOver={toggleDescr1.onMouseOverDescFucn}>
            <div className="oftenQuestions__list_text">Способы оплаты</div>
            <div className={`oftenQuestions__list_plus alt ${toggleDescr1.toggleDescr ? 'oftenQuestions__list_plus-hoverBlock' : ''}`} >
              <img src={plusIcon} alt="plus icon" width="20" height="20" />
            </div>
            <Fade bottom when={toggleDescr1.toggleDescr}>
              <div className="oftenQuestions__list_descr" style={{ display: `${toggleDescr1.toggleDescr ? "block" : "none"}` }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, sunt porro! Voluptas, voluptates excepturi
                praesentium nisi nam eum harum, labore fugit sint, veniam libero
                earum illo enim at placeat commodi.
              </div>
            </Fade>
          </div>
          <div className="oftenQuestions__list" onMouseOut={toggleDescr2.onMouseOutDescFucn} onMouseOver={toggleDescr2.onMouseOverDescFucn}>
            <div className="oftenQuestions__list_text">Доставка</div>
            <div className={`oftenQuestions__list_plus alt ${toggleDescr2.toggleDescr ? 'oftenQuestions__list_plus-hoverBlock' : ''}`} >
              <img src={plusIcon} alt="plus icon" width="20" height="20" />
            </div>
            <Fade bottom when={toggleDescr2.toggleDescr}>
              <div className="oftenQuestions__list_descr" style={{ display: `${toggleDescr2.toggleDescr ? "block" : "none"}` }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, sunt porro! Voluptas, voluptates excepturi
                praesentium nisi nam eum harum, labore fugit sint, veniam libero
                earum illo enim at placeat commodi.
              </div>
            </Fade>
          </div>
          <div className="oftenQuestions__list" onMouseOut={toggleDescr3.onMouseOutDescFucn} onMouseOver={toggleDescr3.onMouseOverDescFucn}>
            <div className="oftenQuestions__list_text">Сроки доставки</div>
            <div className={`oftenQuestions__list_plus alt ${toggleDescr3.toggleDescr ? 'oftenQuestions__list_plus-hoverBlock' : ''}`} >
              <img src={plusIcon} alt="plus icon" width="20" height="20" />
            </div>
            <Fade bottom when={toggleDescr3.toggleDescr}>
              <div className="oftenQuestions__list_descr" style={{ display: `${toggleDescr3.toggleDescr ? "block" : "none"}` }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, sunt porro! Voluptas, voluptates excepturi
                praesentium nisi nam eum harum, labore fugit sint, veniam libero
                earum illo enim at placeat commodi.
              </div>
            </Fade>
          </div>
          <div className="oftenQuestions__list" onMouseOut={toggleDescr4.onMouseOutDescFucn} onMouseOver={toggleDescr4.onMouseOverDescFucn}>
            <div className="oftenQuestions__list_text">Как сделать обмен?</div>
            <div className={`oftenQuestions__list_plus alt ${toggleDescr4.toggleDescr ? 'oftenQuestions__list_plus-hoverBlock' : ''}`} >
              <img src={plusIcon} alt="plus icon" width="20" height="20" />
            </div>
            <Fade bottom when={toggleDescr4.toggleDescr}>
              <div className="oftenQuestions__list_descr" style={{ display: `${toggleDescr4.toggleDescr ? "block" : "none"}` }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, sunt porro! Voluptas, voluptates excepturi
                praesentium nisi nam eum harum, labore fugit sint, veniam libero
                earum illo enim at placeat commodi.
              </div>
            </Fade>
          </div>
          <div className="oftenQuestions__list" onMouseOut={toggleDescr5.onMouseOutDescFucn} onMouseOver={toggleDescr5.onMouseOverDescFucn}>
            <div className="oftenQuestions__list_text">
              Как сделать возврат ?
            </div>
            <div className={`oftenQuestions__list_plus alt ${toggleDescr5.toggleDescr ? 'oftenQuestions__list_plus-hoverBlock' : ''}`} >
              <img src={plusIcon} alt="plus icon" width="20" height="20" />
            </div>
            <Fade bottom when={toggleDescr5.toggleDescr}>
              <div className="oftenQuestions__list_descr" style={{ display: `${toggleDescr5.toggleDescr ? "block" : "none"}` }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, sunt porro! Voluptas, voluptates excepturi
                praesentium nisi nam eum harum, labore fugit sint, veniam libero
                earum illo enim at placeat commodi.
              </div>
            </Fade>
          </div>
          <div className="oftenQuestions__list" onMouseOut={toggleDescr6.onMouseOutDescFucn} onMouseOver={toggleDescr6.onMouseOverDescFucn}>
            <div className="oftenQuestions__list_text">
              Куда и когда вернутся деньги за возвращённый  товар?
            </div>
            <div className={`oftenQuestions__list_plus alt ${toggleDescr6.toggleDescr ? 'oftenQuestions__list_plus-hoverBlock' : ''}`} >
              <img src={plusIcon} alt="plus icon" width="20" height="20" />
            </div>
            <Fade bottom when={toggleDescr6.toggleDescr}>
              <div className="oftenQuestions__list_descr" style={{ display: `${toggleDescr6.toggleDescr ? "block" : "none"}` }}>
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
