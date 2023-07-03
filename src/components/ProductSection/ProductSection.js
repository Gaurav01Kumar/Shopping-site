import React from 'react'
import Product from '../Product/Product'

const ProductSection = ({heading}) => {
  return (
    <>
    {/* this is a product section page that work for multiple page  */}
           <div className="Product_section">
                   <div className='page_heading' >
                    {/* page heading that is comming from other component  */}
                    <span id='line'>,</span>
                        <h3 > {heading} </h3>
                        <span id='line'>,</span>
                   </div>
                   <Product/>
           </div>
    </>
  )
}

export default ProductSection