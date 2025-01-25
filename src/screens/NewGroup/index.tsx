import { Container, Content } from "./styles";

import Feather from "@expo/vector-icons/Feather";

import { Header } from "@/components/Header";
import { theme } from "@/theme";
import { Highligth } from "@/components/Highlight";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Feather
          name="users"
          size={56}
          color={theme.COLORS.GREEN_700}
          style={{ alignSelf: "center" }}
        />

        <Highligth
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Digite o nome da turma" />

        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
