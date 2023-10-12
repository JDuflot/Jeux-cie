import '../styles/Banner.css';
import logo from '../assets/logo/logo.png';

function Banner() {
	const title = 'Jeux & cie'
	return (
		<div className="banner">
            <img src={logo} alt="logo" className='logo' />
			<h1 className='banner-title'>{title}</h1>
		</div>
	)
}

export default Banner