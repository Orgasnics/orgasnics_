import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const MenuLogo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center" }}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: "white" }} />
      </div>
      {menuOpen && (
        <div className="mob_menu_holderDiv">
          <ul className="mob_menu_list">
            <div onClick={handleClick}>
              <a href="#our_services">Our Services</a>
            </div>
            <div onClick={handleClick}>
              <a href="#learn_more">About Us</a>
            </div>
            <div onClick={handleClick}>
              <a href="#Our_Clients">Our Clients</a>
            </div>
            <div onClick={handleClick}>
              <a href="#contact_id">Contact Us</a>
            </div>
            <div onClick={handleClick}>
              <a
                href="https://wa.me/+923135098197"
                target="_blank"
                rel="noreferrer"
              >
                Chat on Whatsapp
              </a>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuLogo;
