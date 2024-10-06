import styled from "@emotion/styled";
import { FC, ReactNode, HTMLAttributes } from "react";

type TCard = {
  children: ReactNode;
  ariaLabel?: string;
} & HTMLAttributes<HTMLDivElement>;

const StyledCard = styled.div<TCard>`
  background-color: ${({ theme }) => theme.colors?.secondary};
  color: ${({ theme }) => theme.colors?.text};
  padding: 15px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.mode === 'light' ? '#ddd' : '#777'};
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
  }
`;

const Card: FC<TCard> = ({ children, ariaLabel, ...rest }) => {
  return (
    <StyledCard aria-label={ariaLabel} {...rest}>
      {children}
    </StyledCard>
  );
};

export default Card;
