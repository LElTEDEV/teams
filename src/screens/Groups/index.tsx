import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { GroupCard } from "@/components/GroupCard";
import { Container } from "./styles";

import { Header } from "@/components/Header";
import { Highligth } from "@/components/Highlight";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";
import { groupGetAll } from "@/storage/group/groupGetAll";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigate = useNavigation();

  function handleNewGroup() {
    navigate.navigate("new");
  }

  async function fetchGroups() {
    const response = await groupGetAll();

    setGroups(response);
  }

  useEffect(() => {
    fetchGroups();
  }, []);
  return (
    <Container>
      <Header />

      <Highligth title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => navigate.navigate("players", { group: item })}
          />
        )}
        style={{ width: "100%" }}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Você ainda não tem nenhum grupo, que tal criar um?" />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
