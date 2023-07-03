import React from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MainHeader from "../../components/header/mainHeader";
import CategroryProduct from "../../components/ProductItem/CategroryProduct";
import ProductSection from "../../components/ProductSection/ProductSection";
import "../../components/Sass/Home.scss"
const Home = () => {
  return (
    <>
      <div className="homeWrapper">
        <Header />

        <MainHeader />
        {/* importing banner component */}
        <Banner />
        <div className="product_section">
          <div className="some_description">
            <h4 className="fz-3" ><i className="fa fa-check fz-4" style={{color:"#d19c97"}}></i> Quality Product</h4>
            <h4><i className="fa fa-truck fz-4" style={{color:"#d19c97"}}></i>Free Shipping</h4>
            <h4>14-days return</h4>
            <h4><i className="fa fa-phone fz-4" style={{color:"#d19c97"}}></i> 24/7 Support</h4>
          </div>
          <CategroryProduct/>
          <div className="Trenddy_Product">
             <ProductSection heading={"Trendy Products"}/>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
