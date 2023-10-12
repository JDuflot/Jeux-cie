import '../styles/Cart.css';
import trash from '../assets/img/trash.png';

function Cart({ cart, updateCart }) {

	const total = cart.reduce(
		(acc, GameType) => acc + GameType.amount * GameType.price,
		0
	)
	const removeItem = (itemToRemove) => {
		const updatedCart = cart.filter((item) => item !== itemToRemove);
		updateCart(updatedCart);
	  };
	return  (
		<div className='cart'>
			{cart.length > 0 ? (
				<div className='cart-items'>
					<h2>Panier</h2>
					<ul className='cart-list'>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								• {name} {price}€ x {amount}
							<button className='btn-trash' onClick={() => removeItem(cart[index])}>
                  <img className='btn-trash-img'src={trash} alt="Supprimer" />
                </button>
							</div>
						))}
					</ul>
					<h3>Total : {total}€</h3>
					<button className='cart-btn' onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	)  }

export default Cart