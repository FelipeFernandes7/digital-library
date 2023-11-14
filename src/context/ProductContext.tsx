import { ReactNode, createContext, useEffect, useState } from "react";
import { useAuth } from "../hooks";
import { onValue, ref } from "firebase/database";
import { database } from "../services";

interface ProductContextType {
  product: ProductProps[];
  isLoading: boolean;
}

interface ProductProviderProps {
  children: ReactNode;
}
interface ProductProps {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
  description: string;
  isBestSeller: boolean;
}
export const ProductContext = createContext({} as ProductContextType);

export function ProductProvider({ children }: ProductProviderProps) {
  const [product, setProduct] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      if (user) {
        setIsLoading(true);
        const productRef = ref(database, `records/${user.uid}/products`);

        try {
          await onValue(productRef, (room) => {
            const dbProducts: ProductProps[] = (room && room.val()) || [];
            const parsedProducts: ProductProps[] = Object.entries(
              dbProducts,
            ).map(([key, value]) => ({
              id: value.id || key.toString(),
              author: value.author,
              image: value.image,
              price: value.price,
              title: value.title,
              description: value.description,
              isBestSeller: value.isBestSeller,
            }));
            setProduct(parsedProducts);
            console.log(parsedProducts);
          });
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchProducts();
  }, [user]);

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
