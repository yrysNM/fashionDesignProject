import { Component } from "react";
import axios from "axios";
import AppHeader from "../app-header/AppHeader";
import AppPromo from "../app-promo/AppPromo";
import AppAbout from "../app-about/AppAbout";
import AppCatalogClothes from "../app-catalog-clothes/AppCatalogClothes";
import AppReview from "../app-review/AppReview";
import AppOftenQuestion from "../app-often-question/AppOftenQuestion";
import AppCooperation from "../app-cooperation/AppCooperation";
import AppFormDelivery from "../app-form-delivery/AppFormDelivery";
import AppFooter from "../app-footer/AppFooter";

class MainApp extends Component {

    state = {
        products: []
    };

    componentDidMount() {
        this.getProducts();
    }

    getProducts = () => {
        axios.get("http://localhost:4000/products")
            .then(res => this.setState(({ products: res.data })));
    }

    render() {

        return (

            <div className="app">
                <AppHeader />

                <AppPromo />

                <AppAbout />

                <AppCatalogClothes products={this.state.products} />

                <AppReview />

                <AppOftenQuestion />

                <AppCooperation />

                <AppFormDelivery />

                <AppFooter />


            </div>
        );
    }
}
export default MainApp;
