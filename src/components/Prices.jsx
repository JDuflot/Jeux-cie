// import "../styles/Categories.css"

// function Prices({ setActivePrice, prices, activePrice }) {
// 	return (
// 		<div className='game-cat'>
// 			<select
// 				value={activePrice}
// 				onChange={(e) => setActivePrice(e.target.value)}
// 				className='game-cat-select'
// 			>
// 				<option value=''>-- Selectionner un prix --</option>
// 				{prices.map((pr) => (
// 					<option key={pr} value={pr}>
// 						{pr}
// 					</option>
// 				))}
// 			</select>
// 			<button className='game-cat-btn' onClick={() => setActivePrice('')}>Réinitialiser</button>
// 		</div>
// 	)
// }

// export default Prices

// function Prices({ setActivePrice, prices, activePrice, sortType, setSortType }) {
// 	return (
// 	  <div className='game-cat'>
// 		<select
// 		  value={activePrice}
// 		  onChange={(e) => setActivePrice(e.target.value)}
// 		  className='game-cat-select'
// 		>
// 		  <option value=''>-- Sélectionner un prix --</option>
// 		  {prices.map((pr) => (
// 			<option key={pr} value={pr}>
// 			  {pr}
// 			</option>
// 		  ))}
// 		</select>
// 		<button className='game-cat-btn' onClick={() => setActivePrice('')}>Réinitialiser</button>
  
// 		<div>
// 		  {/* <button onClick={() => setSortType('ascending')}>Trier par ordre croissant</button> */}
// 		  <button onClick={() => setSortType('byTens')}>Trier par dizaines</button>
// 		</div>
// 	  </div>
// 	)
//   }
  
//   export default Prices
  