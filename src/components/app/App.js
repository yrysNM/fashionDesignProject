import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "../../pages/main/app/MainApp";
import Catalogs from "../../pages/Catalog/app/Catalogs";
import ProductMap from "../../pages/ProductMap/app/ProductMap";
import AppFilterWomensTShirt from "../../pages/FilterProductMap/appFilterWomensTShirt/AppFilterWomensTShirt";
import AppFilterWomens from "../../pages/FilterProductMap/appFilterWomens/AppFilterWomens";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="catalogs" element={<Catalogs />} />
        <Route path="productMap/:id" element={<ProductMap />} />
        <Route path="filter/womensTShirt" element={<AppFilterWomensTShirt />} />
        <Route path="filter/womens" element={<AppFilterWomens />} />
      </Routes>
    </Router>
  );
}

export default App;
