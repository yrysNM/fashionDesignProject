import { useState, useEffect } from "react";
import { usePalette } from "react-palette";

const AppInputImg = ({ getImgSrc, getColorImgInput }) => {
    const [imgSrc, setImgSrc] = useState("");

    const getSrcImg = (e) => {
        const file = e.target.files[0];

        setImgSrc(URL.createObjectURL(file));

    }

    
    useEffect(() => {
        getImgSrc(imgSrc);
        
    }, [imgSrc]);

    const { data} = usePalette(imgSrc);

    useEffect(() => {
        getColorImgInput(data.vibrant);
    }, [data])

    return (
        <>
            <form>
                <input onChange={(e) => getSrcImg(e)} type="file" name="image" />
            </form>

         
        </>
    );
}

export default AppInputImg;