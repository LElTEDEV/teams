import { useState } from "react";
import { Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Feather from "@expo/vector-icons/Feather";

import { Container, Content } from "./styles";

import { Header } from "@/components/Header";
import { theme } from "@/theme";
import { Highligth } from "@/components/Highlight";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { groupCreate } from "@/storage/group/groupCreate";

export function NewGroup() {
  const navigate = useNavigation();

  const [newGroup, setNewGroup] = useState("");

  async function handleNew() {
    if (newGroup.trim().length < 3) {
      return Alert.alert(
        "Nome do Grupo",
        "O nome do grupo precisa ter pelo menos 3 caracteres."
      );
    }

    try {
      await groupCreate(newGroup);
      navigate.navigate("players", { group: newGroup });
    } catch (error: string) {
      Alert.alert("Criar Grupo", error.message);
    }
  }

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

        <Input
          placeholder="Digite o nome da turma"
          value={newGroup}
          onChangeText={setNewGroup}
        />

        <Button title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
}
