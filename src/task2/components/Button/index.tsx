import styled from "@emotion/styled";
import React, { FC } from "react";

// Define the type for the button
type TButton = {}

// Define the styled button
const StyledButton = styled.button``;

const Button: FC = () => {
  return <StyledButton onClick={() => "Make the onClick accessible"}>{}</StyledButton>;
};

export default Button;