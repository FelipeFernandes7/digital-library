import { ReactNode, createContext, useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../services";

interface ProductContextType {
  product: ProductProps[];
  isLoading: boolean;
}

interface ProductProviderProps {
  children: ReactNode;
}
export interface ProductProps {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
  description: string;
  isBestSeller: boolean;
  registeredBy: string;
  registeredIn: string;
}
export const ProductContext = createContext({} as ProductContextType);

export function ProductProvider({ children }: ProductProviderProps) {
  const [product, setProduct] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const productRef = ref(database, `records/products`);

      try {
        await onValue(productRef, (room) => {
          const dbProducts: ProductProps[] = (room && room.val()) || [];
          const parsedProducts: ProductProps[] = Object.entries(dbProducts).map(
            ([key, value]) => ({
              id: value.id || key.toString(),
              author: value.author,
              image: value.image,
              price: value.price,
              title: value.title,
              description: value.description,
              isBestSeller: value.isBestSeller,
              registeredBy: value.registeredBy,
              registeredIn: value.registeredIn,
            }),
          );
          setProduct(parsedProducts);
          console.log(parsedProducts);
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        product,
        isLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
