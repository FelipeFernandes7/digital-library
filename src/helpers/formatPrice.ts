interface FormatPriceProps {
  value: number;
  currency: "BRL" | "USD" | "EUR" | "GBP";
}
export function formatPrice({ value, currency }: FormatPriceProps) {
  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency,
  }).format(value);

  return formattedValue;
}
