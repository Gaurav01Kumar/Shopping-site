import React from 'react'


const Header = () => {
  return (
    <>
    {/* top heading class */}
     <div className='header_container'>
         <div className="left_header">
               <span>FASQ <span></span> |   </span>
               <span>Help <span></span> |</span>
                <span>  Support <span></span> | </span>
         </div>
         {/* social media links class  */}
        <div className="social_media_link_container">
          {/* using fontawseone icon for using social media icon  */}
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-youtube"></i>
            
         </div>
         
     </div>
    </>
  )
}

export default Header