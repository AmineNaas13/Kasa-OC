import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './apartment.css';
import Collapse from "../../components/Collapse/collapse";

export function Apartment() {


    const { id } = useParams(); // Récupère l'ID de l'URL
    const [apartment, setApartment] = useState(null);

    useEffect(() => {
        const fetchApartment = async () => {
            const response = await fetch(`http://localhost:8080/api/properties/${id}`);
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
                <img src={apartment.cover} alt="logement" />
            </div>
            <div className='apartment-header'>

                <div className='apartment-title'>
                    <h1 className='title'>{apartment.title}</h1>
                    <h2>{apartment.location}</h2>
                    {apartment.tags.map((tagName) => <span className='apartment-tags'>{tagName} </span>)}



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







// content={<div className='equipment-content'>{apartment.equipments}</div>}