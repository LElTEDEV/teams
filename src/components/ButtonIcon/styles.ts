import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styled from "styled-components/native";
import { theme } from "@/theme";

export type ButtonIconTypeProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconTypeProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ type }: Props) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``;
