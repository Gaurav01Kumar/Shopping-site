import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MainHeader from "../../components/header/mainHeader";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../Redux/action/ProductAction";
const ProductList = () => {
  const {category}=useParams();
  const [isLoading, setIsLoading] = useState(true);
  const product = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const getData =async () => {
   await fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=>dispatch(setProducts(json)))
  };
  const getAllProduct=()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>dispatch(setProducts(json)))

  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    // if(category && category!==""){
    //   getData();
    // }else if(category==""){
    //   getAllProduct()
    // }
    getAllProduct()
  },[category]);

  return (
    <>
      <div className="homeWrapper">
        <Header />
        <MainHeader />
        <div className="Product_List">
          {
            product?
            <div className="products">
            {isLoading ? (
              <div className="product_box">
                <SkeletonTheme color="#202020" highlightColor="#444">
                  <Skeleton height={399} duration={2} />
                </SkeletonTheme>
                <h1>Keep Waiting product is loading </h1>
              </div>
            ) : (
              
              product.slice(0,10) .map((val) => {
                return (
                  <div className="product_box">
                    <div className="img_box">
                      <Link to={`/productDetails/${val.id}`}>
                        <img src={val.image} width={200} height={250} />
                      </Link>
                    </div>
                    <div className="product_details">
                      <h4 style={{ fontSize: "15px" }}>
                        {val.title.toString(0, 10) + "...."}
                      </h4>
                      <p>
                        {val.price} <del>disc</del>
                      </p>
                    </div>
                    <div className="btns">
                      <button type="button"><i className="fa fa-eye"></i> View details</button>
                      <button type="button"><i className="fa fa-shopping-cart"></i> Add to cart</button>
                    </div>
                  </div>
                );
              }
              )
            )
          }

          </div>
          :
          ""

          }
         
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProductList;
