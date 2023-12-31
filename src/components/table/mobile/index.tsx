import * as Chakra from "@chakra-ui/react";
import { ProductProps } from "../../../context/ProductContext";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { formatPrice } from "../../../helpers";
import { AlertModal } from "../../modal/alert";
import { useState } from "react";
import { useProduct } from "../../../hooks";
import { ModalUpdate } from "../../modal/update";

interface TableMobileProps {
  products: ProductProps[];
}

export function TableMobile({ products }: TableMobileProps) {
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

  function handleOpenUpdateModal(id: string) {
    setProductId(id);
    onOpenEdit();
  }
  return (
    <Chakra.Flex flexDirection={"column"} w={"100%"} p={"10px"} gap={3}>
      {products.map((product) => (
        <Chakra.Box
          key={product.id}
          w={"100%"}
          p={"10px"}
          display={"flex"}
          bg={"#191919"}
          borderRadius={"1rem"}
          boxShadow={" rgba(0, 0, 0, 0.1) 0px 4px 12px"}
        >
          <Chakra.Flex gap={3} w={"100%"}>
            <Chakra.Image
              src={product.image}
              h={100}
              w={100}
              borderRadius={"0.5rem"}
            />
            <Chakra.Flex flexDirection={"column"} gap={1} w={"100%"}>
              <Chakra.Text
                display={"flex"}
                flexDirection={"column"}
                whiteSpace={"pre-wrap"}
                w={"100%"}
                gap={"0.3rem"}
              >
                {product.title}
                <Chakra.Text
                  w={"100%"}
                  whiteSpace={"nowrap"}
                  color={"#fff"}
                  fontWeight={600}
                >
                  {formatPrice({
                    value: product.price,
                    currency: "BRL",
                  })}
                </Chakra.Text>
              </Chakra.Text>
              <Chakra.Text
                w={"100%"}
                whiteSpace={"nowrap"}
                mt={"0.5rem"}
                display={"flex"}
                h={"100%"}
                flexDirection={"column"}
                justifyContent={"flex-end"}
              >
                {format(new Date(product.registeredIn), "dd/MM/yyyy", {
                  locale: ptBR,
                })}
              </Chakra.Text>
            </Chakra.Flex>
          </Chakra.Flex>
          <Chakra.Flex w={"100%"} gap={1} justifyContent={"flex-end"}>
            <Chakra.Button
              p={0}
              onClick={() => handleOpenUpdateModal(product.id)}
              variant={"unstyled"}
              cursor={"pointer"}
              bg={"none"}
              color={"#7918F2"}
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
        </Chakra.Box>
      ))}
      <AlertModal
        isOpen={isOpen}
        onClose={onClose}
        deleteProduct={() => handleDeleteProduct(productId)}
      />
      <ModalUpdate
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
        placement={"bottom"}
        id={productId}
      />
    </Chakra.Flex>
  );
}
