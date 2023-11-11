import { UserCredential } from "firebase/auth";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function removeArrayElementDuplicates(array: any[], prop: string) {
  const uniqueIds = new Set();
  const unique = array.filter((element) => {
    const isDuplicate = uniqueIds.has(element[prop]);
    uniqueIds.add(element[prop]);
    return !isDuplicate;
  });
  return unique;
}

function parseUser(userCred: UserCredential) {
  const { user } = userCred;
  const parsedUser = {
    name: user.displayName,
    avatar: user.photoURL,
    uid: user.uid,
  };
  return parsedUser;
}

interface FormatPriceProps {
  value: number;
  coin: "BRL" | "USD" | "EUR" | "GBP";
}
function formatPrice({ value, coin }: FormatPriceProps) {
  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: coin,
  }).format(value);

  return formattedValue;
}

export { removeArrayElementDuplicates, parseUser, formatPrice };
