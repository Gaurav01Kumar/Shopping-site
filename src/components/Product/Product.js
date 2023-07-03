import React, { useEffect ,useState} from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom";
import { setProducts ,addToCart} from "../../Redux/action/ProductAction";
const Product = () => {
  //isLoading useState is use to fading
  const [isLoading, setIsLoading] = useState(true);
  // products collects all the data from the api
  //const [Products, setProducts] = useState([]);
  const products=useSelector((state)=>state.allProducts.products)
  const dispatch=useDispatch();
  const cartItem=useSelector((state)=>state.cartProduct.products)
// using 

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8750876a1emsh9fd03d92ec9c476p10c7b2jsn2e2337f5ed7a",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    fetch(
      "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => dispatch(setProducts(response.products)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="products">
        {isLoading ? (
          <div className="product_box">
            <SkeletonTheme color="#202020" highlightColor="#444">
              <Skeleton height={399} duration={2} />
            </SkeletonTheme>
            <h1>Keep Waiting product is loading </h1>
          </div>
        ) : (
          products &&
          products.slice(0, 6).map((val) => {
            
            return (
              <div className="product_box">
                <div className="img_box">
                  <Link to={`/productDetails/${val.id}`}>
                  <img src={"https://" + val.imageUrl} />
                  </Link>
                </div>
                <div className="product_details">
                  <h4>{val.name.toString(0,10)+"...."}</h4>
                  <p>
                    {val.price.current.text} <del>disc</del>
                  </p>
                </div>
                <div className="btns">
                  <button type="button">View all</button>
                  <button type="button" onClick={()=>dispatch(addToCart(val))}>Add to cart</button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Product;
