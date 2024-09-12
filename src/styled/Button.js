import styled from "styled-components";

export const Button = styled.button`
  color: black;
  padding: 10px 18px;
  background: #f2f3f4;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: whitesmoke;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: #f2f3f4;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: whitesmoke;
  }
`;
