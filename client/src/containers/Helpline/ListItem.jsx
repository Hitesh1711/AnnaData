import React from "react";
import styled from "styled-components";
import { MdPhone } from "react-icons/md";
import { Button } from "../../components/Button";

const Wrapper = styled.div`
  align-self: center;
  border: 1px solid #c5c5c5;
  padding: 2%;
  margin: 1%;
  border-radius: 10px;
`;
const ListContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
`;

const ListItem = ({ product, show }) => {
  const contact = product.number;
  function copyText() {
    navigator.clipboard.writeText(contact);
    alert("contact copied to clipboard");
  }
  return (
    <Wrapper>
      <ListContent>
        {product.name}
        <div onClick={() => copyText()}>
          <Button apperance="regular" >
            <MdPhone size={20} />
            {"   "}
            {product.number}
          </Button>
        </div>
      </ListContent>
    </Wrapper>
  );
};

export default ListItem;
