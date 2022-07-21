import { useState, useEffect } from "react";
import axios from "axios";

import "./appMatching.scss";

const AppInputImg = ({ getImgSrc, getImgBase }) => {
  const [imgSrc, setImgSrc] = useState("");
  const [imgFile, setImgFile] = useState({});
  const [urlImg, setUrlImg] = useState([]);

  const getSrcImg = (e) => {
    const file = e.target.files[0];
    setImgFile(file);
    // setUrlImg(file);
    setImgSrc(URL.createObjectURL(file));

    // const reader = new FileReader();
    // reader.onloadend = function () {
    //   // let imgBase = reader.result.slice(reader.result.indexOf(',') + 1);
    //   axios.get("http://localhost:5000/file/" + file.name).then(res => console.log(res));
    //   // getImgBase(file);
    // };
    // reader.readAsDataURL(file);
  };

  useEffect(() => {
    getImgSrc(imgSrc);

  }, [imgSrc]);


  const handleSubmit = async (e) => {
    // console.log(e.target[0])
    e.preventDefault();
    // getSrcImg(e);
    const formdata = new FormData()
    formdata.append("title", "user img");
    formdata.append("name", imgFile.name);
    formdata.append("type", imgFile.type);
    formdata.append("image", imgFile);
    // console.log(imgFile.name);
    await axios.post("https://fast-hamlet-56846.herokuapp.com/uploadImg", formdata,
      {
        header: { "Content-Type": "multipart/form-data" }
      }).then(res => setUrlImg(res.data));

    const fileName = urlImg.slice(urlImg.lastIndexOf("/"), urlImg.length);

    axios.get(`https://fast-hamlet-56846.herokuapp.com/file${fileName}`).then(res => console.log(res));
  }

  return (
    <>
      <form className="form form_matching" onSubmit={handleSubmit}>
        <label htmlFor="files" className="form-btn matchingBtn">
          Вебрать файл
        </label>
        <input

          onChange={(e) => getSrcImg(e)}
          id="files"
          style={{ visibility: "hidden" }}
          type="file"
          name="image"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AppInputImg;
