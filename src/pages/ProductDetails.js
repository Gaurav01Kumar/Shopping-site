import React, { useEffect, useState, CSSProperties } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/Header";
import MainHeader from "../components/header/mainHeader";
import { Link, useParams } from "react-router-dom";
import { ProductImage, selectProducts,addToCart } from "../Redux/action/ProductAction";
import axios from "axios";
import "./product.css";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  console.log(product);
  //  destructing the product
  const productImage = useSelector((state) => state.productImage);

  const { name, media, gender, info, price, variants } = product;
  console.log(variants);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    if (productId && productId !== "") {
      const options = {
        method: "GET",
        url: "https://asos2.p.rapidapi.com/products/v3/detail",
        params: {
          id: `${productId}`,
          lang: "en-US",
          store: "US",
          sizeSchema: "US",
          currency: "USD",
        },
        headers: {
          "X-RapidAPI-Key":
            "8750876a1emsh9fd03d92ec9c476p10c7b2jsn2e2337f5ed7a",
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          dispatch(selectProducts(response.data));
          dispatch(ProductImage(response.data.media.images));
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [productId]);

  let [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setTimeout(() => {
      setCurrentImage(productImage[0].url);
    }, 6000);
  }, [productId]);
  const [currentImage, setCurrentImage] = useState();
  // method for setProduct in cart 
  const AddToCart=()=>{
    dispatch(addToCart(product))
  }
  return (
    <>
      <div className="homeWrapper">
        <Header />

        <MainHeader />

        {loading ? (
          <div className="sweet-loading">
            <ClipLoader
              color={color}
              loading={loading}
              cssOverride={override}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <section id="Product_page">
            <div className="product_SectionContainer">
              <div className="left_Container">
                <div className="big_Image_wrapper">
                  <img src={"https:/" + currentImage} alt="" />
                </div>
                <div className="small_Images_wrapper">
                  {media.images.map((ele) => {
                    return (
                      <>
                        <div className="imgages">
                          <img
                            src={"https:/" + ele.url}
                            class="rounded mx-auto d-block"
                            alt="..."
                            onClick={() => setCurrentImage(ele.url)}
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>

              <div className="right_Container">
                <div className="product_Title_Container">
                  <h1>{name}</h1>
                </div>
                <div className="Product_priceWrapper">
                  <h2>
                    {price.current.text}{" "}
                    <span className="Original_price">
                      <del>&#8377; 699</del>
                    </span>
                  </h2>
                  <small>10% off</small>
                </div>

                <div className="product_Color_Wrapper">
                  <h3>
                    Color : <span>cname</span>
                  </h3>
                  <div className="Diff_color_product">
                    {media.images.map((ele) => {
                      return (
                        <>
                          <img src={"https:/" + ele.url} alt="helko" />
                        </>
                      );
                    })}
                  </div>
                </div>

                <div className="product_Size_wrapper">
                  <h3>Size </h3>
                  <div className="size_btn">
                    {variants.slice(0, 4).map((ele) => {
                      return <button>{ele.brandSize}</button>;
                    })}
                  </div>
                </div>

                <div className="check_pincode_wrapper">
                  <input type="number" placeholder="Enter Pincode" />
                  <button>CHECK PINCODE</button>
                </div>

                <div className="product_qty_wrapper">
                  <p>Quantity </p>
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>

                <div className="buy_and_Cart_Wrappper">
                  <div className="btn">
                    <Link to="/cart" ><button onClick={AddToCart}>Add to Cart </button></Link>
                    <Link to="/buynow"><button>Buy Now </button></Link>
                  </div>
                </div>
                <div className="product_Share_wrapper">
                  <h3>Spread the Love</h3>
                  <div className="Share_img">
                    {/* <img src="../images/social/fb.png" alt="" />
     <img src="../images/social/is.png" alt="" />
     <img src="../images/social/tw.png" alt="" />
     <img src="../images/social/whatsapp.png" alt="" />
     <img src="../images/social/pin.png" alt="" /> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="Product_Details_Wrapper">
              <div className="title_details">
                <h1>Product Details</h1>
              </div>
              {
                //<h4>INFO- Brave Warrior T-shirt. Stay Motivated Wearing Warrior T-shirt</h4>
              }
              <div className="fitWrapper">
                <h3>REGULAR FIT</h3>
                <ul>
                  <li>Fits just right- not too loose, not too tight</li>
                </ul>
              </div>
              <div className="brands">
                <h1>
                  Brand - <span>"Moulik</span>{" "}
                </h1>
                <div className="list_item">
                  <ul>
                    <li>SHORT SLEEVES</li>
                    <li>PRINTED</li>
                    <li>RIBBED KNIT COLLAR</li>
                    <li>COMPOSITION 100% Cotton</li>
                  </ul>
                </div>
              </div>
              <div className="produtc_care">
                <h2>CARE -</h2>
                <div className="listItem">
                  <ul>
                    <li>Do not iron on print </li>
                    <li>
                      <i class="fa-solid fa-washing-machine"></i>Machine wash
                      cold{" "}
                    </li>
                    <li>Do not bleach </li>
                    <li>Do not wring </li>
                  </ul>
                </div>
                <div className="product_size">
                  <div className="box_size">
                    <h4>Wight </h4>
                    <span> 0.221kg</span>
                  </div>
                  <div className="box_size">
                    <h4>Dimension </h4>
                    <span> 20 x 25 x 4</span>
                  </div>
                  <div className="box_size">
                    <h4>Color </h4>
                    <span> Black , white</span>
                  </div>
                  <div className="box_size">
                    <h4>Size </h4>
                    <span>M, L , XL , XXL</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
