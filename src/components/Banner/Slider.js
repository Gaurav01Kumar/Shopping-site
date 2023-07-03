import React from "react";
// importing some package for slider
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  // creating a constant which can holds the url and caption of the image
  const fadeImages = [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Fashionable Dress",
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      caption: "Fashionable Dress",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Fashionable Dress",
    },
  ];
  return (
    <>
      {/* main div of slider  and this is a fade style slider */}
      <div className="slide-container"            >
        <Fade>
          {/* Mapping the fadeImages constant   */}
          {fadeImages.map((fadeImage, index) => (
            <div key={index} className="slider_div">
              <img
              
                src={fadeImage.url}
              />
              <div className="banner_section_des">
                  
                  <h3>{fadeImage.caption}</h3>
                     <button type="button">Shop</button>
              </div>
             
            </div>
          ))}
        </Fade>
      </div>
    </>
  );
};
// exporting the slider
export default Slider;
