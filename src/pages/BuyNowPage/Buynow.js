import React,{useState} from 'react'
import Header from '../../components/header/Header'
import {Link} from "react-router-dom"
import Footer from '../../components/footer/Footer'
import Heading from "../../components/header/Heading"
const Buynow = () => {
  const [Quantity,setQuantity]=useState(1);
  return (
    <>
      <div className="homeWrapper">
        <Header/>
         <Heading />
        <div className="Cart_page">
          <div className="Cart_heading">
            <h1>Buy Now</h1>
            <h5>
            <Link to="/"  ><span>Home-</span></Link>Shopping Cart
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
                          <i className="fa fa-minus" onClick={()=>setQuantity(Quantity-1)}></i>
                        </button>
                        <input type="text" readOnly value={Quantity <=1 ?  1 : Quantity} />
                        <button type="button">
                          <i className="fa fa-plus" onClick={()=>setQuantity(Quantity+1)}></i>
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
                <Link to="/product/payment"><button type="button">Buy Now</button></Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Buynow