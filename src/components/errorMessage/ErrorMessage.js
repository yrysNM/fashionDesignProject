import imgError from "./error.gif";

const ErrorMessage = () => {
    return (
        <img src={imgError} alt="error img"
            style={{ display: "block", width: "250px", height: "250px", objectFit: "contain", margin: "0 auto", borderRadius: "100%" }} />
    );
}

export default ErrorMessage;