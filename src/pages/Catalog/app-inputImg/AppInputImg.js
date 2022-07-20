import { useState, useEffect } from "react";
import axios from "axios";
import "./appMatching.scss";

const AppInputImg = ({ getImgSrc, getImgBase }) => {
  const [imgSrc, setImgSrc] = useState("");
  const [imgFile, setImgFile] = useState({});

  const getSrcImg = (e) => {
    const file = e.target.files[0];
    setImgFile(file);

    setImgSrc(URL.createObjectURL(file));

    const reader = new FileReader();
    reader.onloadend = function () {
      // let imgBase = reader.result.slice(reader.result.indexOf(',') + 1);

      getImgBase(file);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    getImgSrc(imgSrc);

  }, [imgSrc]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData()

    formdata.append("title", "user img");
    formdata.append("name", imgFile.name);
    formdata.append("type", imgFile.tupe);
    formdata.append("image", imgFile);

    await axios.post("http://localhost:5000/catalogs", formdata,
      {
        header: { "Content-Type": "multipart/form-data" }
      })
      .then(res => console.log(res));
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
