import React from "react";
import Logo from "../header/Logo";

const Footer = () => {
  return (
    <>
      <div className="Footer_container" style={{ width: "100%" }}>
        <div className="container d-flex justify-content-around  ">
          <div
            className="footer_about Main_header flex-column align-items-start gap-2"
            style={{ width: "30%" }}
          >
            <Logo />
            <p className="text-dark">
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum
              no sit erat lorem et magna ipsum dolore amet erat
            </p>
            <div contact_details>
              <div className="details_container d-flex gap-4 ">
                <i className="fa fa-map-marker py-1 "></i>
                <p className="text-dark">123 Street, New York, USA</p>
              </div>
              <div className="details_container d-flex gap-4 ">
                <i className="fa fa-envelope py-1"></i>
                <p className="text-dark">gskd@gamil.com</p>
              </div>
              <div className="details_container d-flex gap-4 ">
                <i className="fa fa-phone py-1"></i>
                <p className="text-dark">+01n292929</p>
              </div>
            </div>
          </div>
          <div
            className="quciks_links_container mt-5"
            style={{ marginLeft: "30px" }}
          >
            <h4>Quicks Links</h4>
            <ul>
              <li className="py-1 fw-bold fz-3">
                <a href="/">
                  <i className="fa fa-chevron-right px-1"></i>Home
                </a>
              </li>

              <li className="py-1 fw-bold fz-3">
                <a href="#">
                  <i className="fa fa-chevron-right px-1"></i>Our Shop
                </a>
              </li>
              <li className="py-1 fw-bold fz-3">
                <a href="#">
                  <i className="fa fa-chevron-right px-1"></i>Shop Details
                </a>
              </li>
              <li className="py-1 fw-bold fz-3">
                <a href="#">
                  <i className="fa fa-chevron-right px-1"></i>Shopping Cart
                </a>
              </li>
              <li className="py-1 fw-bold fz-3">
                <a href="#">
                  <i className="fa fa-chevron-right px-1"></i>Checkout
                </a>
              </li>
              <li className="py-1 fw-bold fz-3">
                <a href="#">
                  <i className="fa fa-chevron-right px-1"></i>Contact us
                </a>
              </li>
            </ul>
          </div>
          <div
            className="terms_condition_container mt-5 "
            style={{ marginLeft: "30px" }}
          >
            <h4>Terms & Condition</h4>
            <ul>
              <li className="py-1 fw-bold fz-3">
                <a href="#">
                  <i className="fa fa-chevron-right px-1"></i>Terms & Condition
                </a>
              </li>
              <li className="py-1 fw-bold fz-3">
                <a href="#">
                  <i className="fa fa-chevron-right px-1"></i>Privacy Control
                </a>
              </li>
              <li className="py-1 fw-bold fz-3">
                <a href="#">
                  <i className="fa fa-chevron-right px-1"></i>Return Policy
                </a>
              </li>
            </ul>
          </div>
          <div
            className="footer_form mt-5"
            style={{ marginLeft: "50px", width: "25%" }}
          >
            <h1>NewsLetter</h1>
            <form>
  <div class="mb-3">
   
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>
    
  </div>
  <div class="mb-3">
   
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Your email"/>
  </div>
 
  <button type="submit" class="btn">Subscibe Now</button>
</form>
          </div>
        </div>
        <div className="copyWrite_container d-flex justify-content-around p-4 mt-5">
          <h6>
            <b>© Your Site Name.</b> All Rights Reserved. Designed by{" "}
            <b>HTML Codex</b>
          </h6>
          <img src="../img/payments.png" />
        </div>
      </div>
    </>
  );
};

export default Footer;
