import Logoimage from '../../assets/imagehome.png';
import './home.css';
import Listelogements from "../../../../backend/data.json"


export function Home() {

    return (
        <main>

            <div className="banner-container">
                <div className="banner">
                    <img src={Logoimage} alt="image paysage" />
                    <h1> Chez vous,partout et ailleurs</h1>
                </div>
            </div>

            <section className='card-container'>

                {Listelogements.map((logement) => (
                    <div className='card' key={logement.id}>
                        <img src={logement.cover} alt="logement" />
                        <h3>{logement.title}</h3>

                    </div>

                ))}

            </section>

        </main>
    )

}
