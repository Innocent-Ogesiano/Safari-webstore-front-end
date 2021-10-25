import React from "react";
import sidebar from "../stylesheets/sidebar.module.css";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <>
      <div className={sidebar.container}>
        <div className={sidebar.item}>
          <i class="fas fa-times close" id={sidebar["close-icon"]}></i>
        </div>
        <div className={sidebar.item}>
          <Link className={sidebar.link} to="/logo">
            <img src={Logo} alt="logo" id={sidebar["logo"]} />
          </Link>
        </div>
        <div className={sidebar.item}>
          <Link className={sidebar.link} to="/">
            Home
          </Link>
        </div>
        <div className={sidebar.item}>
          <Link className={sidebar.link} to="/clothes">
            Clothes
          </Link>
        </div>
        <div className={sidebar.item}>
          <Link className={sidebar.link} to="/shoes">
            Shoes
          </Link>
        </div>
        <div className={sidebar.item}>
          <Link className={sidebar.link} to="/accessories">
            Accessories
          </Link>
        </div>
        <div className={sidebar.item}>
          <Link className={sidebar.link} to="/favourites">
            Favourites
          </Link>
        </div>
      </div>
    </>
  );
}
