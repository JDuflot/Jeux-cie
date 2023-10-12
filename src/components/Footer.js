import { useState } from 'react'
import '../styles/Footer.css'
import logo from '../assets/logo/logo.png'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='footer'>
			<div className='footer-elem'>
                <img className='logo-mini' src={logo} alt="mini-logo" />
				Pour les passionné·e·s de jeux de société 
                <img className='logo-mini' src={logo} alt="mini-logo" />
			</div>
			<div className='footer-elem'>Laissez-nous votre email : 
			<input className='footer-input'
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
			/>
            <button className='footer-btn' onClick={handleBlur}>Valider</button></div>
		</footer>
	)
}

export default Footer