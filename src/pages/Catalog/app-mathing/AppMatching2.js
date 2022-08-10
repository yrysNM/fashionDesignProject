import { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import Bottleneck from "bottleneck";
import ErrorMessage from "../../../components/errorMessage/ErrorMessage";
import Spinner from "../../../components/spinner/Spinner";
import useProductService from "../../../services/ProductCatalogService";
import AppInputImg from "../app-inputImg/AppInputImg";


const AppMatching2 = ({ getItemCatalogProducts, getOffSet, getValueErrorModal }) => {
    const [inputImgSrc, setInputImgSrc] = useState(null);
    const [inputImgBase64, setInputImgBase64] = useState("");
    const [itemProducts, setItemProducts] = useState([]);
    const [infoInputImg, setInfoInputImg] = useState({});
    const [infoCatalogImg, setInfoCatalogImg] = useState([]);
    const [taggingImgRes, setTaggingImgRes] = useState([]);
    const [offset, setOffset] = useState(0);

    const { loadingAxios, errorAxios, getItemProductsCatalog, getRecognize } = useProductService();

    useEffect(() => {
        setOffset(getOffSet() + 1);

        getItemProducts();

    }, [getOffSet()])

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


        const classCatalogFieldImg = await getRecognize(String(imgSrc), productId, 0.3);
        setInfoCatalogImg(infoCatalogImg => [...infoCatalogImg, ...classCatalogFieldImg]);
    }

    async function getDataBase64Input(imgBase) {

        const classifiedImage = await getRecognize(String(imgBase), "439784001", 0.3);

        if (classifiedImage) setInfoInputImg(classifiedImage[0].objects[0]);
    }


    const findSameColors = () => {

        if (Object.entries(infoInputImg).length !== 0 && infoCatalogImg.length !== 0) {
            for (let i = 0; i < infoCatalogImg.length; i++) {
                if (infoCatalogImg[i]) {
                    if (infoCatalogImg[i].objects[0] && infoCatalogImg[i].objects[0].product_color) {
                        if (infoCatalogImg[i].objects[0].product_color[0].label === infoInputImg.product_color[0].label) {
                            const output = itemProducts.filter((product) =>
                                product.id === infoCatalogImg[i].objectID
                            );
                            setTaggingImgRes((taggingImgRes) => Array.from(new Set([...output, ...taggingImgRes])));


                        }
                    }
                }
            }
        }
        else if (infoInputImg.length === 0) {
            getValueErrorModal(true, "Пожалуйста, нажмите кнопку загрузить изображение");
        } else {
            getValueErrorModal(true, "Ошибка повторите попытку через минуту");
        }

    }

    const getItemProducts = async () => {

        getItemProductsCatalog().then(res => {
            setItemProducts(itemProducts => [...itemProducts, ...res]);
            getItemCatalogProducts(res);
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
        setInfoCatalogImg(taggingImg);
        setInfoInputImg(taggingImg);
        setInputImgBase64(taggingImg);
        // setIsHaveTaggingImg(isHaveTaggingImg => [true, ...isHaveTaggingImg])
    }


    const renderItems = () => {
        return (
            <>
                {inputImgSrc ? (
                    <Fade top when={inputImgSrc}>
                        <img style={{ width: "100%" }} src={inputImgSrc} alt="img user" />

                        <div className="clotheCategory">
                            {(Object.entries(infoInputImg).length > 0) ?
                                <>
                                    <h3>
                                        {infoInputImg.full_body_garment ?
                                            <span>{infoInputImg.full_body_garment[0].label}: {infoInputImg.full_body_garment[0].score}%</span>
                                            : null
                                        }
                                    </h3>
                                    <h3>
                                        {infoInputImg.product_color[0].label}: {infoInputImg.product_color[0].score}%
                                    </h3>
                                </>
                                : null
                            }
                        </div>
                        <button className="btn" onClick={findSameColors}>
                            Соответствие одежды
                        </button>
                    </Fade>
                ) : null
                }
            </>

        );

    }

    const items = renderItems();
    const errorMessage = errorAxios ? <ErrorMessage width={{ width: "100%" }} /> : null;
    const spinner = loadingAxios ? <Spinner /> : null;
    const content = !(loadingAxios || errorAxios || !(itemProducts)) ? items : null;


    return (
        <>
            <AppInputImg getImgSrc={getImgSrc} newTaggingImg={newTaggingImg} getImgBase={getImgBase} />

            {errorMessage}
            {spinner}
            {content}

            {
                taggingImgRes.map(item => {


                    return (
                        <img key={item.id} style={{ width: "100%", marginTop: 20 }} src={item.image} alt={item.type_name} />
                    );

                })
            }

        </>
    );
}

export default AppMatching2;