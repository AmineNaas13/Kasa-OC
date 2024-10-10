import Logo from '../../assets/Logo.png';
import './header.css';
import { NavLink } from "react-router-dom";



export function Header() {


    return (
        <header className="header">
            <div className='header-logo'>
                <img src={Logo} alt="logo kasa" />
            </div>

            <nav className='header-links'>
                {<NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>Accueil</NavLink>}
                {<NavLink to="/about" className={({ isActive }) => (isActive ? "underline" : "")}>A Propos</NavLink>}


            </nav>


        </header>
    )
}
export default Header;
