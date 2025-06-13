// import styles from "./App.module.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFoundPage from "./landing_page/NotFoundPage";

function App(){
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;