import React, { useContext, useEffect, useState } from "react";
import bannerImg from "../../assets/icons/Banner.svg";
import "./Home.css";
import CardProduct from "../../components/CardProduct/CardProduct";
import { ThemeContext } from "../../contexts/ThemeContext";
let URL = "https://api5odhra.zitouna.tech/api/products?populate=deep,4";

function Home() {
  const themeValues = useContext(ThemeContext);
  const [products, setProducts] = useState([]);

  function fetchData() {
    fetch(URL)
      .then((response) => response.json())
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products);

  return (
    <div
      className={themeValues.theme === "light" ? "home_page" : "home_page dark"}
    >
      <img className="banner_img" src={bannerImg} alt="" />
      <div className="content">
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
        {products.length === 0 && <h1>Not Data Found</h1>}
      </div>
    </div>
  );
}

export default Home;
