import React from 'react'
// importing link from react router dom
import {Link} from "react-router-dom"
const TopHeading = () => {
  return (
    <>
    {/* nav link main wrapper  */}
      <div className="topHeading">
             <nav>
                 <ul>
                    <li>

                        
                        <Link to="#" style={{color:"#d19c97"}}>Home</Link>
                        <Link to="#">Shop</Link>
                        <Link to="#">Shop Details</Link>
                        <Link to="/productlist">All Product</Link>
                        <Link to="/contactus">Contact</Link>

                    </li>

                 </ul>
             </nav>
             <div className="auth_btn">
                  <Link to="/login"><button type="button">Login</button></Link>
                  <Link  to="/signUp"><button type="button">Sign up</button></Link>
             </div>
      </div>
    </>
  )
}

export default TopHeading