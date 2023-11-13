import axios from "axios";

export interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

export interface ClimateApiResponse {
  main: {
    temp: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  day: string;
}

export async function getClimate(): Promise<ClimateApiResponse> {
  const response = await axios.get<ClimateApiResponse>(
    `https://api.openweathermap.org/data/2.5/weather?q=${
      import.meta.env.VITE_CITY
    }&appid=${import.meta.env.VITE_API_KEY_WEATHER}`,
  );
  return response.data;
}
