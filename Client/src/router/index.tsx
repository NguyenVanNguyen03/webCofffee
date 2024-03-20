import { useEffect, ComponentType } from "react";
import HomePage from "../pages/Home/HomePage";
import ProductPage from "../pages/Product/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from "../layouts";
import screenUrl from "../contants/screenUrls";
import AboutPage from "../pages/About/AboutPage";
import OptionServicePage from "../pages/Service/option_servicePage";

interface PageWrapperProps {
  title: string;
  component: ComponentType;
  isHeader: boolean;
  isFooter: boolean;
}

const publicRouters = [
  {
    path: screenUrl.HOME,
    component: HomePage,
    title: "Home Page",
    isHeader: true,
    isFooter: true,
  },
  {
    path: screenUrl.PRODUCTS,
    component: ProductPage,
    title: "Product Page",
    isHeader: true,
    isFooter: true,
  },
  {
    path: screenUrl.ABOUT,
    component: AboutPage,
    title: "About Page",
    isHeader: true,
    isFooter: true,
  },
  {
    path: screenUrl.SERVICE,
    component: OptionServicePage,
    title: "Service Page",
    isHeader: true,
    isFooter: true,
  },
];

function WrapperComponent({
  title,
  component: Component,
  isHeader,
  isFooter,
}: PageWrapperProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      {isHeader && <Header />}
      <Component />
      {isFooter && <Footer />}
    </div>
  );
}

function NotFound() {
  return <div>Not Found 404</div>;
}

function AppRouter() {
  return (
    <Router>
      <Routes>
        {publicRouters.map((route, index) => {
          console.log(route);
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <WrapperComponent
                  title={route.title}
                  component={route.component}
                  isHeader={route.isHeader}
                  isFooter={route.isFooter}
                />
              }
            />
          );
        })}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export { AppRouter };
