import React, { createContext, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Products from './component/Products'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './component/Cart'
import Login from './component/Login'
import Register from './component/Register'
import ProductCards  from './component/Productcards'




export const AppContext=createContext()

function App() {

  const[cart,setCart]=useState([]);
  console.log(cart,"cartt");
  const[isAuthenticated, setIsAuthenticated]=useState(false);
  
  const addToCart=(data)=>{
   let result=cart.find((item)=>{
    if (item.id===data.id) {
      return true
    }
   })
   !result &&
   setCart([...cart,{...data, count: 1 }])
  }
  const handleOnAdd=(data)=>{
   console.log(data,'data');
  let result=cart.map((item)=>{
   if(item.id===data.id){
    item.count++;
    return item
   }
   else{
    return item
   }
  })
  setCart(result);
  }


  const handleOnRemove=(data)=>{
    console.log(data,"data");
    let result=cart.map((item)=>{
        if(item.id===data.id){
          item.count--;
          return item

        }
        else{
          return item
        }
    })

    setCart(result)
  }

  const removeClick=(item)=>{
  const updatedCart =cart.filter((cartItem)=>cartItem.id !==item.id)
  setCart(updatedCart);
  console.log(item,"item");
  }

  const contextValue = {
    addToCart,
    cart,
    handleOnAdd,
    handleOnRemove,
    removeClick,
    isAuthenticated,
    setIsAuthenticated
    
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
       
       <Navbar />
      <Home/>
      <Products/>

      </div>,
    },
    {
      path: "/cart",
      element: <div>
       
       <Navbar />
      <Cart/>

      </div>,
    },

    {
      path: "/login",
      element: <div>
       
       <Navbar />
       <Login/>

      </div>,
    },

    {
      path: "/register",
      element: <div>
       
       <Navbar />
       <Register/>

      </div>,
    },
   
  ]);

  
  

  return (
    <>

<AppContext.Provider value={contextValue}>

<RouterProvider router={router} />

    </AppContext.Provider>
      


    </>
  )
}

export default App
