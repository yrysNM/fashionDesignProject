import { useState, useEffect } from "react";
import axios from "axios";
import AppInputImg from "../app-inputImg/AppInputImg";

const _apikey = "MDkyMGIxOWYxNGFlMWE1ZjBhODM2MTE2OWU2YTQ3Y2M6YjAyMTFmOTBjN2EyZTM0NDc3MDExMTQ4NmM2NWJkMDg";

const AppMatching2 = ({ getItemCatalogProducts }) => {
    const [inputImgSrc, setInputImgSrc] = useState(null);
    const [inputImgBase64, setInputImgBase64] = useState("");
    const [itemProducts, setItemProducts] = useState([]);

    useEffect(() => {
        getItemProducts();
    }, []);

    useEffect(() => {
        if (inputImgBase64.length > 0) {
            getDataBase64(inputImgBase64);

        }
        getDataBase64(inputImgBase64);
    }, [inputImgBase64]);

    async function getDataBase64(imgBase) {
        console.log(imgBase);
        const encodedParams = new FormData();
        encodedParams.append('tag_group', 'fashion_attributes');
        encodedParams.append('limit', '10');
        encodedParams.append("url", "https://fast-hamlet-56846.herokuapp.com/file/1658444580940-any-name-catalogImg4.png");
        const options = {
            method: 'POST',
            url: 'https://virecognition.visenze.com/v1/image/recognize',
            headers: {
                Accept: 'application/json',
                // 'Content-Type': 'multipart/form-data',
                Authorization: "Basic " + _apikey,
            },
            data: encodedParams,
        };

        axios.request(options).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.error(error);
        });
        // const formData = new FormData();
        // formData.append("limit", 30);
        // formData.append("tag_group", "fashion_attributes");
        // formData.append("file", imgBase);

        // const options = {
        //     method: 'POST',
        //     headers: { Accept: 'application/json', Authorization: "Basic " + _apikey },
        //     body: formData,
        // };


        // fetch('https://virecognition.visenze.com/v1/image/recognize', options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));

        // const getImageLabels = async (imageURL, objectID, scoreLimit) => {
        //     const formData = new FormData();

        //     formData.append("limit", "30");
        //     formData.append("tag_group", "fashion_attributes");
        //     formData.append("url", imageURL);
        //     formData.append("file", imgBase);

        //     return await fetch("https://virecognition.visenze.com/v1/image/recognize", {
        //         method: "POST",
        //         headers: {
        //             Authorization: "Basic " + _apikey,
        //         },
        //         body: formData,
        //     })
        //         .then((res) => res.json())
        //         .then((res) => {
        //             if (res.status !== "OK" && res.error[0]) {
        //                 console.log("handle ViSenze - recognition error", res.error[0]);
        //                 return;
        //             }

        //             const classifiedImage = {
        //                 imageURL,
        //                 objectID,
        //                 objects: [],
        //             };

        //             // `res.result[0].objects` contains the objects detected in the image
        //             res.result[0].objects.forEach((object, index) => {
        //                 // Store coordinates of the current object
        //                 classifiedImage.objects[index] = {
        //                     x1: object.box[0],
        //                     y1: object.box[1],
        //                     x2: object.box[2],
        //                     y2: object.box[3],
        //                 };

        //                 // Format categories, attributes and scores
        //                 object.tags.forEach(({ tag, score }) => {
        //                     const splittedTag = tag.split(":");
        //                     score = parseFloat(score.toFixed(2));

        //                     if (score > scoreLimit) {
        //                         if (!(splittedTag[0] in classifiedImage.objects[index])) {
        //                             classifiedImage.objects[index][splittedTag[0]] = [];
        //                         }

        //                         classifiedImage.objects[index][splittedTag[0]].push({
        //                             label: splittedTag[1],
        //                             score,
        //                         });
        //                     }
        //                 });
        //             });

        //             return classifiedImage;
        //         }).catch((err) => console.log("Image classification error", err));
        // };

        // // console.log(imgBase);
        // const classifiedImage = getImageLabels(imgBase, "439784001", 0.5)

        // classifiedImage.then(res => console.log(res));
    }

    const getItemProducts = async () => {
        axios.get("https://fast-hamlet-56846.herokuapp.com/products").then((res) => {
            setItemProducts(res.data);
            getItemCatalogProducts(res.data);
        });
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
            {/* <button className="btn" onClick={findSameColors}>
                Соответствие одежды
            </button> */}
        </>
    );
}

export default AppMatching2;