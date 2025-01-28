import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "../storageConfig";

export async function deletePlayerByGroup(name: string, group: string) {
  const data = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);

  const playersInGroup = data ? JSON.parse(data) : [];

  const newArrayPlayers = playersInGroup.filter(
    (player) => player.name !== name
  );

  await AsyncStorage.setItem(
    `${PLAYER_COLLECTION}-${group}`,
    JSON.stringify(newArrayPlayers)
  );
}
