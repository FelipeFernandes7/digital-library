import { ClimateApiResponse, getClimate } from "../services/climate";

export async function getTodayWeather(): Promise<ClimateApiResponse | null> {
  try {
    const response = await getClimate();

    const { temp } = response.main;
    const description = response.weather[0].description;
    const main = response.weather[0].main;
    const icon = response.weather[0].icon;
    const id = response.weather[0].id;

    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    const day = new Intl.DateTimeFormat("pt-BR", options).format(today);

    return {
      main: {
        temp,
      },
      weather: [
        {
          id,
          description,
          main,
          icon,
        },
      ],
      day,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Erro ao obter a previsão do tempo:", error.message);
    return null;
  }
}
