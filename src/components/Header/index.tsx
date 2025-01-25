import { Container, Logo, BackButton } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";

import logoImg from "@/assets/logo.png";
import { theme } from "@/theme";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <AntDesign name="arrowleft" size={36} color={theme.COLORS.WHITE} />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
