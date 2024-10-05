import styled from "@emotion/styled";
import { FC, ButtonHTMLAttributes } from "react";

// Extend the button props to include all possible HTML button attributes
type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
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
  color: #f5f5f5;
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
  children,
  onClick,
  disabled,
  variant = "primary",
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
