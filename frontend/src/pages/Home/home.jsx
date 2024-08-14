import Logoimage from '../../assets/imagehome.png';
import './home.css';

import { useEffect, useState } from 'react';


export function Home() {
    const [apartements, setApartements] = useState([])
    console.log(apartements)
    useEffect(() => {

        const fetchApartements = async () => {
            const response = await fetch("http://localhost:8080/api/properties")
            const responseJson = await response.json()
            setApartements(responseJson)

        }
        fetchApartements()
    }, [])

    return (

        <main className='home-container'>

            <div className="banner-container">
                <div className="banner">
                    <img src={Logoimage} alt="image paysage" />
                    <h1> Chez vous,partout et ailleurs</h1>
                </div>
            </div>

            <section className='card-container'>

                {apartements.map((logement) => (
                    <div className='card' key={logement.id}>
                        <img src={logement.cover} alt="logement" />
                        <h3>{logement.title}</h3>

                    </div>

                ))}

            </section>

        </main>
    )

}
