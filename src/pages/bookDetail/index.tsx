import * as Chakra from "@chakra-ui/react";
import { SlideTransition } from "../../components/slideTransition";
import { useDisclosure } from "@chakra-ui/react";

import { FaBagShopping } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { ProductProps } from "../../context/ProductContext";
import { useParams } from "react-router-dom";
import { database } from "../../services";
import { get, ref } from "@firebase/database";
import { formatPrice } from "../../helpers";

export function BookDetail() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [product, setProduct] = useState<ProductProps>();
  const { id } = useParams();

  async function getProductById() {
    if (id) {
      const productRef = ref(database, `records/products/${id}`);
      const getProduct = await get(productRef);
      setProduct(getProduct.val());
    }
  }

  useEffect(() => {
    getProductById();
    return () => {
      getProductById();
    };
  }, [id]);
  return (
    <Chakra.Flex
      w={"100%"}
      flexDirection={"column"}
      mb={{ base: "5rem", md: "0" }}
      p={{ base: "24px", md: "2rem" }}
    >
      <Chakra.Flex
        w={"100%"}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "0", md: "2rem" }}
      >
        <Chakra.Image
          src={product?.image}
          alt={product?.title}
          w={{ md: 500, base: 350 }}
          height={{ md: 500, base: 450 }}
          objectFit={"cover"}
        />
        <Chakra.Box
          w={"100%"}
          display={"flex"}
          flexDirection={"column"}
          pt={{ base: "1.5rem", md: 0 }}
        >
          <Chakra.Flex w={"100%"} flexDirection={"column"} gap={"0.5rem"}>
            <Chakra.Text fontSize={"1.5rem"} fontWeight={700}>
              {product?.title.toUpperCase()}
            </Chakra.Text>
            <Chakra.Text>{product?.author}</Chakra.Text>
            <Chakra.Text>
              {formatPrice({
                value: product ? product.price : 0,
                currency: "BRL",
              })}
            </Chakra.Text>
            <Chakra.Button
              w={"100%"}
              maxW={"200px"}
              display={"flex"}
              justifyContent={"flex-start"}
              variant={"unstyled"}
              bg={"transparent"}
              color={"orange.500"}
              opacity={isOpen ? 0.5 : 1}
              _hover={{
                transition: "all 0.3s ease",
                color: "#fff",
              }}
              onClick={onToggle}
            >
              Ver Descrição
              <Chakra.Icon
                ml={"0.5rem"}
                as={isOpen ? IoIosArrowUp : IoIosArrowDown}
              />
            </Chakra.Button>

            <Chakra.Button
              w={"full"}
              maxW={"300px"}
              display={{ base: "none", md: "block" }}
              borderRadius={"2rem"}
              color={"white"}
              backgroundImage={
                "radial-gradient(circle at 10% 20%, rgb(255, 131, 61) 0%, rgb(249, 183, 23) 90%)"
              }
              fontSize={"1rem"}
              fontWeight={700}
              transition={"all 0.3s ease"}
              _active={{
                transform: "scale(0.95)",
              }}
              _hover={{
                opacity: 0.9,
              }}
            >
              Comprar Agora
              <Chakra.Icon ml={"0.5rem"} as={FaBagShopping} color={"white"} />
            </Chakra.Button>
          </Chakra.Flex>
          <Chakra.Flex
            w={"100%"}
            h={"100%"}
            mt={"1.5rem"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
            display={{ base: "block", md: "none" }}
          >
            <Chakra.Button
              borderRadius={"2rem"}
              w={"full"}
              color={"white"}
              backgroundImage={
                "radial-gradient(circle at 10% 20%, rgb(255, 131, 61) 0%, rgb(249, 183, 23) 90%)"
              }
              fontSize={"1rem"}
              fontWeight={700}
              transition={"all 0.3s ease"}
              _active={{
                transform: "scale(0.95)",
              }}
              _hover={{
                opacity: 0.9,
              }}
            >
              Comprar Agora
              <Chakra.Icon ml={"0.5rem"} as={FaBagShopping} color={"white"} />
            </Chakra.Button>
          </Chakra.Flex>
        </Chakra.Box>
      </Chakra.Flex>
      <SlideTransition isOpen={isOpen} onClose={onClose} direction={"bottom"}>
        <Chakra.Text fontSize={"1.5rem"} fontWeight={400}>
          {product?.description}
        </Chakra.Text>
      </SlideTransition>
    </Chakra.Flex>
  );
}
