import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import MainApp from "../../pages/main/app/MainApp";
import Catalogs from "../../pages/Catalog/app/CatalogsApp.js";

class App extends Component {
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
        return(
            <Router>

                <Routes>
                <Route path="/" element={<MainApp products={this.state.products} />} />
                    <Route path="catalogs" element={<Catalogs />} />
                </Routes>
            </Router>
        );
    }
}

export default App;