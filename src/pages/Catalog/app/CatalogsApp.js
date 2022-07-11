import { useEffect, useState } from "react";
import axios from "axios";
import AppInputImg from "../app-inputImg/AppInputImg";

const _apiKey = "a1422ff51fa403f9393fb41ec4cfbac33609b447";




const CatalogsApp = () => {
  const [inputImgSrc, setInputImgSrc] = useState(null);
  const [inputImgBase64, setInputImgBase64] = useState("");
  const [infoInputImg, setInfoInputImg] = useState([]);
  const [itemProducts, setItemProducts] = useState([]);
  const [sameProduct, setSameProduct] = useState([]);
  const [infoItemProducts, setInfoItemProducts] = useState([]);

  useEffect(() => {
    if (inputImgBase64) getDataBase64(inputImgBase64);

    if(infoInputImg.length !== 0) {
      
      itemProducts.map((product) => {
        
        getDataUrl(product.image, product.id);
        
     
      }); 
    }

  }, [inputImgBase64, itemProducts, infoInputImg.length]);


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
    console.log(products);
    // for(let i = 0; i < products.length; i++) {
    //   let newProducts = products[i];
    //   if(newProducts === null) {
    //     delete products[i];
    //   }
    // }
    const firstEl = products[0];
    const lastEl = products.length - 1;
    const newProducts =  {
      "id": lastEl, 
      "data": firstEl
    };
      setInfoItemProducts((infoItemProducts) => [...infoItemProducts, newProducts]);
    // console.log(metaData, infoInputImg._tags.Color.name );
    // if(infoInputImg._tags.Color.name === metaData._tags.Color.name) {
    //   console.log(metaData);
    // }

    // setInfoInputImg(metaData.records);
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

  const findSameColors = (metaData) => {
      
    // for(let j = 0; j < itemProducts.length; j++) {
      
      if(infoInputImg.length !== 0 && infoItemProducts.length !== 0) {
        for(let i = 0; i < infoItemProducts.length; i++) {
          if(infoItemProducts[i][0]._tags.Color) {
            if(infoItemProducts[i][0]._tags.Color[0].name === infoInputImg[0]._tags.Color[0].name) {
              console.log(itemProducts, infoItemProducts[i][0]._tags.Color[0].name);
            }
          }
        }
      }
    // }
    // infoItemProducts.map((product) => {

    // });
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

      <div className="listProduct">
        {
          itemProducts.map(product => {
            // if(infoInputImg.length !== 0) {
            //   getDataUrl(product.image);  //infinity loop
            // }
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