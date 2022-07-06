import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import FileBase from "react-file-base64";
import {
  Input,
  InputContainer,
  Form,
  InputText,
  Button,
  Buttons,
  RightAlign,
  ErrorMsg,
} from "../commonStyles";
//styles for react modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.16)",
    width: "30%",
  },
};
Modal.setAppElement(document.getElementById("root"));

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

// modal to create a new assignment
const AddProduct = () => {
  let history = useHistory();
  const token = sessionStorage.getItem("token");
  const currentUser = parseJwt(token);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    contact: "",
    creator: currentUser?._id,
  });
  const [err, setError] = useState("");
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  //api call to create assignment
  const create = () => {
    setNewProduct({ ...newProduct, creator: currentUser._id });
    axios
      .post("http://localhost:5000/product/createProduct", newProduct)
      .then((res) => {
        alert("Product Added!!");
        console.log(res);
        setError("");
        setNewProduct({
          ...newProduct,
          name: "",
          description: "",
          price: "",
          image: "",
          contact: "",
        });
        setIsOpen(false);
        window.location.reload();
      })
      .catch((error) => {
        setError("please fill all details correctly");
      });
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setError("");
    setNewProduct({
      ...newProduct,
      name: "",
      description: "",
      price: "",
      image: "",
      contact: "",
    });
    setIsOpen(false);
  }

  return (
    <div>
      <RightAlign>
        <Button variant="contained" onClick={openModal}>
          + Add Product
        </Button>
      </RightAlign>
      {token ? (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Add Product"
        >
          <Form>
            <ErrorMsg msg={err} />
            <InputContainer>
              <InputText>Product Name</InputText>
              <Input
                type="text"
                name="name"
                placeholder="name"
                value={newProduct.name}
                onChange={(e) => handleChange(e)}
                autoComplete="off"
              />
            </InputContainer>
            <InputContainer>
              <InputText>Description</InputText>

              <Input
                type="text"
                name="description"
                placeholder="description"
                value={newProduct.description}
                onChange={(e) => handleChange(e)}
                autoComplete="off"
              />
            </InputContainer>
            <InputContainer>
              <InputText>Price</InputText>
              <Input
                type="text"
                name="price"
                placeholder="price"
                onChange={(e) => handleChange(e)}
                autoComplete="off"
              />
            </InputContainer>
            <InputContainer>
              <InputText>Contact Info</InputText>
              <Input
                type="text"
                name="contact"
                placeholder="phone number"
                onChange={(e) => handleChange(e)}
                autoComplete="off"
              />
            </InputContainer>
            <InputContainer>
              <InputText>Upload Image</InputText>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setNewProduct({ ...newProduct, image: base64 })
                }
              />
            </InputContainer>
          </Form>

          <Buttons>
            <Button variant="contained" onClick={create}>
              Add product
            </Button>
            <Button variant="contained" onClick={closeModal}>
              Cancel
            </Button>
          </Buttons>
        </Modal>
      ) : (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Add Product"
        >
          <Buttons>
            <h5>Login to continue</h5>
            <Button
              variant="contained"
              onClick={() => {
                history.push("/signin");
              }}
            >
              Login
            </Button>
            <Button variant="contained" onClick={closeModal}>
              Cancel
            </Button>
          </Buttons>
        </Modal>
      )}
    </div>
  );
};

export default AddProduct;
