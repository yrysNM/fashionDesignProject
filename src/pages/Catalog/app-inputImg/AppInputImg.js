import { useState, useEffect } from "react";
import axios from "axios";
import { Fade } from "react-reveal";
import "./appMatching.scss";

const AppInputImg = ({ getImgSrc, getImgBase, newTaggingImg }) => {
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
    const targetUrlImg = e.target.elements.urlImage.value;

    if (targetUrlImg) {
      getImgBase(targetUrlImg);
      getImgSrc(targetUrlImg);
    } else
      /**
       * @param {upload img in backend}
       */
      if (imgSrc) {
        getImgSrc(imgSrc);
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


  }


  return (
    <>
      <form className="form form_matching" onSubmit={handleSubmit}>
        <label htmlFor="files" className="form-btn matchingBtn">
          Вебрать файлx
        </label>

        <input

          onChange={(e) => getSrcImg(e)}
          id="files"
          style={{ visibility: "hidden" }}
          type="file"
          name="image"
        />
        <span className="required">
          <input type="url" id="urlImg" placeholder="Загрузить с URL-адреса" className="catalog-input form-input" name="urlImage" />
        </span>
        <Fade bottom when={imgSrc.length > 0}>

          <button className="form-btn matchingBtn" type="submit" style={{ display: `${imgSrc.length > 0 ? 'block' : "none"}` }}>Загрузить изображение</button>

        </Fade>

      </form>
    </>
  );
};

export default AppInputImg;
