import * as Chakra from "@chakra-ui/react";
import { ProductProps } from "../../../context/ProductContext";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { formatPrice } from "../../../helpers";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { AlertModal } from "../../modal/alert";
import { useProduct } from "../../../hooks";
import { useState } from "react";
import { ModalUpdate } from "../../modal/update";

interface TableDesktopProps {
  products: ProductProps[];
}
export function TableDesktop({ products }: TableDesktopProps) {
  const { onOpen, isOpen, onClose } = Chakra.useDisclosure();
  const {
    onOpen: onOpenEdit,
    isOpen: isOpenEdit,
    onClose: onCloseEdit,
  } = Chakra.useDisclosure();

  const { deleteProduct } = useProduct();
  const [productId, setProductId] = useState("");

  async function handleDeleteProduct(id: string) {
    try {
      await deleteProduct(id);
      setProductId("");
      onClose();
    } catch (error) {
      console.error("Error handling deleteProduct:", error);
    }
  }

  function handleOpen(id: string) {
    setProductId(id);
    onOpen();
  }
  return (
    <Chakra.TableContainer w={"100%"} borderRadius={"1rem"}>
      <Chakra.Table variant="unstyled" w={"100%"}>
        <Chakra.Thead bg={"#131313"} color={"#fff"} w={"100%"}>
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
                  currency: "BRL",
                })}
              </Chakra.Td>
              <Chakra.Td>
                {" "}
                <Chakra.Flex w={"100%"} gap={1} justifyContent={"flex-end"}>
                  <Chakra.Button
                    p={0}
                    onClick={onOpenEdit}
                    variant={"unstyled"}
                    cursor={"pointer"}
                    bg={"none"}
                    color={"#fbbf24"}
                    borderRadius={"1rem"}
                    textAlign={"center"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Chakra.Icon
                      as={FaEdit}
                      fontSize={"1.5rem"}
                      _active={{
                        transition: "all 0.3s ease",
                        transform: "scale(0.95)",
                      }}
                    />
                  </Chakra.Button>
                  <Chakra.Button
                    p={0}
                    onClick={() => handleOpen(product.id)}
                    variant={"unstyled"}
                    bg={"none"}
                    cursor={"pointer"}
                    color={"#ef4444"}
                    borderRadius={"1rem"}
                    textAlign={"center"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Chakra.Icon
                      as={MdDelete}
                      fontSize={"1.5rem"}
                      _active={{
                        transition: "all 0.3s ease",
                        transform: "scale(0.95)",
                      }}
                    />
                  </Chakra.Button>
                </Chakra.Flex>
              </Chakra.Td>
            </Chakra.Tr>
          ))}
        </Chakra.Tbody>
      </Chakra.Table>
      <AlertModal
        isOpen={isOpen}
        onClose={onClose}
        deleteProduct={() => handleDeleteProduct(productId)}
      />
      <ModalUpdate
        placement="bottom"
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
      />
    </Chakra.TableContainer>
  );
}
