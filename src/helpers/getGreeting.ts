import { getHours } from "date-fns";

function getGreeting(hour: number) {
  if (hour >= 6 && hour < 12) {
    return "Bom Dia ☀";
  } else if (hour >= 12 && hour < 18) {
    return "Boa Tarde ☀";
  } else {
    return "Boa Noite 🌙";
  }
}

export function getGreetingMessage() {
  const currentHour = getHours(new Date());
  const greeting = getGreeting(currentHour);

  return `${greeting}`;
}
