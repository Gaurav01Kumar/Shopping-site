import React from 'react'
import CatProductItem from './CatProductItem'
import CatData from './CatData'
const CategroryProduct = () => {
    
  return (
    <>
    <div className='categroy_section'>
        {/* Calling component and passing data which is commng from catData */}
    <CatProductItem data={CatData}/>
    </div>
    
    </>
  )
}

export default CategroryProduct