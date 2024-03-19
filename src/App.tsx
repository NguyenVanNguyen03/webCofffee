import "./App.css";

// import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
// import Slide from "./pages/SlideAbout";
import OptionServicePage from "./pages/option_servicePage";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <OptionServicePage />
      <AboutPage />
      <ProductPage />
      {/* <Slide /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
