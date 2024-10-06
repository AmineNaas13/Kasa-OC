import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './apartment.css';
import Collapse from "../../components/Collapse/collapse";
import Carousel from '../../components/Carrousel/carousel';

export function Apartment() {

    const { id } = useParams(); // Récupère l'ID de l'URL
    const [apartment, setApartment] = useState(null);
    const navigate = useNavigate(); // Pour rediriger vers la page 404 en cas d'erreur

    useEffect(() => {
        const fetchApartment = async () => {
            const response = await fetch(`http://localhost:8080/api/properties/${id}`);
            if (response.status === 404) {
                navigate('/404');
            }
            const responseJson = await response.json();
            setApartment(responseJson);
        };
        fetchApartment();
    }, [id]);

    if (!apartment) {
        return <p>Chargement en cours ...</p>
    }

    return (

        <div className='apartment-container'>
            <div className='apartment-image'>
                <Carousel images={apartment.pictures} />
            </div>
            <div className='apartment-header'>

                <div className='apartment-title'>
                    <h1 className='title'>{apartment.title}</h1>
                    <h2>{apartment.location}</h2>
                    <div className='apartment-tags-container'>
                        {apartment.tags.map((tagName) => <span className='apartment-tags' key={tagName}>{tagName} </span>)}
                    </div>
                </div>

                <div className='apartment-owner'>
                    <div className='apartment-name-picture'>
                        <p>{apartment?.host?.name}</p>
                        <img src={apartment?.host?.picture} alt="logement" />
                    </div>

                    <div className='rating'>
                        {[...Array(5)].map((x, index) => (
                            <span key={index}>
                                {index < apartment?.rating ? (
                                    <i className="fa-solid fa-star"></i>
                                ) : (
                                    <i className="fa-regular fa-star"></i>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className='apartment-description'>
                <Collapse title="Description" content={apartment.description} />
                <Collapse title="Équipements" content={apartment.equipments} />
            </div>

        </div>
    )
}

export default Apartment







