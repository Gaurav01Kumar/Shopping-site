import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Heading from "../../components/header/Heading";

const Contact = () => {
  return (
    <>
      <div className="homeWrapper">
       <Header/>
       <Heading/>
        <div className="Contact_wrapper">
        <div class="container-fluid bg-secondary mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center" style={{minHeight:"300px"}}>
            <h1 class="font-weight-semi-bold text-uppercase mb-3">Contact Us</h1>
            <div class="d-inline-flex">
                <p class="m-0"><a href="">Home</a></p>
                <p class="m-0 px-2">-</p>
                <p class="m-0">Contact</p>
            </div>
        </div>
        
    </div>

        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
