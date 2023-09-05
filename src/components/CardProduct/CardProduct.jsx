import React from "react";
import "./CardProduct.css";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import cartIcon from "../../assets/icons/cart.svg";
import { Rate } from "antd";

const { Meta } = Card;

function CardProduct({ product }) {
  const navigate = useNavigate();
  console.log(product);

  const HandleNavigate = () => {
    navigate(`/products/${product.id}`, { state: product });
  };
  return (
    <Card
      onClick={HandleNavigate}
      style={{
        width: 300,
      }}
      cover={
        <img alt="example" src={product.attributes.image.data.attributes.url} />
      }
      className="new_card"
      title={<HeaderCard category={product.attributes.type} />}
    >
      <Meta title={product.attributes.name} />
      <div className="prices">
        <div>
          Price :
          <span className="before_discount">
            ${product.attributes.priceBeforeDiscount}.00
          </span>{" "}
          <span className="after_discount">
            ${product.attributes.priceAfterDiscount}.00
          </span>
        </div>
        <Rate
          disabled
          className="rate"
          defaultValue={product.attributes.rating}
        />
      </div>
    </Card>
  );
}

export default CardProduct;

const HeaderCard = ({ category }) => {
  return (
    <div className="header_card">
      <p className="category">{category}</p>
      <span>
        <img src={cartIcon} alt="" />
      </span>
    </div>
  );
};
