import React, { useContext } from 'react'
import { AppContext } from '../App';

const Cart = () => {
  const {cart,handleOnAdd,handleOnRemove,removeClick}=useContext(AppContext);
  console.log(cart,"cart");
  const totalprice=cart.reduce((price,item)=>price+item.count*item.price,0);
  return (
<>
{cart.length >0 ?
<div className='cart1' >
  {
    cart?.map((item)=>{
      return(
        < >
        <div style={{width:"18rem",gap:"20px",height:"22rem",marginTop:"15px", position:"relative", marginBottom:"15px"}} className='background' >
        <img src={item.image} alt="" className='image' />
        <div className='div3'>
        <h2 className='title'>{item.title}</h2>
        <p className='price'>{item.price*item.count}</p>
         
         <div style={{position:"absolute", marginLeft:"7rem"}}>
         <button className='btn1' onClick={()=>handleOnAdd(item)}>+</button>
          {item.count}
        <button className='btn2'onClick={()=>handleOnRemove(item)}>-</button>
         </div>
        
       </div>

         <div className='removed' > 
          <button className='remove btn bg-black text-white mb-5' onClick={()=>removeClick(item)}>Remove</button>
        </div>

        </div>
         
        
        
        
        </>
      )
    })
  }
</div>:   <div style={{textAlign:"center", marginTop:"16rem", fontSize:"30px", fontFamily:"initial"}}> Cart is emty....   <i class="fa-solid fa-cart-shopping"></i></div>
} 

{cart.length>0 ?
<div style={{textAlign:"center",fontSize:"22px", fontWeight:"600", fontFamily:"sans-serif"}}>Total Amount
  <div>${totalprice}</div>
</div> :""
}
</>
  ) 
}

export default Cart


