import "./appFormDelivery.scss";
const AppFormDelivery = () => {
    return (
        <section className="formDelivery mt150">
            <div className="container">
                <div className="formDelivery_bgColor">
                    <div className="formDelivery__bg">

                    </div>
                </div>

                <div className="formDelivery_wrapper">
                    <div className="formDelivery_wrapper-descr">
                        Приглашаем  к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров
                    </div>

                    <form action="." className="form mt40">

                        <div className="form-inputsLabels">
                            <input type="text" name="name" className="form-input" placeholder="Ваше имя" />

                            <input type="number" name="number" className="form-input" placeholder="Номер телефона" />

                            <input type="email" name="email" className="form-input" placeholder="Электронная почта" />

                            <div className="form-inputlabel">
                                <input type="radio" name="agree" className="form-radio" id="userAgree" />
                                <label htmlFor="userAgree" className="form-label">Даю согласие на обработку персональных данных</label>
                            </div>
                        </div>

                        <button className="form-btn mt40">
                            Отправить
                            <svg width="26" height="5" viewBox="0 0 26 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.1768 2.83693C25.2744 2.7393 25.2744 2.58101 25.1768 2.48338L23.5858 0.892389C23.4882 0.794758 23.3299 0.794758 23.2322 0.892389C23.1346 0.99002 23.1346 1.14831 23.2322 1.24594L24.6464 2.66016L23.2322 4.07437C23.1346 4.172 23.1346 4.33029 23.2322 4.42792C23.3299 4.52555 23.4882 4.52555 23.5858 4.42792L25.1768 2.83693ZM0 2.91016H25V2.41016H0V2.91016Z" fill="#FFFDF5" />
                            </svg>
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
}

export default AppFormDelivery;