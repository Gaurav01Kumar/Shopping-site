import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CatProductItem = ({ data }) => {
 
  return (
    <>
    <div className="itemBox">
      {data.map((val) => (
        <div className="product_box" key={val.id}>
          <p>{val.leftIte}</p>
          <Link to={`/productlist/${val.catdes.toLowerCase()}`}>
<img src={val.imagSrc} alt="" />
          </Link>
          
          <h3>{val.catdes}</h3>
        </div>
      ))}
      </div>
    </>
  );
};

export default CatProductItem;
