import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Button } from "../../Button";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import useStyles from "./styles";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

const ButtonItem = styled.div`
  display: flex;
`;
function deleteProduct(id) {
  const config = {
    params: {
      id: id,
    },
  };
  axios
    .get("http://localhost:5000/product/deleteProduct", config)
    .then((res) => {
      alert("deleted sucessfully");
      window.location.reload();
    })
    .catch((error) => console.log(error));
}
const Product = ({ product, show }) => {
  const classes = useStyles();
  const contact = product.contact;
  function copyText() {
    navigator.clipboard.writeText(contact);
    alert("contact copied to clipboard");
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {/* used for text statemets in material ui, variant defines 
                                                                text size and gutterbottom means sapce at the bottom */}
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {product.price}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        {show === "myProducts" ? (
          <IconButton
            color="success"
            aria-label="upload picture"
            component="span"
          >
            <DeleteIcon
              onClick={() => {
                deleteProduct(product._id);
              }}
            />
          </IconButton>
        ) : (
          <div></div>
        )}

        <Button size={14} apperance="regular">
          <ButtonItem>
            <AddIcCallIcon />
            <div style={{ margin: "4px" }} onClick={() => copyText()}>
              Contact Seller
            </div>
          </ButtonItem>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Product;
