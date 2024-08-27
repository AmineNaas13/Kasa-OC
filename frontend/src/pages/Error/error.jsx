import imageError from '../../assets/error404.png';
import { NavLink } from "react-router-dom";


import './error.css';

export function Error() {


    return (

        <div className='error'>
            <figure className='error-container'>
                <img src={imageError} alt="error404" />

                <p className="errorText">Oups! La page que vous demandez n existe pas.</p>
                <NavLink to="/" className="errorLinkHome">
                    Retourner sur la page d’accueil
                </NavLink>

            </figure>
        </div>

    )
}

export default Error