import './ServiceCard.css';


const ServiceCard = (props) => {

    const image = "/images/" + props.service.image;
    const description = props.service.description;
    return ( 
    <>
    <div className="ServiceCard">
        <div className="image">
        <img src={ image } alt={ description } />
        </div>
        <div className="service-description">
        <p>{ description }</p>
        </div>

    </div>
    
    
    </> 
    );
}
 
export default ServiceCard;