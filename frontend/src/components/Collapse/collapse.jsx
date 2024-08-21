import { useState } from 'react';
import './collapse.css';


export function Collapse(props) {

    const { title, content } = props;
    const [isOpen, setIsOpen] = useState(false); // definir l'etat par defaut

    const showContent = () => {
        setIsOpen(!isOpen);
    };



    return (
        <div className="collapse">
            <div className="collapse-header"    >
                <h2>{title}</h2>

                <span className="chevron" onClick={showContent} ><i className={`fa-solid icon ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i></span>


            </div>
            {isOpen && (
                <div className="collapse-content">
                    {content}
                </div>
            )}
        </div>
    )
}

export default Collapse




