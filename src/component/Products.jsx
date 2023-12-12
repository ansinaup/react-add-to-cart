// import React ,{useState, useEffect} from "react"
// import { useContext } from "react"
// import {AppContext} from "react"

// const Products = () => {

//   const {addToCart}=useContext(AppContext);

// const [data,setData]=useState([])
// const[filter,setFilter]= useState(data)
// const[loading,setLoading] =useState(false)





// let componentMounted= true;

// useEffect(()=>{

    // const getProducts = async  () =>{
    //   setLoading(false);
    //   const response= await fetch("https://fakestoreapi.com/products");
    //   if(componentMounted){
    //     setData(await response.clone().json ());
    //     setFilter(await response.json());
    //     setLoading(false);
    //     console.log(filter);
    //   }

//       return()=>{
//         componentMounted= false;
//       }
//     } 
//     getProducts();


// }, []);


// const Loading=()=>{
//   return(
//     <>
  
// {/* <div className="col-md-3">
//   <Skeleton height={350}/>

// </div>
// <div className="col-md-3">
//   <Skeleton height={350}/>

// </div>
// <div className="col-md-3">
//   <Skeleton height={350}/>

// </div>
// <div className="col-md-3">
//   <Skeleton height={350}/>

// </div>
// <div className="col-md-3">
//   <Skeleton height={350}/>

// </div> */}





//     </>
//   );
// };

// const filterproduct=(cat)=>{
//   const updatedList=data.filter((x)=>x.category===cat);
//   console.log(cat,'cat');
//   setFilter(updatedList);
// }


// const ShowProducts =()=>{
//   return(
//     <>
//    <div className="buttons d-flex justify-content-center ">

//     <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
//     <button className="btn btn-outline-dark me-2" onClick={()=>filterproduct("men's clothing")}>Men's clothing</button>
//     <button className="btn btn-outline-dark me-2" onClick={()=>filterproduct("women's clothing")}>Womens's clothing</button>
//     <button className="btn btn-outline-dark me-2" onClick={()=>filterproduct("jewelery")}>Jewelleries</button>
//     <button className="btn btn-outline-dark me-2" onClick={()=>filterproduct("electronics")}>Electronics</button>

//    </div>

//    {filter.map((Product)=>{
//     return(
//       <>
// <div className="col-md-3 mb-4 mt-5">
//   <div className="card text-center h-100 py-4 " key={Product.id}>
//     <img src={Product.image} className="card-top " style={{height:"250px",width:"100%"}} alt={Product.title}  />
//     <div className="card-body">
      
//         <h5 className="card title mb-0 " >{Product.title.substring(0,12)}....  </h5>
//         <p className="card-text lead fw-bold">${Product.price} </p>
//    <a href="#" className="btn btn-outline-dark" onClick={() => addToCart(Product)}>Add to cart</a>

     

//     </div>

//   </div>

// </div>

//       </>
//     )
//    })}
//    </>

   

//   );
    
  
// };
//   return (
//     <div>
//       <div className="container my-5 py-5">
//         <div className="row ">
//           <div className="col-12 mb-5">
//             <h1 className="text-center display-6 fw-bolder">Latest Products</h1>
//             <hr/>
//           </div>
//         </div>
// <div className="row justify-content-center">
// {loading? <Loading/> :<ShowProducts/>}
// </div>

//       </div>
//       </div>
//   )
// }

// export default Products





import React, { useEffect, useState } from 'react'
import ProductCards from './Productcards';



const Products = () => {


    const [data,setData]=useState([]);
    const [filtr,setFiltr]=useState(data);

 const fetchData=async()=>{
try {
  const response=await  fetch("https://fakestoreapi.com/products")
  const convertedJson=await response.json();
console.log(convertedJson);
  setData(convertedJson);
} catch (error) {
  console.log("error",error);
}

 }

 useEffect(()=>{
   fetchData();

 },[])

   const filtrproduct=(cat)=>{
    const updatedList=data.filter((x)=>x.category===cat);
    console.log(cat,'cat');
    setFiltr(updatedList);
   }

  return (
   <>
  

   <div className="container my-5 py-5">
        <div className="row ">
          <div className="col-12 mb-5">
            <h1 className="text-center display-6 fw-bolder">Latest Products</h1>
            <hr/>
          </div>
        </div>
<div className="row justify-content-center">
 </div>
   
   <div className="buttons d-flex justify-content-center mt-3 mb-4">

<button className="btn btn-outline-dark me-2" onClick={()=>setFiltr(data)}>All</button>
<button className="btn btn-outline-dark me-2" onClick={()=>filtrproduct("men's clothing")}>Men's clothing</button>
<button className="btn btn-outline-dark me-2" onClick={()=>filtrproduct("women's clothing")}>Womens's clothing</button>
<button className="btn btn-outline-dark me-2" onClick={()=>filtrproduct("jewelery")}>Jewelleries</button>
<button className="btn btn-outline-dark me-2" onClick={()=>filtrproduct("electronics")}>Electronics</button>

</div>
   </div>
   <div className='flex-wrap d-flex gap-4 justify-content-center align-align-content-center '>
    {
        filtr.map((item)=>{
      return(
        <>
        <div>
        <ProductCards  product={item} />
        </div>
        </>
      )
        })
    }
   </div>
   </>
  )
}

export default Products