import { useState, useEffect } from "react";
import Spinner from "../../../components/spinner/Spinner";
import ErrorMessage from "../../../components/errorMessage/ErrorMessage";
import useProductService from "../../../services/ProductService";
import AppHeader from "../app-header/AppHeader";
import AppPromo from "../app-promo/AppPromo";
import AppAbout from "../app-about/AppAbout";
import AppCatalogClothes from "../app-catalog-clothes/AppCatalogClothes";
import AppReview from "../app-review/AppReview";
import AppOftenQuestion from "../app-often-question/AppOftenQuestion";
import AppCooperation from "../app-cooperation/AppCooperation";
import AppFormDelivery from "../app-form-delivery/AppFormDelivery";
import AppFooter from "../app-footer/AppFooter";

const MainApp = () => {

    const { loading, error, getdiscountProducts } = useProductService();

    const [products, setProducts] = useState([]);


    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        getdiscountProducts().then(res => setProducts(res));

    }

    const renderItems = () => {
        return (
            <AppCatalogClothes products={products} />
        );
    };

    const items = renderItems();
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !products) ? items : null;


    return (

        <div className="app">
            <AppHeader />

            <AppPromo />

            <AppAbout />

            <>
                {errorMessage}
                {spinner}
                {content}
            </>

            <AppReview />

            <AppOftenQuestion />

            <AppCooperation />

            <AppFormDelivery />

            <AppFooter />


        </div>
    );

}
export default MainApp;
