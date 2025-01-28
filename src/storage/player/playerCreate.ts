import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "../storageConfig";
import { getPlayersByGroup } from "./playerGetGroups";

export type NewPlayerProps = {
  name: string;
  team: string;
};

export async function playerCreate(player: NewPlayerProps, group: string) {
  try {
    const data = await getPlayersByGroup(group);

    const playerAlreadyExists = data.filter(
      ({ name }: NewPlayerProps) => name === player.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new Error("Esse jogador já está em outro time!");
    }

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify([...data, player])
    );
  } catch (error) {
    throw error;
  }
}
