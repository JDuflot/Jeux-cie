import { gameList } from '../datas/gameList';
import '../styles/ShoppingList.css';
import GameItem from './GameItem';
import Categories from './Categories';
import { useState } from 'react';

function ShoppingList({cart, updateCart}) {
	const [activeCategory, setActiveCategory] = useState('')

	const categories = gameList.reduce(
		(acc, game) =>
			acc.includes(game.category) ? acc : acc.concat(game.category),
		[]
	)

	function addToCart(name, price) {
		const currentGameSaved = cart.find((game) => game.name === name)
		if (currentGameSaved) {
			const cartFilteredCurrentGame = cart.filter(
				(game) => game.name !== name
			)
			updateCart([
				...cartFilteredCurrentGame,
				{ name, price, amount: currentGameSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}
	

	return (
		<div>
			<ul className='category'>
				<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
				/>
			</ul>
			
			<ul className='game-list'>
				{gameList.map(({gameId, name, image, thumbnail, minPlayers, maxPlayers, playingTime, price, category }) => 
				!activeCategory || activeCategory === category

				? (
					<div key={gameId}>
					<GameItem
					gameId={gameId}
					name={name}
					thumbnail={thumbnail}
					minPlayers={minPlayers}
					maxPlayers={maxPlayers}
					playingTime={playingTime}
					price={price}
					image={image}
					/>
					<button className='game-list-btn' onClick={() => addToCart(name, price)}>Ajouter au panier</button>
					</div>
				) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList