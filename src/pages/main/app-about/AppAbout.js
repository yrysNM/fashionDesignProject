import Fade from "react-reveal/Fade";
import { useEffect, useState } from "react";

import "./appAbout.scss";

const AppAbout = () => {
  const [active, setActive] = useState(false);

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

  return (
    <section className="about mt150">
      <div className="container">
        <div className="title mt94">
          <h2 className="title_text">Почему выбирают нас?</h2>
        </div>

        <div className="about__descrBlocks">
          <div className="about__descrBlocks_descr">
            Скидки постоянным клиентам от 5%
            <span className="circle__descrSmall"></span>
          </div>

          <div className="about__descrBlocks_descr">
            Предлагаем самые выгодные цены
          </div>

          <div className="about__descrBlocks_descr">
            Наши покупатели всегда остаются довольны{" "}
            <span className="circle__descrMiddle posTopRight"></span>
          </div>
          <div className="about__descrBlocks_descr" style={{ margin: 0 }}>
            Ширикий ассортимент товаров для всей семьи
          </div>
          <div
            className="about__descrBlocks_descr"
            style={{ margin: 0, marginTop: 98 }}
          >
            Возможность доставки в любой город Беларуси{" "}
            <span className="circle__descrMiddle"></span>
          </div>
          <div
            className="about__descrBlocks_descr"
            style={{ margin: 0, marginTop: 98 }}
          >
            Пункты выдачи заказов рядом с домом{" "}
            <span className="circle__descrSmall posTopRight"></span>
          </div>
        </div>
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

        <div className="top left">
          <div className="about__topBtn">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2.5C9.18 2.5 2 8.78 2 16.5C2 24.22 9.18 30.5 18 30.5C19.6501 30.4981 21.2922 30.2693 22.88 29.82L28.41 33.34C28.561 33.4369 28.7352 33.4913 28.9145 33.4977C29.0937 33.5041 29.2714 33.4621 29.4289 33.3762C29.5863 33.2903 29.7178 33.1637 29.8095 33.0095C29.9012 32.8554 29.9497 32.6794 29.95 32.5V25.77C31.2012 24.5697 32.1997 23.1312 32.8867 21.5392C33.5736 19.9472 33.9352 18.2338 33.95 16.5C34 8.78 26.82 2.5 18 2.5ZM28.29 24.61C28.1895 24.7032 28.1092 24.8162 28.0541 24.9417C27.9991 25.0673 27.9704 25.2029 27.97 25.34V30.68L23.59 27.89C23.4678 27.8128 23.3304 27.7629 23.1871 27.744C23.0438 27.725 22.8981 27.7373 22.76 27.78C21.2187 28.2587 19.6139 28.5014 18 28.5C10.28 28.5 4 23.12 4 16.5C4 9.88 10.28 4.5 18 4.5C25.72 4.5 32 9.88 32 16.5C31.9772 18.0351 31.6356 19.5487 30.997 20.9448C30.3583 22.3408 29.4365 23.589 28.29 24.61Z"
                fill="#FFFDF5"
              />
              <path
                d="M25 15.5H11C10.7348 15.5 10.4804 15.6054 10.2929 15.7929C10.1054 15.9804 10 16.2348 10 16.5C10 16.7652 10.1054 17.0196 10.2929 17.2071C10.4804 17.3946 10.7348 17.5 11 17.5H25C25.2652 17.5 25.5196 17.3946 25.7071 17.2071C25.8946 17.0196 26 16.7652 26 16.5C26 16.2348 25.8946 15.9804 25.7071 15.7929C25.5196 15.6054 25.2652 15.5 25 15.5Z"
                fill="#FFFDF5"
              />
              <path
                d="M21.75 20.5H14.25C13.9848 20.5 13.7304 20.6054 13.5429 20.7929C13.3554 20.9804 13.25 21.2348 13.25 21.5C13.25 21.7652 13.3554 22.0196 13.5429 22.2071C13.7304 22.3946 13.9848 22.5 14.25 22.5H21.75C22.0152 22.5 22.2696 22.3946 22.4571 22.2071C22.6446 22.0196 22.75 21.7652 22.75 21.5C22.75 21.2348 22.6446 20.9804 22.4571 20.7929C22.2696 20.6054 22.0152 20.5 21.75 20.5Z"
                fill="#FFFDF5"
              />
              <path
                d="M11.2803 12.5H24.7203C24.9855 12.5 25.2398 12.3946 25.4274 12.2071C25.6149 12.0196 25.7203 11.7652 25.7203 11.5C25.7203 11.2348 25.6149 10.9804 25.4274 10.7929C25.2398 10.6054 24.9855 10.5 24.7203 10.5H11.2803C11.0151 10.5 10.7607 10.6054 10.5732 10.7929C10.3856 10.9804 10.2803 11.2348 10.2803 11.5C10.2803 11.7652 10.3856 12.0196 10.5732 12.2071C10.7607 12.3946 11.0151 12.5 11.2803 12.5Z"
                fill="#FFFDF5"
              />
            </svg>
          </div>
        </div>
      </Fade>

      <div className="rightCircle">
        <div className="rightCircle_circle w429"></div>
      </div>
    </section>
  );
};

export default AppAbout;
