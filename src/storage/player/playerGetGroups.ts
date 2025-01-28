import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "../storageConfig";

export async function getPlayersByGroup(groupName: string) {
  const data = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${groupName}`);

  const players: [] = data ? JSON.parse(data) : [];

  return players;
}
