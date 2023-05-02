import './types.css';
import coffeeTypes from '../data';
import { useState, useRef } from 'react';

const CoffeTypes = () => {
    const [selectedType, setSelectedType] = useState(null);
    const [fullDescription, setFullDescription] = useState("");
    const descriptionRef = useRef(null);

    const showSelected = (type)=>{
        setSelectedType(type.name);
        setFullDescription(type.fullDescription);
        descriptionRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return ( 
       <div>
        <div className='types'>
            <div className='t-banner'>
            <img alt="banner" src={process.env.PUBLIC_URL + "6702940.jpg"}/>
            </div>
         <div className='types-container'>
         {coffeeTypes.map((type)=>(
            <div onClick={()=>showSelected(type)} className='type' key={type.name}>
                <img alt={type.name} src={type.img}/>
                <h2>{type.name}</h2>
                <h3>the origin of coffee: {type.origin}</h3>
            </div>
         ))}
         </div>
        </div>
        <div ref={descriptionRef}>
            {selectedType !== null && (
                <div>
                 {selectedType}
                 {fullDescription}
                </div>
             )}
        </div>
       </div>
     );
}
 
export default CoffeTypes;
