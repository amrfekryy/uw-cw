import styled from "@emotion/styled";
import { FC, SelectHTMLAttributes, forwardRef } from "react";
import { InputContainer, StyledHelperText, StyledLabel } from "../Input";

type TSelect = {
  label?: string;
  error?: boolean;
  helperText?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

const StyledSelect = styled.select<TSelect>`
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
      ${({ theme, error }) =>
        error ? theme.colors.error : theme.colors.borderFocus};
  }

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Select = forwardRef<HTMLSelectElement, TSelect>(
  ({ label, helperText, children, ...props }, ref) => {
    const error = Boolean(helperText);
    return (
      <InputContainer>
        {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
        <StyledSelect ref={ref} error={error} {...props}>
          {children}
        </StyledSelect>
        {helperText && (
          <StyledHelperText error={error}>{helperText}</StyledHelperText>
        )}
      </InputContainer>
    );
  }
);

// Set displayName for easier debugging
Select.displayName = "Select";

export default Select;
