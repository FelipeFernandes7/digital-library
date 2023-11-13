interface FormatPriceProps {
  value: number;
  coin: "BRL" | "USD" | "EUR" | "GBP";
}
export function formatPrice({ value, coin }: FormatPriceProps) {
  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: coin,
  }).format(value);

  return formattedValue;
}
