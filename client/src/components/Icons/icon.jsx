import styled from "styled-components";

export default function Icon({ color, size, children }) {
  return (
    <StyledIcon background={color} size={size}>
      {children}
    </StyledIcon>
  );
}

const StyledIcon = styled.div`
  height: ${(props) => (props.size ? props.size : "3.5rem")};
  width: ${(props) => (props.size ? props.size : "3.5rem")};
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
