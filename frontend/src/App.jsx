import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Category from "./Components/Category/Category";
import Category2 from "./Components/Category/Category2";
import Services from "./Components/Services/Services";
import Banner from "./Components/Banner/Banner";
import heaphone from "./assets/hero/headphone.png";
import Products from "./Components/Products/Products";
import Blogs from "./Components/Blogs/Blogs";
import Partners from "./Components/Partners/Partners";
import Footer from "./Components/Footer/Footer";
import Popup from "./Components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  data: "10 Jan to 28 Jan",
  image: heaphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nulla optio ",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Fine Smile",
  data: "10 Jan to 28 Jan",
  image: heaphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae nulla optio ",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  });

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner {...BannerData} />
      <Products />
      <Banner {...BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default App;
