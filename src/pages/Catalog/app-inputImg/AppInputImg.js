import { useState, useEffect } from "react";

const AppInputImg = ({ getImgSrc, getColorImgInput }) => {
    const [imgSrc, setImgSrc] = useState("");

    const getSrcImg = (e) => {
        const file = e.target.files[0];

        setImgSrc(URL.createObjectURL(file));

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