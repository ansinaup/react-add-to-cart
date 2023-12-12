import React from 'react' 
import { useContext } from 'react'
import { AppContext } from '../App'


const ProductCards = (props) => {

  const {addToCart}= useContext(AppContext);

  const{image,title,price}=props.product
  return (
    <>
    <div className="card" style={{width:"18rem",gap:"18px",height:"26rem",marginTop:"15px"}}>
    <img src={image} style={{width:"180px",height:"180px", marginLeft:"50px", marginTop:"20px"}} alt="" />
    <div className="card-body">
      <h5 className="card-title" style={{fontSize:"14px",textAlign:"center"}}>{title}</h5>
      <p className="card-text" style={{fontSize:"20px",textAlign:"center"}}>{price}</p>
      <a href='#' className=" cart btn bg-black text-white mb-5  " style={{border:"1px solid"}} onClick={() => addToCart(props.product)}>Add to Cart</a>
    </div>
  </div>
  </>
  )
}

export default ProductCards