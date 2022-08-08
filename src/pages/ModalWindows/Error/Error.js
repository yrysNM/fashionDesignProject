import { useState, useEffect } from "react";


const Error = ({ taggingError, messageError }) => {



    const [taggingErrorModal, setTaggingErrorModal] = useState(false);

    useEffect(() => {
        setTaggingErrorModal(taggingError)
    }, [taggingError])

    const hideErrorModal = () => {
        setTaggingErrorModal(false);
    }


    return (
        <div className="overlayModal w450" style={{ "opacity": `${taggingErrorModal ? "1" : "0"}`, "zIndex": `${taggingErrorModal ? "150" : "-1"}` }}>
            <div className="modal w450" style={{ "top": `${taggingErrorModal ? '50%' : "-50%"}` }}>
                <div className="modal__close" onClick={hideErrorModal}>&times;</div>
                <br />
                <br />
                <h1 className="modal__text">{messageError}</h1>

                <div className="rightCircle top255">
                    <div className="rightCircle_circle w429"></div>
                </div>
            </div>
        </div>
    );
}

export default Error;