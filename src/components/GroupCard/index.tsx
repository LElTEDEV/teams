import { TouchableOpacityProps } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Container, Title } from "./styles";

import { theme } from "@/theme";

type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <FontAwesome
        name="users"
        size={32}
        color={theme.COLORS.GREEN_700}
        style={{ marginRight: 20 }}
      />
      <Title>{title}</Title>
    </Container>
  );
}
