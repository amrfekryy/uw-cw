import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

type TCard = {
  children: ReactNode;
  ariaLabel?: string;
};

const StyledCard = styled.div<TCard>`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 15px;
    width: 100%;
  }
`;

const Card: FC<TCard> = ({ children, ariaLabel }) => {
  return <StyledCard aria-label={ariaLabel}>{children}</StyledCard>;
};

export default Card;
