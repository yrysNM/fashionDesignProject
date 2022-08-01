import { useState } from "react";
import useAuth from "../../../hooks/auth.hooks";
import AppRegistration from "../Registration/Registration";

const SignIn = ({ singIn, signInModalHide }) => {
    const [isRegistration, setIsRegistration] = useState(false);
    const { data, error, handleChange, handleSubmit } = useAuth();

    const showRegistrationModal = () => {
        setIsRegistration(true);
        signInModalHide();
    }

    const hideRegistrationModal = () => {
        setIsRegistration(false)
    }

    return (
        <>
            <div className="overlayModal w450" style={{ "opacity": `${singIn ? "1" : "0"}`, "zIndex": `${singIn ? "150" : "-1"}` }}>
                <div className="modal w450" style={{ "top": `${singIn ? '50%' : "-50%"}` }}>
                    <div className="modal__close" onClick={signInModalHide}>&times;</div>
                    <div className="modal__subtitle">Вход в личный кабинет</div>
                    <form className="form form-modal" onSubmit={handleSubmit}>
                        <input type="text" name="username"
                            onChange={handleChange}
                            value={data.username}
                            required placeholder="ФИО"
                            className="form-input form-modal_input" />
                        <input type="password" name="password"
                            required autoComplete="current-password webauthn"
                            placeholder="Пароль" className="form-input form-modal_input"
                            onChange={handleChange}
                            value={data.password} />
                        <div className="form_btns">
                            <button className="form-btn mt60 modal-btn">Войти в кабинет</button>
                            <button className="form-btn mt60 modal-btn" onClick={showRegistrationModal}>Регистрация</button>
                        </div>
                    </form>
                    <div className="rightCircle top255">
                        <div className="rightCircle_circle w429"></div>
                    </div>
                </div>
            </div>

            <AppRegistration isRegistration={isRegistration} hideRegistrationModal={hideRegistrationModal} />
        </>
    );
}

export default SignIn;