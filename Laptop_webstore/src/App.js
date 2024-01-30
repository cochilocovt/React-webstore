import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const cart =  useSelector(state=> state.cart);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggedIn);

useEffect(()=> {
  fetch('https://shoppingcartbb-default-rtdb.firebaseio.com/cartitems.json', {
    method: 'PUT',
    body: JSON.stringify(cart),
  })
},[cart]);
  return (
    <div className="App">
      {!isLoggedIn &&<Auth/>}
     {isLoggedIn &&<Layout />} 
    </div>
  );
}

export default App;
