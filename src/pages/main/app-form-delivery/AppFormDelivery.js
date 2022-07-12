import { useState, useEffect } from "react";
import axios from "axios";
import "./appFormDelivery.scss";

const AppFormDelivery = () => {
  const [inputData, setInputData] = useState([]);

  useEffect(() => {
    if (inputData.length > 0) {
      axios
        .post("http://localhost:5000/provider", {
          name: inputData[0].username,
          phone: inputData[0].phone,
          email: inputData[0].email,
          provider: inputData[0].provider,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log(e));
    }
  }, [inputData]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const getData = (e) => {
    e.preventDefault();
    const target = e.target;

    /**
     * @param {TODO-altarnative else not correct thing}
     */
    if (
      target.username.value !== " " &&
      validateEmail(target.email.value) &&
      target.agree.checked === true
    ) {
      setInputData((inputData) => {
        return [
          {
            username: target.username.value,
            phone: target.phone.value,
            email: target.email.value,
            provider: target.agree.checked,
          },
        ];
      });
    }
    // console.log(e.target.username);
    // if(e.target ===  )
  };

  return (
    <section className="formDelivery mt150">
      <div className="container">
        <div className="formDelivery_bgColor">
          <div className="formDelivery__bg"></div>
        </div>

        <div className="formDelivery_wrapper">
          <div className="formDelivery_wrapper-descr">
            Приглашаем к сотрудничеству производителей и поставщиков одежды,
            обуви и аксессуаров
          </div>

          <form className="form mt40" onSubmit={getData}>
            <div className="form-inputsLabels">
              <input
                required
                type="text"
                name="username"
                className="form-input"
                placeholder="Ваше имя"
                maxLength="5"
              />

              <input
                required
                type="tel"
                name="phone"
                className="form-input"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="Номер телефона"
              />

              <input
                required
                type="email"
                name="email"
                className="form-input"
                placeholder="Электронная почта"
              />

              <div className="form-inputlabel">
                <input
                  required
                  type="checkbox"
                  name="agree"
                  className="form-radio"
                  id="userAgree"
                  onClick={(e) => (e.checked = !e.checked)}
                />
                <label htmlFor="userAgree" className="form-label">
                  Даю согласие на обработку персональных данных
                </label>
              </div>
            </div>

            <button className="form-btn mt40">
              Отправить
              <svg
                width="26"
                height="5"
                viewBox="0 0 26 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.1768 2.83693C25.2744 2.7393 25.2744 2.58101 25.1768 2.48338L23.5858 0.892389C23.4882 0.794758 23.3299 0.794758 23.2322 0.892389C23.1346 0.99002 23.1346 1.14831 23.2322 1.24594L24.6464 2.66016L23.2322 4.07437C23.1346 4.172 23.1346 4.33029 23.2322 4.42792C23.3299 4.52555 23.4882 4.52555 23.5858 4.42792L25.1768 2.83693ZM0 2.91016H25V2.41016H0V2.91016Z"
                  fill="#FFFDF5"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppFormDelivery;
