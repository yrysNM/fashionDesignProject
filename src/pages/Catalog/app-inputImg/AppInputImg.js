import { useState, useEffect } from "react";
import axios from "axios";

import "./appMatching.scss";

const AppInputImg = ({ getImgSrc, getImgBase, newTaggingImg, newSetInfoCatalogImg }) => {
  const [imgSrc, setImgSrc] = useState("");
  const [imgFile, setImgFile] = useState({});


  const getSrcImg = (e) => {
    const file = e.target.files[0];
    setImgFile(file);
    // setUrlImg(file);
    setImgSrc(URL.createObjectURL(file));

    newTaggingImg([]);

  };

  useEffect(() => {
    getImgSrc(imgSrc);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgSrc]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    /**
     * @param {upload img in backend}
     */
    const formdata = new FormData()
    formdata.append("title", "user img");
    formdata.append("name", imgFile.name);
    formdata.append("type", imgFile.type);
    formdata.append("image", imgFile);

    await axios.post("https://fast-hamlet-56846.herokuapp.com/uploadImg", formdata,
      {
        header: { "Content-Type": "multipart/form-data" }
      }).then(res => {

        const fileName = res.data.slice(res.data.lastIndexOf("/"), res.data.length);
        getImgBase(`https://fast-hamlet-56846.herokuapp.com/file${fileName}`);
      });


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
        <button className="form-btn matchingBtn" type="submit">Submit</button>
      </form>
    </>
  );
};

export default AppInputImg;
