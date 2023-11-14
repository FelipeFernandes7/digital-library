import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ProductContext } from "../context/ProductContext";

export const useAuth = () => useContext(AuthContext);
export const useProduct = () => useContext(ProductContext);
