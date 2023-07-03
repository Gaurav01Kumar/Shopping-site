import React from "react";

const Categ = ({ value }) => {
  return (
    <>
    {/* making a categroy container */}
      <div className="category_item">
        {/* value is props that is comming from other component */}
        <a href="#">{value}</a>
      </div>
    </> 
  );
};

export default Categ;
