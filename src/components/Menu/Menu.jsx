import "./Menu.css";
import icon from "../../assets/icons/Vector.svg";
import close from "../../assets/icons/close.svg";

function Menu({ setIsOpen, isOpen }) {
  return (
    <div className="menu" onClick={() => setIsOpen((el) => !el)}>
      {isOpen ? <img src={close} alt="" /> : <img src={icon} alt="" />}
    </div>
  );
}

export default Menu;
