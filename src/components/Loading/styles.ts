import styled from "styled-components/native";
import { theme } from "@/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${theme.COLORS.GRAY_600};
`;

export const Circle = styled.ActivityIndicator.attrs(() => ({
  color: theme.COLORS.GREEN_700,
}))``;
