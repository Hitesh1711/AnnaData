import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./Productsstyles";
import styled from "styled-components";
import AddProduct from "./addProduct";
import GetProducts from "../../actions/getProducts";

const SearchBar = styled.input`
  width: auto;
  min-width: 40%;
  height: auto;
  max-height: 40px;
  border: 1px solid rgba(75, 163, 159, 0.85);
  border-radius: 17px;
  :focus {
    outline: none;
  }
  font-size: 16px;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
`;
const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
`;
function parseJwt(token) {
  if (!token) {
    return;
  }
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  let currentUser = JSON.parse(window.atob(base64));
  return {
    duration: currentUser.duration,
    email: currentUser.email,
    exp: currentUser.exp,
    iat: currentUser.iat,
    _id: currentUser.userId,
  };
}

const Products = (props) => {
  const token = sessionStorage.getItem("token");
  const currentUser = parseJwt(token);
  console.log(currentUser);

  const searchTerm = (e) => {
    setTerm(e.target.value);
  };
  const allProducts = GetProducts();
  let myProducts = allProducts.filter((data) => {
    return currentUser?._id.includes(data.creator);
  });
  let products;
  if (props.show === "myProducts") {
    products = myProducts;
  } else {
    products = allProducts;
  }
  const classes = useStyles();
  const [term, setTerm] = useState("");
  return (
    <main className={classes.content}>
      <SearchWrapper>
        <SearchBar
          onChange={searchTerm}
          autoComplete="off"
          placeholder="search"
        />
        <AddProduct />
      </SearchWrapper>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={2} className={classes.root}>
        {products
          .filter((val) => {
            if (term === "") return val;
            else {
              return val.name.toLowerCase().includes(term.toLowerCase());
            }
          })
          .map((product) => (
            <Grid item key={product.id} xs={12} s={6} md={3} l={3}>
              <Product product={product} show={props.show} />
            </Grid>
          ))}
      </Grid>
    </main>
  );
};
export default Products;
