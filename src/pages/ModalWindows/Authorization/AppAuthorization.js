import "./appAuthorization.scss";

const AppAuthorization = ({ singIn, signInModalHide }) => {

    return (

        <div className="overlayModal" style={{ "display": `${singIn ? "block" : "none"}` }}>
            <div className="modal">
                <div className="modal__close" onClick={signInModalHide}>&times;</div>
                <div className="modal__subtitle">Authorization</div>
                <form className="form">
                    <input name="userName" type="text" required placeholder="Ваше имя" />

                    <button className="btn">Authorization</button>
                </form>
            </div>
        </div>
    );
}

export default AppAuthorization;