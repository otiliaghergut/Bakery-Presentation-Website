import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
// import Linkify from "react-linkify";

const Footer = () => {
  return (
    <div className="footer" data-block="footer">
      <div className="link-social">
        <div className="link-social-wrapper-parent">
          <div className="link-social-wrapper-fb">
            <BsFacebook onClick={() => window.open("https://www.facebook.com/DeliciileOtiliei/?locale=ms_MY")} style={{height:"1.2em", width:"1.2rem" ,color: "rgb(95, 57, 87)"}}/>
          </div>
          <div className="link-social-wrapper-msg">
            <IoLogoWhatsapp onClick={() => window.open("https://wa.me/<40771220571> ")} style={{height:"1.4em", width:"1.4rem" ,color: "rgb(95, 57, 87)"}} />
          </div>
          <div className="link-social-wrapper-insta">
            <RiInstagramFill onClick={() => window.open("https://instagram.com/otilia.ghergut?igshid=ZDdkNTZiNTM=")} style={{height:"1.3em", width:"1.3rem",color: "rgb(95, 57, 87)" }}/>
          </div>
        </div>
      </div>
      <div className="footer-links-container">
        <Link to="/privacy" className="footer-link">Privacy policy</Link>
        <Link to="/gdpr" className="footer-link">Politica GDPR</Link>
      </div>

      <div className="footer-links-container">
        {/* <div>Politica Cookies</div> */}
        <Link to="/cookies" className="footer-link">Politica Cookies</Link>
      </div>
      <hr />
      <div className="copyright">
        <span className="copyright-text">©Deliciile Otiliei</span>
      </div>
    </div>
  );
};

export default Footer;
