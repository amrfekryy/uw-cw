import styled from "@emotion/styled";
import { FC, InputHTMLAttributes } from "react";

type TInput = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputContainer = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const StyledInput = styled.input<TInput>`
  width: -webkit-fill-available;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.borderFocus};
    outline: none;
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.borderFocus};
  }

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Define the styled label
const StyledLabel = styled.label<TInput>`
  display: block;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;

const Input: FC<TInput> = ({ label, ...props }) => {
  return (
    <InputContainer>
      <StyledLabel htmlFor={props.id}>{label || "Input Label"}</StyledLabel>
      <StyledInput {...props} />
    </InputContainer>
  );
};

export default Input;
