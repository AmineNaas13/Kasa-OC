
import Logo from '../../assets/Logo.png';
import './header.css';


export function Header() {

    return (
        <header className="header">
            <div className='header-logo'>
                <img src={Logo} alt="logo kasa" />
            </div>
            <nav className='header-links'>
                <a href="/">Accueil</a>
                <a href="/about">A Propos</a>
            </nav>
        </header>
    )
}
export default Header;
