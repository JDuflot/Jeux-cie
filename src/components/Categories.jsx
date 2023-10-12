import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='game-cat'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='game-cat-select'
			>
				<option value=''>Selectionner une catégorie ▼</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button className='game-cat-btn' onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories