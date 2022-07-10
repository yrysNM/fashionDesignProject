import { useState, useEffect } from "react";

const AppInputImg = ({ getImgSrc, getImgBase }) => {
    const [imgSrc, setImgSrc] = useState("");

    const getSrcImg =  (e) => {
        const file = e.target.files[0];
        setImgSrc(URL.createObjectURL(file));

        const reader = new FileReader();
        reader.onloadend = function () {
            getImgBase(reader.result);
        }
        reader.readAsDataURL(file);
    }


    useEffect(() => {
        getImgSrc(imgSrc);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imgSrc]);

    return (
        <>
            <form>
                <input onChange={(e) => getSrcImg(e)} type="file" name="image" />
            </form>
        </>
    );
}

export default AppInputImg;