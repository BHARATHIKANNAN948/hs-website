import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home";
import ContactUs from "./Views/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import Services from "./Views/Services";
import CaseStudy from "./Views/CaseStudy";
import Products from "./Views/Products";
import Service_Detail from "./Views/Service-Details";
import CaseStudy_Details from "./Views/CaseDetails";
import AboutUs from "./Views/AboutUs";
import Our_Team from "./Views/OurTeam";
import PrivacyPolicy from "./Views/PrivacyPolicy";
import Term_Condition from "./Views/Terms&Condition";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Porfolio from "./Views/Porfoilo";
import Portfolio_Details from "./Views/Porfoilo/details";
import CategoryList_Portfolio from "./Views/Porfoilo/categoty-list";
import PageNotFound from "./components/404";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Product_Details_Component from "./components/Products/product_data/detail";
import Product_Details from "./Views/productDetails";

function App() {

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
  });

  const handleScroll = () => {
    AOS.refreshHard();
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Products />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/our-portfolio" element={<Porfolio />} />
          <Route path="/Service/Details" element={<Service_Detail />} />
          <Route path="/case/details/:id" element={<CaseStudy_Details />} />
          <Route path="/portfolio/Details/:id" element={<Portfolio_Details />} />
          <Route path="/product/details/:id" element={<Product_Details />} />
          <Route path="/portfolio/category/list" element={<CategoryList_Portfolio />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/ourteam" element={<Our_Team />} />
          <Route path="/Privacy/Policy" element={<PrivacyPolicy />} />
          <Route path="/Terms&Condition" element={<Term_Condition />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </div>
  );
}

export default App;
