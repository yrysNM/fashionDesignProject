import { useEffect, useState } from "react";
import axios from "axios";
import { usePalette } from 'react-palette'
import AppInputImg from "../app-inputImg/AppInputImg";

const CatalogsApp = () => {

    const [product, setProduct] = useState([]);
    const [imgSrc, setImgSrc] = useState("");
    const [dataImgUrl, setDataImgUrl] = useState("");
    const [colorImgInput, setColorImgInput] = useState("");


    useEffect(() => {
        axios.get("http://localhost:4000/product/62c18a8f9a2d167d02fc8a4a")
            .then(res => {
                setProduct(res.data);
                res.data.map(item => {
                    return setDataImgUrl(item.image)
                })
            }).catch((e) => console.log(e));
    }, []);


    const getImgSrc = (imgSrc) => {
        setImgSrc(imgSrc);
    }

    const getColorImgInput = (color) => {
        setColorImgInput(color);
    }

    const { data} = usePalette(dataImgUrl);

    // console.log(data, loading, error);
    return (
        <section className="catalogs">
            <div className="container">
                <h1>Test Product</h1>
                <button>
                    <a href="/">back main</a>
                </button>

                <AppInputImg getImgSrc={getImgSrc} getColorImgInput={getColorImgInput} />

                <div className="blocktest">
                    {
                        product.map(item => {
                            // console.log(item.options[0].values);
                            return (
                                <div key={item.id} className="imgList">

                                    <img src={imgSrc} alt="inputImg" />
                                   
                                    <img src={item.image} alt={item.type} />

                                </div>
                            );

                        })
                    }
                </div>

                <div style={{ "color": data.vibrant, "fontSize": 50 }}>
                    Text with the data color
                </div>

                <div style={{ "color": colorImgInput, "fontSize": 50 }}>
                    Test text for color input
                </div>
            </div >
        </section >
    );
}

export default CatalogsApp;