import React from "react";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";
import styled from "styled-components";
import Modal from "react-modal";
import { Panorama } from "@material-ui/icons";

const Wrapper = styled.div`
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
`;

function Chat(params) {
  return (
    <Wrapper open={params.open}>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </Wrapper>
  );
}

export default Chat;
