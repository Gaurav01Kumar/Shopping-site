import React from 'react'

const SearchBox = () => {
  return (
    <>
     <div className="Search_box_container">
            <div className="search_box">
            <input type="text" name="seach"  placeholder="Search"/>
            </div>
             <div className="searchIcon">
               <i className="fa fa-search"></i>
             </div>
        </div>
    </>
  )
}

export default SearchBox