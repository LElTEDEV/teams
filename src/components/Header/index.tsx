import { useNavigation } from "@react-navigation/native";

import { Container, Logo, BackButton } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";

import logoImg from "@/assets/logo.png";
import { theme } from "@/theme";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <AntDesign name="arrowleft" size={36} color={theme.COLORS.WHITE} />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
