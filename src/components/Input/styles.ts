import styled from "styled-components/native";
import { TextInput } from "react-native";

import { theme } from "@/theme";

export const Container = styled(TextInput).attrs(() => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
  color: theme.COLORS.WHITE,
}))`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${theme.COLORS.GRAY_700};
  color: ${theme.COLORS.WHITE};

  border-radius: 6px;
  padding: 16px;

  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
`;
