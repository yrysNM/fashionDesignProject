import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "../../pages/main/app/MainApp";
import Catalogs from "../../pages/Catalog/app/Catalogs";
import ProductMap from "../../pages/ProductMap/app/ProductMap";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="catalogs" element={<Catalogs />} />
        <Route path="productMap/:id" element={<ProductMap />} />
      </Routes>
    </Router>
  );
}

export default App;
