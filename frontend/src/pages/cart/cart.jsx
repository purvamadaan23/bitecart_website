import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from './../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const{food_list , cartItems , removeFromCart, getTotalAmount,url} = useContext(StoreContext);

  const Navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br/>
          <hr/>
         {food_list.map((item,index)=>{
            if(cartItems[item._id]>0){
              return(<div>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt='//'/>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${cartItems[item._id]*item.price}</p>
                  <p onClick={()=>removeFromCart(item._id) } className='cross'>X</p>
                </div>
                <hr/>
              </div>
              )
            }
         })}
     </div>
     <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals :</h2>
          <div className="">
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr/>
            <div className ="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalAmount()===0?0:getTotalAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>Navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode, Enter it here</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='promo code'></input>
              <button>Submit</button>
            </div>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Cart


//Purpose: This file renders the cart page where users can see the items they've added, remove items, view the total price (with a delivery fee), and proceed to checkout. It also has an input for promo codes.
