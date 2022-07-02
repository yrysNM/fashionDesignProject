import { Component } from "react";
import AppHeader from "../app-header/AppHeader";
import AppPromo from "../app-promo/AppPromo";
import AppAbout from "../app-about/AppAbout";
import AppCatalogClothes from "../app-catalog-clothes/AppCatalogClothes";
import AppReview from "../app-review/AppReview";
import AppOftenQuestion from "../app-often-question/AppOftenQuestion";
import AppCooperation from "../app-cooperation/AppCooperation";
import AppFormDelivery from "../app-form-delivery/AppFormDelivery";
import AppFooter from "../app-footer/AppFooter";
class App extends Component {


    render() {
        return(
            <div className="app">
                <AppHeader />    

                <AppPromo />

                <AppAbout />

                <AppCatalogClothes /> 

                <AppReview />

                <AppOftenQuestion />

                <AppCooperation />

                <AppFormDelivery />

                <AppFooter />
            </div>
        );
    } 
}

export default App;
