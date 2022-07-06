import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "../../pages/main/app/MainApp";
import Catalogs from "../../pages/Catalog/app/CatalogsApp.js";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainApp />} />
                <Route path="catalogs" element={<Catalogs />} />
            </Routes>
        </Router>
    );

}

export default App;