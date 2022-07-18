import { useState, useEffect } from "react";
import "./appMatching.scss";
const AppInputImg = ({ getImgSrc, getImgBase }) => {
  const [imgSrc, setImgSrc] = useState("");

  const getSrcImg = (e) => {
    const file = e.target.files[0];
    setImgSrc(URL.createObjectURL(file));

    const reader = new FileReader();
    reader.onloadend = function () {
      getImgBase(reader.result);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    getImgSrc(imgSrc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgSrc]);

  return (
    <>
      <form className="form form_matching">
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
      </form>
    </>
  );
};

export default AppInputImg;
