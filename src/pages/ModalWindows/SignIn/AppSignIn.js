import { useState } from "react";
import AppRegistration from "../Registration/Registration";
const SignIn = ({ singIn, signInModalHide }) => {
    const [isRegistration, setIsRegistration] = useState(false);

    const showRegistrationModal = () => {
        setIsRegistration(true);
        signInModalHide();
    }

    const hideRegistrationModal = () => {
        setIsRegistration(false)
    }

    return (
        <>
            <div className="overlayModal w450" style={{ "opacity": `${singIn ? "1" : "0"}`, "zIndex": `${singIn ? "150" : "0"}` }}>
                <div className="modal w450" style={{ "top": `${singIn ? '50%' : "-50%"}` }}>
                    <div className="modal__close" onClick={signInModalHide}>&times;</div>
                    <div className="modal__subtitle">Вход в личный кабинет</div>
                    <form className="form form-modal">
                        <input type="text" name="userName" required placeholder="Электронная почта" className="form-input form-modal_input" />
                        <input type="password" name="password" required autoComplete="current-password webauthn" placeholder="Пароль" className="form-input form-modal_input" />
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