import React from "react";
import { useTheme } from "./provider";
import styled from "@emotion/styled";

const TogglerButton = styled.a`
  background: transparent;
  &:focus {
    outline: none;
  }
`;

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <TogglerButton onClick={toggleTheme}>
      {theme === "light" ? (
        <i className="fas fa-moon" title="Switch to Dark Mode"></i>
      ) : (
        <i className="fas fa-sun" title="Switch to Light Mode"></i>
      )}
    </TogglerButton>
  );
};

export default ThemeToggler;
