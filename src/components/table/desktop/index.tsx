import * as Chakra from "@chakra-ui/react";
import { ProductProps } from "../../../context/ProductContext";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { formatPrice } from "../../../helpers";

interface TableDesktopProps {
  products: ProductProps[];
}
export function TableDesktop({ products }: TableDesktopProps) {
  return (
    <Chakra.TableContainer w={"100%"} borderRadius={"1rem"}>
      <Chakra.Table variant="unstyled" w={"100%"}>
        <Chakra.Thead bg={"#27272a"} color={"#fff"} w={"100%"}>
          <Chakra.Tr border={"none"}>
            <Chakra.Th>Registrado em</Chakra.Th>
            <Chakra.Th>Produto</Chakra.Th>
            <Chakra.Th>Título</Chakra.Th>
            <Chakra.Th>Preço</Chakra.Th>
            <Chakra.Th>Ações</Chakra.Th>
          </Chakra.Tr>
        </Chakra.Thead>
        <Chakra.Tbody>
          {products.map((product) => (
            <Chakra.Tr key={product.id}>
              <Chakra.Td>
                {format(new Date(product.registeredIn), "dd/MM/yyyy", {
                  locale: ptBR,
                })}
              </Chakra.Td>
              <Chakra.Td>
                <Chakra.Image
                  src={product.image}
                  borderRadius={"1rem"}
                  objectFit={"cover"}
                  h={20}
                  w={20}
                />
              </Chakra.Td>
              <Chakra.Td>{product.title}</Chakra.Td>
              <Chakra.Td>
                {formatPrice({
                  value: product.price,
                  coin: "BRL",
                })}
              </Chakra.Td>
              <Chakra.Td>Ação</Chakra.Td>
            </Chakra.Tr>
          ))}
        </Chakra.Tbody>
      </Chakra.Table>
    </Chakra.TableContainer>
  );
}
