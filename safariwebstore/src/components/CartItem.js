import React from "react";
import { Grid, TextField } from "@mui/material";

export default function CartItem() {
  const [currency, setCurrency] = React.useState("EUR");

  const currencies = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
  ];
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <Grid
        container
        spacing={{ xs: 0, md: 0, lg: 0, xl: 0 }}
        style={{
          backgroundColor: "white",
          height: "169px",
          background: "#FFFFFF",
          boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.1)",
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs style={{ borderRight: "2px solid #ccc" }}>
          <h6>ITEM DESCRIPTION</h6>
        </Grid>
        <Grid item xs>
          <TextField
            id="standard-select"
            select
            size="large"
            style={{ width: "30%" }}
            value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            variant="standard"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs>
          <h6 className="price">&#8358;10, 000</h6>
        </Grid>
        <Grid item xs>
          <h6 className="price">&#x20A6;10, 000</h6>
        </Grid>
      </Grid>
    </>
  );
}
