/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClimateApiResponse, getClimate } from "../services/climate";

export async function getTodayWeather(): Promise<ClimateApiResponse | null> {
  try {
    const response = await getClimate();

    const { main, weather } = response;
    const { temp } = main;
    const { description, main: weatherMain, icon, id } = weather[0];

    const today = new Date();
    const day = new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(
      today,
    );

    return {
      main: { temp },
      weather: [{ id, description, main: weatherMain, icon }],
      day,
    };
  } catch (error: Error | any) {
    console.error("Erro ao obter a previsão do tempo:", error.message);
    return null;
  }
}
