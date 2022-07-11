import { useEffect, useState } from "react";
import axios from "axios";
import AppInputImg from "../app-inputImg/AppInputImg";

const _apiKey = "893820e241bb8001b92af0652b67f52a42725bc2";




const CatalogsApp = () => {
  const [inputImgSrc, setInputImgSrc] = useState(null);
  const [inputImgBase64, setInputImgBase64] = useState("");
  const [infoInputImg, setInfoInputImg] = useState([]);
  const [itemProducts, setItemProducts] = useState([]);
  const [sameProduct, setSameProduct] = useState([]);
  const [infoItemProducts, setInfoItemProducts] = useState([]);

  useEffect(() => {
    if (inputImgBase64) getDataBase64(inputImgBase64);

  }, [inputImgBase64]);

  useEffect(() => {
      if(infoInputImg.length > 0) {
          for(let i = 0; i < itemProducts.length; i++) {
            getDataUrl(itemProducts[i].image, itemProducts[i].id); 
          }
      }

          

  }, [infoInputImg]);


  useEffect(() => {
    getItemProducts();
  }, []);


  async function getDataUrl(imgSrc, productId) {
    let header = {
      "Content-Type": "application/json",
      "Authorization": "Token " + _apiKey
    };


    const dataString = `{
      "records":[
        {
          "_url": "${imgSrc}"
        }
      ]
    }`;


    const response = await fetch("https://api.ximilar.com/tagging/fashion/v2/tags", {
      method: "POST",
      headers: header,
      body: dataString
    });
    const metaData = await response.json();
    let products = [...metaData.records];
    
    products[productId] = {...products[productId] };
 
    const firstEl = products[0];
    const lastEl = products.length - 1;
    const newProducts =  {
      "id": lastEl, 
      "data": firstEl
    };
      setInfoItemProducts((infoItemProducts) => [...infoItemProducts, newProducts]);
  
  }

  async function getDataBase64(imgBase) {
    let header = {
      "Content-Type": "application/json",
      "Authorization": "Token " + _apiKey
    };


    const dataString = `{
      "records":[
        {
          "_base64": "${imgBase}"
        }
      ]
    }`;


    const response = await fetch("https://api.ximilar.com/tagging/fashion/v2/tags", {
      method: "POST",
      headers: header,
      body: dataString
    });
    const metaData = await response.json();

    setInfoInputImg(metaData.records);
  }

  const getItemProducts = () => {
    axios.get("http://localhost:5000/products")
      .then(res => {
        setItemProducts(res.data);

      });
  }

  const findSameColors = () => {
      
    if(infoInputImg.length !== 0 && infoItemProducts.length !== 0) {
      for(let i = 0; i < infoItemProducts.length; i++) {
        if(infoItemProducts[i].data._tags.Color) {
          if(infoItemProducts[i].data._tags.Color[0].name === infoInputImg[0]._tags.Color[0].name) {
            const  res = itemProducts.filter(product => product.id ===  infoItemProducts[i].id);
            // console.log(res);
            setSameProduct((sameProduct) => [...res, ...sameProduct]);
          }
        }
      }
    }   
  };


  const getImgSrc = (imgSrc) => {
    setInputImgSrc(imgSrc);
  }

  const getImgBase = (imgBase64) => {
    setInputImgBase64(imgBase64);  
  }

  return (
    <>
      <button><a href="/">Back to  main</a></button>
      <AppInputImg getImgSrc={getImgSrc} getImgBase={getImgBase} />
      <img src={inputImgSrc} alt="img" />

      <button onClick={findSameColors}>Find same clothes like yours</button>

      <div className="sameProduct">
          {
            sameProduct.map((taggingProduct, i) => {
              return(
                <img key={taggingProduct._id} src={taggingProduct.image} alt={taggingProduct.type} />
              );
            })
          }
      </div>


      <div className="listProduct">
        {
          itemProducts.map(product => {
          
              return(
                <img key={product._id} src={product.image} alt={product.type} />
              );
          })
        }
      </div>
    </>
  );
};

export default CatalogsApp;