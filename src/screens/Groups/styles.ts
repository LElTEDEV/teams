import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { theme } from "../../theme";

export const Container = styled(SafeAreaView)`
  width: 100%;
  flex: 1;
  background-color: ${theme.COLORS.GRAY_600};
  align-items: center;

  padding: 24px;
`;
