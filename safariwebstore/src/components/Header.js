import * as React from "react";
import { Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Clothes from "./Clothes";
import Shoes from "./Shoes";
import Accessories from "./Accessories";
import Cart from "./Cart";
import Account from "./Account";
import Favourites from "./Favourites";
import Logo from "../logo.svg";
import "../styles/header-style.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  item: {
    backgroundColor: "yellow",
  },
}));

export default function Header() {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 0, md: 0, lg: 0, xl: 0 }}
        style={{ backgroundColor: "#F5F5F5" }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Router>
          <Grid item xs={4}>
            <Grid
              container
              spacing={0}
              style={{ backgroundColor: "#F5F5F5" }}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs>
                <Item style={{ backgroundColor: "inherit" }}>
                  <Link className="link" to="/">
                    Home
                  </Link>
                </Item>
              </Grid>
              <Grid item xs>
                <Item style={{ backgroundColor: "inherit" }}>
                  <Link className="link" to="/clothes">
                    Clothes
                  </Link>
                </Item>
              </Grid>
              <Grid item xs>
                <Item style={{ backgroundColor: "inherit" }}>
                  <Link className="link" to="/shoes">
                    Shoes
                  </Link>
                </Item>
              </Grid>
              <Grid item xs>
                <Item style={{ backgroundColor: "inherit" }}>
                  <Link className="link" to="/accessories">
                    Accessories
                  </Link>
                </Item>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={2} md={2} lg={3}>
            <Item style={{ backgroundColor: "inherit" }}>
              <Link className="link" to="/logo">
                <img src={Logo} alt="logo" />
              </Link>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Grid
              container
              spacing={0}
              style={{ backgroundColor: "#F5F5F5" }}
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item xs={6} md={6} lg={6}>
                <Item style={{ backgroundColor: "inherit" }}>
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    placeholder="Search..."
                    InputProps={{
                      endAdornment: <SearchIcon />,
                    }}
                  />
                </Item>
              </Grid>
              <Grid item xs md lg>
                <Item style={{ backgroundColor: "inherit" }}>
                  <Link className="link" to="/account">
                    <AccountCircleIcon></AccountCircleIcon>
                  </Link>
                </Item>
              </Grid>
              <Grid item xs md lg>
                <Item style={{ backgroundColor: "inherit" }}>
                  <Link className="link" to="/cart">
                    <ShoppingCartIcon
                      style={{ color: "#ED165F" }}
                    ></ShoppingCartIcon>
                  </Link>
                </Item>
              </Grid>
              <Grid item xs md lg>
                <Item style={{ backgroundColor: "inherit" }}>
                  <Link className="link" to="/favourite">
                    <FavoriteIcon></FavoriteIcon>
                  </Link>
                </Item>
              </Grid>
            </Grid>
          </Grid>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/clothes">
              <Clothes />
            </Route>
            <Route path="/shoes">
              <Shoes />
            </Route>
            <Route path="/accessories">
              <Accessories />
            </Route>
            <Route path="/logo">
              <img svg={Logo} alt="logo" />
            </Route>
          </Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/favourite">
            <Favourites />
          </Route>
        </Router>
      </Grid>
    </>
  );
}
