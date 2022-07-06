import React, { useState } from "react";
import { Button } from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Chat from "../../Chat";
import styled from "styled-components";

const Wrapper = styled.div`
  bottom: 2%;
  right: 1%;
  position: fixed;
`;
const ChatBot = styled.div`
  bottom: 0;
  right: 2%;
  position: fixed;
  width: 350px;
`;

const ChatIcon = () => {
  const [open, setOpen] = useState(false);
  const openClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ChatBot>
        <Chat open={open} />
      </ChatBot>
      <Wrapper>
        <Button
          variant="outlined"
          //   size="small"
          onClick={openClose}
          style={{
            color: "#1f7477",
            backgroundColor: "rgba(75, 163, 159, 0.5)",
            height: "40px",
            width: "90px",
          }}
        >
          <div style={{ padding: "2px", fontWeight: 700 }}>Help</div>
          <ChatBubbleIcon style={{ fontSize: 25 }} />
        </Button>
      </Wrapper>
    </div>
  );
};

export default ChatIcon;
