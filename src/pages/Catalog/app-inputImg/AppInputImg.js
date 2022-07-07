import { useState } from "react";
import { usePalette } from "react-palette";

const AppInputImg = ({ getImgSrc }) => {
    const [imgSrc, setImgSrc] = useState("");

    const getSrcImg = (e) => {
        const file = e.target.files[0];

        setImgSrc(URL.createObjectURL(file));

    }

    getImgSrc(imgSrc);

    const { data, loading, error } = usePalette(imgSrc);

    console.log(data);

    return (
        <>
            <form>
                <input onChange={(e) => getSrcImg(e)} type="file" name="image" />
            </form>

            <div style={{ "color": data.vibrant, "fontSize": 50 }}>
                Test text for color input
            </div>
        </>
    );
}

export default AppInputImg;