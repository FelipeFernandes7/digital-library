import { get, ref } from "firebase/database";
import { database } from ".";
import { ProductProps } from "../context/ProductContext";

export async function getBookById(id: string): Promise<ProductProps> {
  const productRef = ref(database, `records/products/${id}`);
  const getProduct = await get(productRef);

  return getProduct.val();
}
