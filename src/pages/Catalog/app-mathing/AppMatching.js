import { useState, useEffect } from "react";
import axios from "axios";
import AppInputImg from "../app-inputImg/AppInputImg";

const _apiKey = "50ef4335531b7f161f09b41bf1f4d3a0d78d6950";

const AppMatching = ({ getItemCatalogProducts }) => {
  const [inputImgSrc, setInputImgSrc] = useState(null);
  const [inputImgBase64, setInputImgBase64] = useState("");
  const [infoInputImg, setInfoInputImg] = useState([]);
  const [itemProducts, setItemProducts] = useState([]);
  const [sameProduct, setSameProduct] = useState([]);
  const [infoItemProducts, setInfoItemProducts] = useState([]);

  useEffect(() => {
    if (inputImgBase64) getDataBase64(inputImgBase64);
    console.log(inputImgBase64);
  }, [inputImgBase64]);

  useEffect(() => {
    if (inputImgSrc > 0) {
      for (let i = 0; i < itemProducts.length; i++) {
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
      Authorization: "Token " + _apiKey,
    };

    const dataString = `{
        "records":[
          {
            "_url": "${imgSrc}"
          }
        ]
      }`;

    const response = await fetch(
      "https://api.ximilar.com/tagging/fashion/v2/tags",
      {
        method: "POST",
        // cache: "reload",
        headers: header,
        body: dataString,
      }
    );
    const metaData = await response.json();
    let products = [...metaData.records];

    products[productId] = { ...products[productId] };

    const firstEl = products[0];
    const lastEl = products.length - 1;
    const newProducts = {
      id: lastEl,
      data: firstEl,
    };
    setInfoItemProducts((infoItemProducts) => [
      ...infoItemProducts,
      newProducts,
    ]);
  }

  async function getDataBase64(imgBase) {
    let header = {
      "Content-Type": "application/json",
      Authorization: "Token " + _apiKey,
    };

    const dataString = `{
        "records":[
          {
            "_base64": "${imgBase}"
          }
        ]
      }`;

    const response = await fetch(
      "https://api.ximilar.com/tagging/fashion/v2/tags",
      {
        method: "POST",
        // cache: "reload",
        headers: header,
        body: dataString,
      }
    );
    const metaData = await response.json();

    setInfoInputImg(metaData.records);
  }

  const getItemProducts = async () => {
    axios.get("https://fast-hamlet-56846.herokuapp.com/products").then((res) => {
      setItemProducts(res.data);
      getItemCatalogProducts(res.data);
    });
  };

  const findSameColors = () => {
    if (infoInputImg.length !== 0 && infoItemProducts.length !== 0) {
      for (let i = 0; i < infoItemProducts.length; i++) {
        if (infoItemProducts[i].data._tags.Color) {
          if (
            infoItemProducts[i].data._tags.Color[0].name ===
            infoInputImg[0]._tags.Color[0].name
          ) {
            const res = itemProducts.filter(
              (product) => product.id === infoItemProducts[i].id
            );
            // console.log(res);
            setSameProduct((sameProduct) => [...res, ...sameProduct]);
          }
        }
      }
    }
  };

  const getImgBase = (imgBase64) => {
    setInputImgBase64(imgBase64);
  };

  const getImgSrc = (imgSrc) => {
    setInputImgSrc(imgSrc);
  };
  return (
    <>
      <AppInputImg getImgSrc={getImgSrc} getImgBase={getImgBase} />
      {inputImgSrc ? (
        <img style={{ width: "100%" }} src={inputImgSrc} alt="img user" />
      ) : null}
      <button className="btn" onClick={findSameColors}>
        Соответствие одежды
      </button>
    </>
  );
};

export default AppMatching;
