import React from "react";
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import { Image, Space } from 'antd';
import "./ProductDetails.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Rate } from "antd";

function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  let product = location.state;
  function handleBack() {
    navigate(-1);
  }
const src =product.attributes.image.data.attributes.url;

  console.log(product);
  const onDownload = () => {
    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.download = 'image.png';
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        link.remove();
      });
  };
  return (
    <div className="body">
    <div className="mainContiner">
    
    <Image
      width={300}
      src={src}
      preview={{
        toolbarRender: (
          _,
          {
            transform: { scale },
            actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
          },
        ) => (
          <Space size={12} className="toolbar-wrapper">
            <DownloadOutlined onClick={onDownload} />
            <SwapOutlined rotate={90} onClick={onFlipY} />
            <SwapOutlined onClick={onFlipX} />
            <RotateLeftOutlined onClick={onRotateLeft} />
            <RotateRightOutlined onClick={onRotateRight} />
            <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
            <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
          </Space>
        ),
      }}
      className="image"
    />
    <div className="textContiner">
      <h1>{product.attributes.name}</h1>
      <Rate
          disabled
          className="rate"
          defaultValue={product.attributes.rating}
        />

        <div className="price">
        
          <span className="before_discount">
            ${product.attributes.priceBeforeDiscount}.00
          </span>{" "}
          <span className="after_discount">
            ${product.attributes.priceAfterDiscount}.00
          </span>
        </div>
        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

        <div className="addToCart">
        Quantity : <input type="number" />
        <button>Add To Cart</button>
        </div>
    </div>
    </div>
    </div>

  );
};

export default ProductDetails;
