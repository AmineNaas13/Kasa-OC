import Logofooter from '../../assets/Logofooter.png';
import './footer.css';

export function Footer() {
    return (
        <footer className="footer">

            <img className="footer-img" src={Logofooter} alt="paysage" />
            <p className='footer-p'> © 2020 Kasa. All rights reserved </p>
        </footer>
    )
}

export default Footer;

