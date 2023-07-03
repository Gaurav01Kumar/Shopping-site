import React,{useState} from 'react'
import Categ from '../Banner/Categ';
import TopHeading from '../Banner/TopHeading'

const Heading = () => {
    const [toggel,setToggle]=useState(true);
  return (
    <>
     <div className="banner_main_wrapper">
         <div className="Category_section">
              <div className="category_box d-flex align-items-center justify-content-between">
                    <p>Categories</p>
                    <i className='fa fa-chevron-down' onClick={()=>setToggle(!toggel)}></i>
              </div>
             <div className={toggel?'categoryBox' : "small"}>
              <Categ value={"Dresses"}/>
              <Categ value={"shirt"}/>
              <Categ value={"Jeans"}/>
              <Categ value={"Sleepwear"}/>
              <Categ value={"sportwear"}/>
              <Categ value={"Shoes "}/>
              <Categ value={"Pants"}/>
              </div>
         </div>

         <div className="Banner_section">
            
         <TopHeading/>
         </div>
       </div>
    </>
  )
}

export default Heading