import styled from "@emotion/styled";
import { FC } from "react";

// Define the type for the button
type TButton = {
  text?: string;
  onClick: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  variant?: "primary" | "secondary";
};

// Define the styled button
const StyledButton = styled.button<TButton>`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.primary : theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "primary"
        ? theme.colors.primaryHover
        : theme.colors.secondaryHover};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

const Button: FC<TButton> = ({
  text,
  onClick,
  disabled,
  ariaLabel,
  variant = "primary",
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || text}
      variant={variant}
    >
      {text || "Click Here"}
    </StyledButton>
  );
};

export default Button;
