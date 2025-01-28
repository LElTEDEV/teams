import { Alert, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Highligth } from "@/components/Highlight";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { Header } from "@/components/Header";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { useEffect, useState } from "react";
import { PlayerCard } from "@/components/PlayerCard";
import { ListEmpty } from "@/components/ListEmpty";
import { Button } from "@/components/Button";
import { groupDelete } from "@/storage/group/groupDelete";
import { NewPlayerProps, playerCreate } from "@/storage/player/playerCreate";
import { getPlayersByGroup } from "@/storage/player/playerGetGroups";
import { deletePlayerByGroup } from "@/storage/player/playerDelete";

type RouteParams = {
  group: string;
};

export function Players() {
  const navigate = useNavigation();

  const [namePlayer, setNamePlayer] = useState("");

  const [teamActive, setTeamActive] = useState("Time A");
  const [players, setPlayers] = useState([]);

  const { params } = useRoute();
  const { group } = params as RouteParams;

  async function handleAddPlayer() {
    try {
      await playerCreate({ name: namePlayer, team: teamActive }, group);
      await fetchPlayers();
      setNamePlayer("");
    } catch (error) {
      Alert.alert("Adicionar Player", error.message);
    }
  }

  async function handleDeletePlayer(name: string) {
    await deletePlayerByGroup(name, group);
    await fetchPlayers();
  }

  async function handleDeleteGroups() {
    await groupDelete(group);
    navigate.navigate("groups");
  }

  async function fetchPlayers() {
    const players = await getPlayersByGroup(group);

    const playersByGroup = players.filter(
      (player: NewPlayerProps) => player.team === teamActive
    );

    setPlayers(playersByGroup);
  }

  useEffect(() => {
    fetchPlayers();
  }, [teamActive]);

  return (
    <Container>
      <Header showBackButton />

      <Highligth title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={namePlayer}
          onChangeText={setNamePlayer}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              onPress={() => setTeamActive(item)}
              isActive={teamActive === item}
            />
          )}
          horizontal={true}
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item: NewPlayerProps) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handleDeletePlayer(item.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time :(" />
        )}
        contentContainerStyle={
          players.length === 0 ? { flex: 1 } : { paddingBottom: 100 }
        }
      />

      <Button
        title="Remover Turma"
        type="SECONDARY"
        onPress={handleDeleteGroups}
      />
    </Container>
  );
}
