import { useEffect, useState } from "react";
import axios from "axios";
import { usePalette } from 'react-palette'
import AppInputImg from "../app-inputImg/AppInputImg";

const CatalogsApp = () => {
    
    const [product, setProduct] = useState([]);
    const [imgSrc, setImgSrc] = useState("");
    const [dataImgUrl, setDataImgUrl] = useState("");

    
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

    
    
    const { data, loading, error } = usePalette(dataImgUrl);

    console.log(data);
    return (
        <section className="catalogs">
            <div className="container">
                <h1>Test Product</h1>
                <button>
                    <a href="/">back main</a>
                </button>

                <AppInputImg getImgSrc={getImgSrc} />

                <div className="blocktest">
                    {
                        product.map(item => {
                            // console.log(item.options[0].values);
                            return (
                                <div key={item.id} className="imgList">

                                    <img src={item.image} alt={item.type} />
                                    
                                    <img src={imgSrc} alt="inputImg" />
                                </div>       
                            );

                        })  
                    }
                </div>
                
                <div style={{ "color": data.vibrant, "fontSize": 50  }}>
                    Text with the data color
                </div>

              
            </div >
        </section >
    );
}

export default CatalogsApp;