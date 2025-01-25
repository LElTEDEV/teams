import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { theme } from "@/theme";

export const Container = styled(TouchableOpacity)`
  height: 90px;

  background-color: ${theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};

  color: ${theme.COLORS.GRAY_200};
`;
