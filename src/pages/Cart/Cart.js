import React from "react";
import Header from "../../components/header/Header";
import MainHeader from "../../components/header/mainHeader";
import "../../components/Sass/Cart.scss";
import Footer from "../../components/footer/Footer"
import { useSelector } from "react-redux";
const Cart = () => {
  
  const cartItem=useSelector((state)=>state.cartProduct.carts)
  console.log(cartItem)
  return (
    <>
      <div className="homeWrapper">
        <Header />
        <MainHeader />
        <div className="Cart_page">
          <div className="Cart_heading">
            <h1>Shopping Cart</h1>
            <h5>
              <span>Home-</span>Shopping Cart
            </h5>
          </div>
          <div className="cart_product_box">
            <div className="cart_product_area">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="first">
                      <img
                        src="../img/product-1.jpg"
                        width={100}
                        height={100}
                      />
                      <h5>loremddj</h5>
                    </td>
                    <td>$99</td>
                    <td>
                      <div className="qBtns">
                        <button type="button">
                          <i className="fa fa-minus"></i>
                        </button>
                        <input type="text" readOnly value={1} />
                        <button type="button">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td>$55</td>
                    <td>
                      <button type="button">
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="first">
                      <img
                        src="../img/product-1.jpg"
                        width={100}
                        height={100}
                      />
                      <h5>loremddj</h5>
                    </td>
                    <td>$99</td>
                    <td>
                      <div className="qBtns">
                        <button type="button">
                          <i className="fa fa-minus"></i>
                        </button>
                        <input type="text" readOnly value={1} />
                        <button type="button">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td>$55</td>
                    <td>
                      <button type="button">
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="first">
                      <img
                        src="../img/product-1.jpg"
                        width={100}
                        height={100}
                      />
                      <h5>loremddj</h5>
                    </td>
                    <td>$99</td>
                    <td>
                      <div className="qBtns">
                        <button type="button">
                          <i className="fa fa-minus"></i>
                        </button>
                        <input type="text" readOnly value={1} />
                        <button type="button">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td>$55</td>
                    <td>
                      <button type="button">
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="first">
                      <img
                        src="../img/product-1.jpg"
                        width={100}
                        height={100}
                      />
                      <h5>loremddj</h5>
                    </td>
                    <td>$99</td>
                    <td>
                      <div className="qBtns">
                        <button type="button">
                          <i className="fa fa-minus"></i>
                        </button>
                        <input type="text" readOnly value={1} />
                        <button type="button">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td>$55</td>
                    <td>
                      <button type="button">
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="first">
                      <img
                        src="../img/product-1.jpg"
                        width={100}
                        height={100}
                      />
                      <h5>loremddj</h5>
                    </td>
                    <td>$99</td>
                    <td>
                      <div className="qBtns">
                        <button type="button">
                          <i className="fa fa-minus"></i>
                        </button>
                        <input type="text" readOnly value={1} />
                        <button type="button">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td>$55</td>
                    <td>
                      <button type="button">
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="first">
                      <img
                        src="../img/product-1.jpg"
                        width={100}
                        height={100}
                      />
                      <h5>loremddj</h5>
                    </td>
                    <td>$99</td>
                    <td>
                      <div className="qBtns">
                        <button type="button">
                          <i className="fa fa-minus"></i>
                        </button>
                        <input type="text" readOnly value={1} />
                        <button type="button">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td>$55</td>
                    <td>
                      <button type="button">
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="payment_area">
              <div className="coupon_container">
                <input type="text" placeholder="COUPON" />
                <button type="button">APPLY</button>
              </div>
              <div className="cart_summary_box">
                <h2>Cart Summary</h2>
                <div className="price_box">
                  <h5>Sub Total</h5>
                  <h5>$22</h5>
                </div>
                <div className="price_box">
                  <h5>Shipping</h5>
                  <h5>$22</h5>
                </div>
                <div className="price_box">
                  <b>Total</b>
                  <b>$22</b>
                </div>
                <button type="button">Proceed To Checkout</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart;
