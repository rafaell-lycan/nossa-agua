import { APIResponse, DamSystem } from "../@types";
import { parseDamSystem } from "../utils/parse-dam";

const API_BASE_URL = "https://sabesp-api.herokuapp.com/v2";

export async function getDamsInfo(): Promise<DamSystem[]> {
  const data: APIResponse = await (await fetch(API_BASE_URL)).json();
  return data.map(parseDamSystem);
}
