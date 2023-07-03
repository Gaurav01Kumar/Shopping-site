import React,{useEffect, useState} from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

const MainHeader = () => {
  // const [data,setData]=useState({})
  // useEffect(()=>{
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '8750876a1emsh9fd03d92ec9c476p10c7b2jsn2e2337f5ed7a',
  //       'X-RapidAPI-Host': 'makeup.p.rapidapi.com'
  //     }
  //   };
    
  //   fetch('https://makeup.p.rapidapi.com/products.json?brand=colourpop&product_category=lipstick', options)
  //     .then(response => response.json())
  //     .then(response => setData(response)
  //        )
  //     .catch(err => console.error(err));
  // },[])
  
  return (
    <>
    {/* Main header clss  */}
      <div className="Main_header">
        {/* importing logo from Logo component  */}
       <Logo/>
       {/* importing search box from search box componet  */}
       <SearchBox/>
       {/* user profile and cart button  */}
        <div className="Btn_container">
             <div className="Btn">
                 <a href="#"><i className="fa fa-user"></i></a>
             </div>
             <div className="Btn">
                 <a href="/cart"><i className="fa fa-shopping-cart"></i></a>
             </div>
             
        </div>
      </div>
    </>
  );
};

export default MainHeader;
