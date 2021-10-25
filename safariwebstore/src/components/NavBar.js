import React from "react";
import navbar from "../stylesheets/navbar.module.css";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../logo.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function NavBar() {
  return (
    <>
      <div className={navbar.container}>
        <div className={navbar.item}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={navbar.item}>
          <Link className={navbar.link} to="/">
            Home
          </Link>
        </div>
        <div className={navbar.item}>
          <Link className={navbar.link} to="/clothes">
            Clothes
          </Link>
        </div>
        <div className={navbar.item}>
          <Link className={navbar.link} to="/shoes">
            Shoes
          </Link>
        </div>
        <div className={navbar.item}>
          <Link className={navbar.link} to="/accessories">
            Accessories
          </Link>
        </div>
        <div className={navbar.item}>
          <Link className={navbar.link} to="/logo">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className={navbar.item}>
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder="Search..."
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
          />
        </div>
        <div className={navbar.item}>
          <Link className={navbar.link} to="/account">
            <AccountCircleIcon></AccountCircleIcon>
          </Link>
        </div>
        <div className={navbar.item}>
          <Link className={navbar.link} to="/cart">
            <ShoppingCartIcon style={{ color: "#ED165F" }}></ShoppingCartIcon>
          </Link>
        </div>
        <div className={navbar.item} id={navbar["fav-icon"]}>
          <Link className={navbar.link} to="/favourite">
            <FavoriteIcon></FavoriteIcon>
          </Link>
        </div>
      </div>
    </>
  );
}
