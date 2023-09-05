import cartIcon from "../../assets/icons/cart.svg";
import "./CartHeader.css";

function CartHeader() {
  return (
    <div className="cart_header">
      <span>
        <img src={cartIcon} alt="" />
      </span>
      Cart (0)
    </div>
  );
}

export default CartHeader;
