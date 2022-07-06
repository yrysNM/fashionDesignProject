import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { usePalette } from 'react-palette'

const CatalogsApp = () => {

    const [product, setProduct] = useState([]);
    const [imgSrc, setImgSrc] = useState("");


    useEffect(() => {
        axios.get("http://localhost:4000/product/62c18a8f9a2d167d02fc8a46")
            .then(res => setProduct(res.data)).catch((e) => console.log(e));
    }, []);

    const getInfoImg = (e) => {
        const file = e.target.files[0];
            
        setImgSrc( URL.createObjectURL(file));
     
    }

    
    
    const { data, loading, error } = usePalette(imgSrc)

    return (
        <section className="catalogs">
            <div className="container">
                <h1>Test Product</h1>
                <button>
                    <a href="/">back main</a>
                </button>

                <form>
                    <input onChange={(e) => getInfoImg(e)} type="file" name="image" />
                </form>

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
                    Text with the vibrant color
                </div>
            </div >
        </section >
    );
}

export default CatalogsApp;