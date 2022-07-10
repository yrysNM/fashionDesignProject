import { useEffect, useState } from "react";
import AppInputImg from "../app-inputImg/AppInputImg";

const _apiKey = "d553d54e589a765dd4842ec7ab6691e9d41d0388";

async function getDataImg(imgSrc) {
  let header  = {
    "Content-Type": "application/json",
    "Authorization": "Token d553d54e589a765dd4842ec7ab6691e9d41d0388"
};


  const dataString = `{
    "records":[
      {
        "_base64": "${imgSrc}"
      }
    ]
  }`;

  console.log(imgSrc);

  const response = await fetch("https://api.ximilar.com/tagging/fashion/v2/tags", {
    method: "POST",
    headers: header,
    body: dataString
  });
  const metaData = await response.json();

  console.log(metaData);
}


const CatalogsApp = () => {
  const [inputImgSrc, setInputImgSrc] = useState(null);
  const [inputImgBase64, setInputImgBase64] = useState("");
  const [infoInputImgSrc, setInfoInputImgSrc] = useState([]);

  useEffect(() => {
    if(inputImgSrc)  getDataImg(inputImgBase64);
  }, [inputImgSrc]);

  const getImgSrc = (imgSrc) => {
    setInputImgSrc(imgSrc);
  }

  const getImgBase = (imgBase64) => {
    setInputImgBase64(imgBase64);
  }

  return (
    <>
      <AppInputImg getImgSrc={getImgSrc} getImgBase={getImgBase} />
      <img src={inputImgSrc} alt="img" />
    </>
  );
};

export default CatalogsApp;