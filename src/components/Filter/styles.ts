import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { theme } from "@/theme";

export type FilterStyleProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ isActive }: FilterStyleProps) => css`
    border: 1px solid ${isActive ? theme.COLORS.GREEN_700 : "transparent"};
  `}

  border-radius: 4px;
  margin-right: 12px;

  height: 38px;
  width: 80px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.SM}px;
  text-transform: uppercase;

  color: ${theme.COLORS.WHITE};
`;
