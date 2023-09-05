import "./Footer.css";
import logo from "../../assets/icons/logoIcon.svg";
import fb from "../../assets/icons/Fb.svg";
import insta from "../../assets/icons/Insta.svg";
import twitter from "../../assets/icons/Twiter.svg";
import pintrest from "../../assets/icons/Pintrest.svg";

function Footer() {
  let social_media_items = [insta, fb, twitter, pintrest];
  let pages = [
    "Style Guide",
    "404 Not Found",
    "Password Protected",
    "Licences",
    "Changelog",
  ];
  return (
    <>
      <div className="footer">
        <div className="left">
          <p className="title">Contact Us</p>
          <div className="list">
            <div className="item">
              <p>Email</p>
              <span>needHelp@gmail.com</span>
            </div>
            <div className="item">
              <p>Phone</p>
              <span>666 888 888</span>
            </div>
            <div className="item">
              <p>Address</p>
              <span>88 road, borklyn street, USA</span>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="middle">
          <div className="middle_title">
            <img src={logo} alt="" />
            <p>Organick</p>
          </div>
          <p className="desc">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </p>
          <div className="social_media_section">
            {social_media_items.map((el, index) => (
              <span key={index}>
                <img src={el} alt="" />
              </span>
            ))}
          </div>
        </div>
        <div className="divider"></div>
        <div className="right">
          <p className="title">Utility Pages</p>
          <div className="pages">
            {pages.map((el, index) => (
              <p key={index}>{el}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="copyright">
        Copyright <a href="#">Organick</a> . Designed by{" "}
        <a href="#">VictoreFlow</a>
        Templates - Powered by webflow
      </div>
    </>
  );
}

export default Footer;
