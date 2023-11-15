import { useMediaQuery } from "@chakra-ui/react";
import { ProductProps } from "../../context/ProductContext";
import { TableMobile } from "./mobile";
import { TableDesktop } from "./desktop";

interface TableProps {
  products: ProductProps[];
}
export function Table({ products }: TableProps) {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      {isMobile ? (
        <TableMobile products={products} />
      ) : (
        <TableDesktop products={products} />
      )}
    </>
  );
}
