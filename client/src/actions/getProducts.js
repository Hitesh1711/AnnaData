import React, { useState, useEffect } from "react";
import axios from "axios";

const GetProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/product/getProducts")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return data;
};

export default GetProducts;
