import React from "react";
import { Grid } from "@mui/material";
import CartItem from "./CartItem";


export default function Cart() {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 0, md: 0, lg: 0 }}
        style={{ backgroundColor: "white" }}
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        xs={11}
      >
        <Grid item>
          <h6 className="cart-item-count">Shopping Cart (2 item)</h6>
        </Grid>
        <Grid
          container
          spacing={{ xs: 0, md: 0, lg: 0, xl: 0 }}
          style={{ backgroundColor: "white" }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs>
            <h6>ITEM DESCRIPTION</h6>
          </Grid>
          <Grid item xs>
            <h6>QUANTITY</h6>
          </Grid>
          <Grid item xs>
            <h6>UNIT PRICE</h6>
          </Grid>
          <Grid item xs>
            <h6>SUB TOTAL</h6>
          </Grid>
        </Grid>
        <CartItem />
        <CartItem />
      </Grid>
    </>
  );
}
