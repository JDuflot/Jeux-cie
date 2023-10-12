import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import { useState, useEffect } from "react";


function App() {
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  return (
    <div>
     <Banner/>
     <Cart cart={cart} updateCart={updateCart} />
     <ShoppingList cart={cart} updateCart={updateCart}/>
     <Footer/>
    </div>
  );
}

export default App;
