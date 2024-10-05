import styled from "@emotion/styled";
import { FC, InputHTMLAttributes, forwardRef } from "react";

type TInput = {
  label?: string;
  error?: boolean;
  helperText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputContainer = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const StyledInput = styled.input<TInput>`
  width: -webkit-fill-available;
  padding: 6px;
  font-size: 1rem;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.error : theme.colors.border)};
  border-radius: 5px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ theme, error }) =>
      error ? theme.colors.error : theme.colors.borderHover};
  }

  &:focus {
    border-color: ${({ theme, error }) =>
      error ? theme.colors.error : theme.colors.borderFocus};
    outline: none;
    box-shadow: 0 0 5px
      ${({ theme, error }) => (error ? theme.colors.error  : theme.colors.borderFocus)};
  }

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StyledLabel = styled.label<TInput>`
  display: block;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;

const StyledHelperText = styled.p<TInput>`
  margin-top: 3px;
  display: block;
  color: ${({ theme, error }) =>
    error ? theme.colors.error : theme.colors.text};
  font-size: 0.7rem;
`;

// Define the Input component using forwardRef
const Input = forwardRef<HTMLInputElement, TInput>(
  ({ label, helperText, ...props }, ref) => {
    const error = Boolean(helperText)
    return (
      <InputContainer>
        {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
        <StyledInput ref={ref} error={error} {...props} />
        {helperText && <StyledHelperText error={error}>{helperText}</StyledHelperText>}
      </InputContainer>
    );
  }
);

// Set displayName for easier debugging
Input.displayName = "Input";

export default Input;
