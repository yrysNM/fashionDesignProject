

const AppRegistration = ({ isRegistration, hideRegistrationModal }) => {

    return (

        <div className="overlayModal " style={{ "opacity": `${isRegistration ? "1" : "0"}`, "zIndex": `${isRegistration ? "150" : "0"}` }}>
            <div className="modal w900" style={{ "top": `${isRegistration ? '50%' : "-50%"}` }} >
                <div className="modal__close" onClick={hideRegistrationModal}>&times;</div>
                <div className="modal__subtitle">Регистрация</div>
                <form className="form form-modal">
                    <div className="form-modal_registration">
                        <input name="userName" type="text" required placeholder="ФИО" className="form-input" style={{ "marginTop": "25px" }} />
                        <input name="phone" type="phone" required placeholder="Контактный телефон"
                            className="form-input" />
                        <input name="indexCity" type="number" required placeholder="Индекс" className="form-input" />
                        <input name="address" type="text" required placeholder="Ваш полный адрес (только РБ)" className="form-input" />
                        <input name="email" type="email" required placeholder="Электронная почта" className="form-input" />
                    </div>

                    <div className="form_btns">
                        <button className="form-btn mt60 modal-btn fz14">Отправить
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
                            </svg></button>
                        <button className="form-btn mt60 modal-btn fz14">Войти в кабинет</button>
                    </div>

                </form>
                <div className="rightCircle top255">
                    <div className="rightCircle_circle w429"></div>
                </div>
            </div>
        </div>
    );
}

export default AppRegistration;