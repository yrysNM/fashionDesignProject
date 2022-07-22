import { useState, useEffect } from "react";
import axios from "axios";
import Bottleneck from "bottleneck";
import AppInputImg from "../app-inputImg/AppInputImg";

const _apikey = "MDkyMGIxOWYxNGFlMWE1ZjBhODM2MTE2OWU2YTQ3Y2M6YjAyMTFmOTBjN2EyZTM0NDc3MDExMTQ4NmM2NWJkMDg";

const AppMatching2 = ({ getItemCatalogProducts }) => {
    const [inputImgSrc, setInputImgSrc] = useState(null);
    const [inputImgBase64, setInputImgBase64] = useState("");
    const [itemProducts, setItemProducts] = useState([]);
    const [infoInputImg, setInfoInputImg] = useState([]);
    const [infoCatalogImg, setInfoCatalogImg] = useState([]);
    const [taggingImgRes, setTaggingImgRes] = useState([]);

    useEffect(() => {
        getItemProducts();
    }, []);

    /**
     * @param {package for delay time request api} limiter
     */
    const limiter = new Bottleneck({
        maxConcurrent: 10,
        minTime: 1000
    });


    useEffect(() => {
        // getInitializeDataCatalogs();
        if (inputImgSrc) {

            for (let i = 0; i < itemProducts.length; i++) {

                limiter.schedule(getDataCatalogs, itemProducts[i].image, itemProducts[i].id);
                // getDataCatalogs(itemProducts[i].image, itemProducts[i].id);

            }
        }
    }, [inputImgSrc]);

    useEffect(() => {
        if (inputImgBase64.length > 0) {
            getDataBase64Input(inputImgBase64);
        }

    }, [inputImgBase64]);


    async function getDataCatalogs(imgSrc, productId) {
        const classCatalogFieldImg = await getImageLabels(imgSrc, productId, 0.3);
        setInfoCatalogImg(infoCatalogImg => [...infoCatalogImg, classCatalogFieldImg]);

    }

    async function getDataBase64Input(imgBase) {
        console.log(imgBase);
        const classifiedImage = await getImageLabels(String(imgBase), "439784001", 0.3)

        setInfoInputImg(classifiedImage.objects[0]);
    }


    const findSameColors = () => {

        if (infoInputImg.length !== 0 && infoCatalogImg.length !== 0) {
            for (let i = 0; i < infoCatalogImg.length; i++) {
                if (infoCatalogImg[i]) {
                    if (infoCatalogImg[i].objects[0] && infoCatalogImg[i].objects[0].product_color) {
                        if (infoCatalogImg[i].objects[0].product_color[0].label === infoInputImg.product_color[0].label) {
                            const output = itemProducts.filter((product) =>
                                product.id === infoCatalogImg[i].objectID
                            );
                            /**
                             * @BUG {solution use Set or ...}
                             */
                            setTaggingImgRes((taggingImgRes) => [...output, ...taggingImgRes]);

                        }
                    }
                }
            }
        } else {
            console.log("plase click submit");
        }
        // setTaggingImgRes([]);
    }

    /**
     * 
     * @param {url image} imageURL 
     * @param {some object id} objectID 
     * @param { random 1 0 for is the threshold for how certain the platform must be about an object to include it in the classifications.} scoreLimit 
     * @returns tagging info image
     */
    const getImageLabels = async (imageURL, objectID, scoreLimit) => {


        const formData = new FormData();

        formData.append("limit", "30");
        formData.append("tag_group", "fashion_attributes");
        formData.append("url", imageURL);

        return await fetch("https://virecognition.visenze.com/v1/image/recognize", {
            method: "POST",
            headers: {
                Authorization: "Basic " + _apikey,
            },
            body: formData,
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status !== "OK" && res.error[0]) {
                    console.log("handle ViSenze - recognition error", res.error[0]);
                    return;
                }

                const classifiedImage = {
                    imageURL,
                    objectID,
                    objects: [],
                };

                // `res.result[0].objects` contains the objects detected in the image
                res.result[0].objects.forEach((object, index) => {
                    // Store coordinates of the current object
                    classifiedImage.objects[index] = {
                        x1: object.box[0],
                        y1: object.box[1],
                        x2: object.box[2],
                        y2: object.box[3],
                    };

                    // Format categories, attributes and scores
                    object.tags.forEach(({ tag, score }) => {
                        const splittedTag = tag.split(":");
                        score = parseFloat(score.toFixed(2));

                        if (score > scoreLimit) {
                            if (!(splittedTag[0] in classifiedImage.objects[index])) {
                                classifiedImage.objects[index][splittedTag[0]] = [];
                            }

                            classifiedImage.objects[index][splittedTag[0]].push({
                                label: splittedTag[1],
                                score,
                            });
                        }
                    });
                });

                return classifiedImage;
            }).catch((err) => console.log("Image classification error", err));
    };

    const getItemProducts = async () => {
        await axios.get("https://fast-hamlet-56846.herokuapp.com/products").then((res) => {
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

    const newTaggingImg = (taggingImg) => {
        setTaggingImgRes(taggingImg);
    }


    return (
        <>
            <AppInputImg getImgSrc={getImgSrc} newTaggingImg={newTaggingImg} getImgBase={getImgBase} />
            {inputImgSrc ? (
                <img style={{ width: "100%" }} src={inputImgSrc} alt="img user" />
            ) : null}
            <button className="btn" onClick={findSameColors}>
                Соответствие одежды
            </button>
            {taggingImgRes.map(item => {
                return (

                    <img key={item.id} style={{ width: "100%" }} src={item.image} alt={item.type_name} />
                );
            })}
        </>
    );
}

export default AppMatching2;