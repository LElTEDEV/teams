import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";

export async function groupDelete(groupName: string) {
  try {
    const response = await AsyncStorage.getItem(GROUP_COLLECTION);

    const groups: string[] = response ? JSON.parse(response) : [];

    if (!groups.includes(groupName)) {
      throw new Error("Esse grupo não existe.");
    }

    const newGroups = groups.filter((group) => group !== groupName);

    return await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify(newGroups)
    );
  } catch (error) {
    throw error;
  }
}
