import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "../../pages/main/app/MainApp";
import Catalogs from "../../pages/Catalog/app/Catalogs";
import ProductMap from "../../pages/ProductMap/app/ProductMap";
import AppFilterWomensTShirt from "../../pages/FilterProductMap/appFilterWomensTShirt/AppFilterWomensTShirt";
import AppFilterWomens from "../../pages/FilterProductMap/appFilterWomens/AppFilterWomens";
import Bonus from "../../pages/Bonus/Bonus";
import SizeProducts from "../../pages/SizeProducts/SizeProducts";
import FavoritePage from "../../pages/favoritePage/FavoritePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="catalogs" element={<Catalogs />} />
        <Route path="productMap/:id" element={<ProductMap />} />
        <Route path="filter/womensTShirt" element={<AppFilterWomensTShirt />} />
        <Route path="filter/womens" element={<AppFilterWomens />} />
        <Route path="bonus" element={<Bonus />} />
        <Route path="sizeProducts" element={<SizeProducts />} />
        <Route path="favoriteProducts/" element={<FavoritePage />} />
      </Routes>
    </Router>
  );
}

export default App;
