import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "../storageConfig";
import { groupGetAll } from "./groupGetAll";

export async function groupCreate(newGroupName: string) {
  try {
    const storedGroups = await groupGetAll();

    if (storedGroups.includes(newGroupName)) {
      throw new Error("Este grupo já existe.");
    }

    return await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...storedGroups, newGroupName])
    );
  } catch (error) {
    throw error;
  }
}
