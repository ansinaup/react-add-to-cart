// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';





// const Productview = () => {

// const{id}= useParams();
// const [product, setProduct]= useState([])
// const[loading, setLoading]=useState();


// useEffect(()=>{
   
//     const getProduct= async ()=>{

//         setLoading(true);
//         const response= await fetch(`https://fakestoreapi.com/products/${id}`);
//         setProduct(await response.json());
//         setLoading(false);

//     }
         
          
//     getProduct();
// },[input]);

// return (
//     <div>

//     </div>
//   )
// }




// export default Productview