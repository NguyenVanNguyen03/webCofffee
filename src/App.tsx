import "./App.css";

import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import AboutPage from "./pages/About/AboutPage";
import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/Product/ProductPage";
import OptionServicePage from "./pages/Service/option_servicePage";
import SlideAboutPage from "./pages/SlideAbout/SlideAbout";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <OptionServicePage />
      <AboutPage />
      <ProductPage />
      <SlideAboutPage />
      <Footer />
    </>
  );
}

export default App;
