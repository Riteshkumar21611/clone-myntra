import React from "react";
import { MdPerson } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartQuantity = useSelector((state) => state.bag);
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="./images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <input
            className="search_input"
            placeholder=" Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <MdPerson />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <FaHeart />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/bag">
            <IoBagCheckSharp />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{cartQuantity?.length ?? 0}</span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
