import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import React, { useContext, useState } from "react";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Login from "./Pages/Login/Login";
import ThemeProvider from "./contexts/ThemeContext";

export const AuthContext = React.createContext();

function App() {
  let usr = { id: 1, name: "Firas Latrach", email: "Firaslatrach3@gmail.com" };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ThemeProvider>
      <AuthContext.Provider value={{ user: usr, setIsLoggedIn, isLoggedIn }}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>

            <Footer />
          </div>
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
