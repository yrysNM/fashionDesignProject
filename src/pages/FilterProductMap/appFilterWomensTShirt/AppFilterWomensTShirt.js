import { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import AppMatching2 from "../../Catalog/app-mathing/AppMatching2";
import AppHeader from "../../main/app-header/AppHeader";
import ProductService from "../../../services/ProductService";
import heartIcon from "../../../resources/icons/heart.svg";
import packageIcon from "../../../resources/icons/package.svg";
import viewsIcon from "../../../resources/icons/catalogIcons/views.svg";
import exitIcon from "../../../resources/icons/catalogIcons/exit.svg";
import bonusIcon from "../../../resources/icons/catalogIcons/bonus.svg";
import profileIcon from "../../../resources/icons/catalogIcons/profile.svg";
import documentIcon from "../../../resources/icons/catalogIcons/document.svg";

const AppFilterWomensTShirt = () => {
    const [dataFilterProduct, setDataFilterProduct] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        getDataFilterWomensTShirt();
    }, [])

    const getDataFilterWomensTShirt = () => {
        productService.getFilteredProducts().then(res => setDataFilterProduct(dataFilterProduct => [res, ...dataFilterProduct]));
    }

    return (
        <>
            <AppHeader />
            <section className="filterProducts">
                <div className="container">
                    <div className="productMap_subtitle">


                        <div className="productMap_link catalog_link">
                            <Link to="/">
                                Главная/
                            </Link>
                            <Link to="/filter/womens">
                                Женщинам/
                            </Link>
                            <span className="catalog_nowPath">Блузки и рубашки для женщин</span>

                        </div>
                    </div>
                    <div className="title mt94">
                        <h2 className="title_text">Каталог</h2>
                    </div>

                </div>
            </section>
        </>
    );
}

export default AppFilterWomensTShirt;