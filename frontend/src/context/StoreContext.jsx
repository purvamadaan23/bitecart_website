import { createContext, useEffect, useState } from "react";
import axios from "axios"


export const StoreContext = createContext(null);

const StoreContextProvider =(props)=>{

  const[cartItems , setCartItems] = useState({});
  const url = "https://bitecart-backend-8euq.onrender.com"
  const [token,setToken] = useState("");
  const [food_list,setFoodList] = useState([]);

  const fetchFoodList = async()=>{
    const response = await axios.get(url+"/api/food/list")
    setFoodList(response.data.data)
  }

  const loadCartData = async(token)=>{
    const response = await axios.post(url +"/api/cart/get",{},{headers:{token}})
    setCartItems(response.data.cartData);
  }

  useEffect(()=>{
    async function loadData(){
      await fetchFoodList();
      if(localStorage.getItem('token')){
        setToken(localStorage.getItem('token'))
        await loadCartData(localStorage.getItem("token"));
      }
    }loadData();
  },[])
  //Executes when the component first mounts

  const addToCart= async (itemId)=>{
    if(!cartItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

      if (token) {
        await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})   
      }
  }

  const removeFromCart=async(itemId)=>{
     setCartItems((prev)=>({
      ...prev,[itemId]:prev[itemId]-1
     }))
     if(token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
     }
  }


  const getTotalAmount = ()=>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = food_list.find((product)=>product._id===item);
        totalAmount+= itemInfo.price*cartItems[item];
      }
    }
    return totalAmount;
  }

  //The object that holds all the state and functions (food_list, cartItems, addToCart, removeFromCart, etc.) to be shared across components using the StoreContext.
  const contextValue = {
      food_list,
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart,
      getTotalAmount,
      url,
      token,
      setToken
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider


//This file defines a StoreContextProvider that manages the state of a food ordering app, including food items, cart data, and total amount calculation. It fetches data from a backend API, updates the cart locally and on the server, and shares this state across components using React's Context API.
