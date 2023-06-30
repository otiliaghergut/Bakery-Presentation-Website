import { useNavigate } from "react-router-dom";
import CakeCard from "../cakeCard/CakeCard";
import "./CardListing.css"
import jsonData  from "../../assets/cakesData.json";

const cardListPhotos = JSON.parse(JSON.stringify(jsonData));

const CardListing = ({  }) => {
    const navigate = useNavigate();

    const handleRedirect = (id) => {
        navigate(`/cakes/${id}`);
        // navigate(`/cakes/tematic`);
      };

    return (
        <div className="card-listing">
            {cardListPhotos.map(item =>  <CakeCard imgSrc={item.path} alt={item.title} description={item.description} id={item.id} onCardClick={handleRedirect} />)}
        </div>
    )
}

export default CardListing;