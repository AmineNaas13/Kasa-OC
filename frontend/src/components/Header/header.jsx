
import Logo from '../../assets/Logo.png';
import './header.css';
import { NavLink } from 'react-router-dom';

export function Header() {

    return (
        <header className="header">
            <div className='header-logo'>
                <img src={Logo} alt="logo kasa" />
            </div>
            <nav className='header-links'>


                <div>Accueil</div>
                <a href="/about">A Propos</a>

            </nav>

        </header>

    )

}
export default Header;
