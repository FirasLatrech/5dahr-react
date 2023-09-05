import React from "react";
import "./Header.css";
import logo from "../../assets/icons/Logo.svg";
import CartHeader from "../CartHeader/CartHeader";
import Menu from "../Menu/Menu";
import Search from "../Search/Search";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../App";
import light from "../../assets/icons/light.svg";
import darcIcon from "../../assets/icons/dark.svg";
import { ThemeContext } from "../../contexts/ThemeContext";
import MegaMenu from "../MegaMenu/MegaMenu";
function Header() {
  const auth = useContext(AuthContext);
  const themeValues = useContext(ThemeContext);
  const { isLoggedIn } = auth;
  const { theme, toggleTheme } = themeValues;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={theme === "light" ? "header" : "header dark"}>
      <div className="header_content">
        <div className="s_left">
          <NavLink to="/" className="logo">
            <img src={logo} alt="" />
          </NavLink>
          <div className="navigations">
            <NavLink to="/">Home</NavLink>
            {isLoggedIn ? (
              <>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink  to="/login">
                  Logout
                </NavLink>
              </>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </div>
        <div className="s_right">
          <div className="search_s">
            <Search />
          </div>
          <div className="header_actions">
            <CartHeader />
          </div>

          <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
          
        </div>
      </div>
      <div className="theme_mode">
        <img
          src={theme === "light" ? light : darcIcon}
          alt=""
          onClick={toggleTheme}
          style={{ cursor: "pointer" }}
        />
      </div>
    </header>
  );
}

export default Header;
