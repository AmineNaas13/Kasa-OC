import Logo from '../../assets/Logo.png';
import './header.css';

export function Header() {

    return (
        <header className="header">
            <div className='header-logo'>
                <img src={Logo} alt="logo kasa" />
            </div>
            <nav className='header-links'>

                <div>Accueil</div>

                <div>A propos</div>

            </nav>


        </header>

    )

}
export default Header;