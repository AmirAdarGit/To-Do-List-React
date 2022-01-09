import styled from "./style";
import THEME from "./theme.constants";

export const BasicButton = styled.button`
  padding: 0 16px;
  margin: 4px;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.fontColor};

  cursor: pointer;
  user-select: none;

  outline: none;
  border-radius: ${({ theme }) => theme.borderRadiuses.round}px;
  border: transparent;

  color: ${({ theme }) => theme.color.primary};
  transition: ${({ theme }) => `opacity 0.6s ${theme.easing.easeOut}`};

  &:disabled {
    opacity: ${({ theme }) => theme.opacity.disabled};
    pointer-events: none;
    cursor: default;
  }

  * {
    pointer-events: none;
  }
`;

export const SelectButton = styled(BasicButton)`
  cursor: pointer;
  user-select: none;
  outline: none;
  color: ${({ theme }) => theme.color.fontColor};
  background-color: ${({ theme }) => theme.color.pinkish};
  transition: ${({ theme }) => `background-color 0.6s ${theme.easing.easeOut}`};
`;
