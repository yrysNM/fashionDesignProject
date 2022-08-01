import { useState } from "react";
import axios from "axios";

const AppRegistration = ({ isRegistration, hideRegistrationModal }) => {
    const [validateEmailState, setValidateEmailState] = useState(true);

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        address: "",
        phone: ""
    })
    const onSubmit = (data) => {
        const formData = new FormData();

        if (validateEmail(data.email)) {
            formData.append("username", data.username);
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("phone", data.phone);
            formData.append("addresses", data.address);

            fetch("http://localhost:5000/auth/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: formData
            }).then(res => console.log(res));
            setValidateEmailState(true);
        } else if (!validateEmail(data.email)) {
            setValidateEmailState(false);
        }
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateEmail(data.email)) {

            axios.post("http://localhost:5000/auth/registration", data).then(res => console.log(res));
            setValidateEmailState(true);
        } else if (!validateEmail(data.email)) {
            setValidateEmailState(false);
        }
        setData({});
    }


    return (

        <div className="overlayModal " style={{ "opacity": `${isRegistration ? "1" : "-1"}`, "zIndex": `${isRegistration ? "150" : "-1"}` }} onSubmit={(handleSubmit)}>
            <div className="modal w900" style={{ "top": `${isRegistration ? '50%' : "-50%"}` }} >
                <div className="modal__close" onClick={hideRegistrationModal}>&times;</div>
                <div className="modal__subtitle">Регистрация</div>
                <form className="form form-modal">
                    <div className="form-modal_registration">
                        <input name="username" type="text"
                            required placeholder="ФИО"
                            className="form-input" style={{ "marginTop": "25px" }}
                            value={data.username} onChange={handleChange} />
                        <input name="phone" type="phone"
                            required placeholder="Контактный телефон"
                            className="form-input" value={data.phone}
                            onChange={handleChange} />
                        <input name="email" type="email"
                            id="email" required
                            placeholder="Электронная почта" className="form-input"
                            value={data.email} onChange={handleChange} />

                        <label htmlFor="email" style={{ "display": `${validateEmailState ? 'none' : 'block'}` }}>Ввeдите корректую почту</label>

                        <input name="address" type="text"
                            required placeholder="Ваш полный адрес (только РБ)"
                            className="form-input" value={data.addresses}
                            onChange={handleChange} />
                        <input name="password" type="password"
                            required placeholder="Пароль" autoComplete="current-password webauthn"
                            className="form-input" value={data.password}
                            onChange={handleChange} />

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