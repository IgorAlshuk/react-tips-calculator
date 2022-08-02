import styled from "styled-components";

export const StyledButton = styled.button<{ isDisabled: boolean }>`
  height: 61px;
  border: 0;
  background-color: #2ed2c9;
  font-size: 24px;
  color: #ffffff;
  cursor: pointer;
  opacity: ${({ isDisabled }) => (isDisabled ? "0.5" : "1")};
`;