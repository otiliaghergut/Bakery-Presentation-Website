
import "./About.css";

const About = () => {
  return (
    <div className="about-img">
      <div>
        <img src="/images/aboutPicture.jpg" alt={"one of my fav pic"}></img>
      </div>
      <div className="description">
        <h3> I bake sweets you won't regret! </h3>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Salut, pofticiosule! I'm Otilia and I like to make cakes, cookies, muffins and any dessert with or without added sugar.
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I discovered my passion around the age of 9, and since then I prepare something good whenever I have the opportunity, and if I don't have an opportunity, I make it myself!
          <br></br>
          Your food should taste great, but most importantly it should tell you "eat me!" just by the way it looks.
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am in a continuous evolution and I invite you to enjoy my desserts.

        </p>
      </div>
    </div>
  );
};

export default About;
