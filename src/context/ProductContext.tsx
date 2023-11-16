import { ReactNode, createContext, useEffect, useState } from "react";
import { onValue, ref, remove, update } from "firebase/database";
import { database } from "../services";
import toast from "react-hot-toast";
import { useAuth } from "../hooks";

interface ProductContextType {
  product: ProductProps[];
  isLoading: boolean;
  deleteProduct: (id: string) => void;
  updateProduct: (props: ProductProps) => void;
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
  const { user } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const productRef = ref(database, `records/products`);

      try {
        await onValue(productRef, (room) => {
          const dbProducts: ProductProps[] = (room && room.val()) || [];
          const parsedProducts: ProductProps[] = Object.entries(dbProducts).map(
            ([key, value]) => ({
              id: key.toString(),
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

  async function deleteProduct(id: string) {
    const productRef = ref(database, `records/products/${id}`);
    const removeProduct = await remove(productRef)
      .then(() => {
        toast.success("Produto excluído com sucesso!", {
          position: "top-center",
          style: {
            background: "#0f172a",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          style: {
            background: "#0f172a",
            color: "#fff",
          },
        });
      });
    return removeProduct;
  }

  async function updateProduct(props: ProductProps) {
    const productRef = ref(
      database,
      `records/${user?.uid}/products/${props.id}`,
    );
    await update(productRef, props)
      .then(() => {
        toast.success("Produto atualizado com sucesso!", {
          position: "top-center",
          style: {
            background: "#0f172a",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          style: {
            background: "#0f172a",
            color: "#fff",
          },
        });
      });
  }
  return (
    <ProductContext.Provider
      value={{
        product,
        isLoading,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
