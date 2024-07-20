import { parse } from "toml";

export async function readDataFromTomlFile<T>(filePath: string): Promise<T> {
  try {
    const response = await fetch(filePath);
    const tomlData = await response.text();
    return parse(tomlData) as unknown as T;
  } catch (error) {
    console.error("Error reading or parsing TOML file:" + filePath, error);
    throw error;
  }
}
