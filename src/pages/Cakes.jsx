import Slider from "../components/imgSlider/ImgSlider";
import { useState } from "react";
import "./Cakes.css";
import parse from 'html-react-parser';
import jsonData  from "../assets/cakesData.json";
import { useParams } from 'react-router-dom';

const cardListPhotos = JSON.parse(JSON.stringify(jsonData));

// const thematicCakePhotos = [
//   { path: "/images/tematic-dj.jpg", title: "DJ" },
//   { path: "/images/tematic-cat.jpg", title: "Cat" },
//   { path: "/images/tematic-bunny.jpg", title: "Bunny" },
//   { path: "/images/tematic-beer.jpg", tile: "Beer" },
//   { path: "/images/tematic-sweets.jpg", title: "Sweets" },
//   { path: "/images/tematic-money.jpg", title: "Money" },
//   { path: "/images/tematic-babygirl.jpg", title: "Babygirl" },
//   { path: "/images/tematic-baby.jpg", title: "Bog" },
//   { path: "/images/tematic-baptism.jpg", title: "Baptism" },
//   { path: "/images/tematic-biliard.jpg", title: "Biliard" },
//   { path: "/images/tematic-bride.jpg", title: "Bride" },
//   { path: "/images/tematic-chef.jpg", title: "Chef" },
//   { path: "/images/tematic-FCB.jpg", title: "FCB" },
//   { path: "/images/tematic-game.jpg", title: "Game" },
//   { path: "/images/tematic-minnie.jpg", title: "Minnie" },
//   { path: "/images/tematic-paint.jpg", title: "Paint" },
//   { path: "/images/tematic-police.jpg", title: "Police" },
//   { path: "/images/tematic-solar.jpg", title: "Solar" },
//   { path: "/images/tematic-dentist.jpg", title: "Dentist" },
//   { path: "/images/tematic-elsa.jpg", title: "Elsa" },
//   { path: "/images/tematic-iepuras.jpg", title: "Iepuras" },
//   { path: "/images/tematic-makeup.jpg", title: "Makeup" },
//   { path: "/images/tematic-pinkpanthera.jpg", title: "Pinkpanther" },
//   { path: "/images/tematic-pisica.jpg", title: "Pisica" },
//   { path: "/images/tematic-tnt.jpg", title: "Tnt" },
//   { path: "/images/tematic-unicorn.jpg", title: "Unicorn" },
//   { path: "/images/tematic-unicorn2.jpg", title: "Unicorn2" }
// ];

// const sectionTitle = "Welcome to the temathic cake section! Below you will find some general info.";

// const sectionDescription = "Minimum weight is 2kg without decoration. Decoration components are paid separately. <br /> They can only be ordered by phone call."

const Cakes = () => {
  const params = useParams();
  
  const cardListPhoto = cardListPhotos.find(x => x.id === params.id);
  const thematicCakePhotos = cardListPhoto.photos || [{}];
  const sectionTitle = cardListPhoto.individualTitle;
  const sectionDescription = cardListPhoto.individualDescription || '';
  // debugger;

  const [selectedImage, setSelectedImage] = useState(thematicCakePhotos[0].path)
  const handleSelectImg = (img) => {
    setSelectedImage(img)
  }

  return (
    <div className="photo-items">
      <div className="image-description">
        <img src={selectedImage} alt={thematicCakePhotos[0].title} style={{ width: '100%'}}></img>
        <Slider images={thematicCakePhotos} onSelect={handleSelectImg}/>
      </div>
      <div className="photo-description">
        <h3>{sectionTitle}</h3>
        <p>{parse(sectionDescription)}</p>
      </div>
    </div>
  );
};

export default Cakes;
