import * as Chakra from "@chakra-ui/react";
import { ClimateApiResponse } from "../../services/climate";
import { kelvinToCelsius } from "../../helpers/kelvinToCelsius";
import { getTodayWeather } from "../../helpers/getTodayWeather";
import { useEffect, useState } from "react";
import { FaCloudMoon, FaCloudSun, FaMoon } from "react-icons/fa";
import { BsSun, BsThermometerSun, BsSnow2, BsSunFill } from "react-icons/bs";

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export function Temperature() {
  const [weather, setWeather] = useState<ClimateApiResponse | null>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const weatherIcons: Record<string, React.ComponentType<any>> = {
    "01d": BsSun,
    "01n": FaMoon,
    "02d": FaCloudSun,
    "02n": FaCloudMoon,
  };

  function getWeatherIcon(iconCode: string): React.ReactNode | null {
    const IconComponent = weatherIcons[iconCode];
    return IconComponent ? <IconComponent /> : null;
  }

  const filteredWeatherIcons = weather?.weather.filter(
    (w: Weather) => weatherIcons[w.icon],
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getTodayWeather();

        if (response) {
          const temperatureCelsius = kelvinToCelsius(response.main.temp);

          const weatherWithCelsius: ClimateApiResponse = {
            ...response,
            main: {
              temp: temperatureCelsius,
            },
          };
          setWeather(weatherWithCelsius);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error("Erro ao obter a previsão do tempo:", error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <Chakra.Flex w={"100%"} alignItems={"center"}>
      {filteredWeatherIcons &&
        filteredWeatherIcons.map((w: Weather) => (
          <Chakra.Flex
            key={w.id}
            w={"100%"}
            gap={"0.2rem"}
            flexDirection={"column"}
            fontSize={"1.5rem"}
          >
            <Chakra.Text
              display={"flex"}
              gap={"0.5rem"}
              alignItems={"center"}
              fontWeight={700}
            >
              {weather?.main.temp}°C
              <Chakra.Box fontWeight={700}>{getWeatherIcon(w.icon)}</Chakra.Box>
            </Chakra.Text>
            <Chakra.Text>{w.description}</Chakra.Text>
            {weather && weather?.main.temp >= 33 && (
              <Chakra.Text
                display={"flex"}
                fontSize={"0.8rem"}
                color={"red.500"}
                gap={"0.5rem"}
              >
                Alerta, Calor intenso
                <Chakra.Icon as={BsThermometerSun} fontSize={"1.3rem"} />
              </Chakra.Text>
            )}
            {weather && weather?.main.temp <= 8 && (
              <Chakra.Text
                display={"flex"}
                fontSize={"0.8rem"}
                color={"blue.500"}
                gap={"0.5rem"}
              >
                Alerta, Frio Intenso
                <Chakra.Icon as={BsSnow2} fontSize={"1.3rem"} />
              </Chakra.Text>
            )}
          </Chakra.Flex>
        ))}
      {weather && weather?.main.temp >= 33 && (
        <Chakra.Icon
          as={BsSunFill}
          fontSize={"3.5rem"}
          mr={"2rem"}
          color={"red.500"}
        />
      )}
      {weather && weather?.main.temp <= 10 && (
        <Chakra.Icon
          as={BsSnow2}
          fontSize={"3.5rem"}
          color={"blue.500"}
          mr={"2rem"}
        />
      )}
    </Chakra.Flex>
  );
}
