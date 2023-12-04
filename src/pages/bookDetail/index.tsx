import * as Chakra from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import { FaBagShopping } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { ProductProps } from "../../context/ProductContext";
import { useParams } from "react-router-dom";
import { database } from "../../services";
import { get, ref } from "@firebase/database";
import { formatPrice } from "../../helpers";
import { CollapseTransition } from "../../components";

export function BookDetail() {
  const { isOpen, onToggle } = useDisclosure();
  const [product, setProduct] = useState<ProductProps>();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  async function getProductById() {
    if (id) {
      setLoading(true);
      const productRef = ref(database, `records/products/${id}`);
      const getProduct = await get(productRef);
      setProduct(getProduct.val());
      setLoading(false);
    }
  }

  function handleBuyProduct() {
    const productLink = product?.productLink;

    if (productLink) {
      window.location.href = productLink;
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
        <Chakra.Skeleton
          isLoaded={!loading}
          fadeDuration={1}
          borderRadius={"0.3rem"}
        >
          <Chakra.Image
            borderRadius={"0.3rem"}
            src={product?.image}
            alt={product?.title}
            w={{ md: 500, base: 350 }}
            height={{ md: 500, base: 450 }}
            objectFit={"cover"}
          />
        </Chakra.Skeleton>
        <Chakra.Box
          w={"100%"}
          display={"flex"}
          flexDirection={"column"}
          pt={{ base: "1.5rem", md: 0 }}
        >
          <Chakra.Flex w={"100%"} flexDirection={"column"} gap={"0.5rem"}>
            <Chakra.Skeleton
              isLoaded={!loading}
              fadeDuration={4}
              borderRadius={"1rem"}
            >
              <Chakra.Text
                fontSize={{ md: "1.5rem", base: "1rem" }}
                fontWeight={700}
                whiteSpace={"pre-wrap"}
                color={"#fff"}
              >
                {product?.title.toUpperCase()}
              </Chakra.Text>
              <Chakra.Text>{product?.author}</Chakra.Text>
              <Chakra.Text
                fontSize={"1.2rem"}
                fontWeight={"bold"}
                color={"#22c55e"}
                fontStyle={"italic"}
              >
                {formatPrice({
                  value: product ? product.price : 0,
                  currency: "BRL",
                })}
              </Chakra.Text>
            </Chakra.Skeleton>
            <Chakra.Button
              w={"100%"}
              maxW={"200px"}
              display={"flex"}
              justifyContent={"flex-start"}
              variant={"unstyled"}
              bg={"transparent"}
              color={"#cbd5e1"}
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
            <CollapseTransition isOpen={isOpen}>
              <Chakra.Text fontSize={"1rem"} fontWeight={400} color={"#fff"}>
                {product?.description}
              </Chakra.Text>
            </CollapseTransition>
            <Chakra.Button
              onClick={handleBuyProduct}
              w={"full"}
              maxW={"300px"}
              display={{ base: "none", md: "block" }}
              borderRadius={"0.5rem"}
              color={"white"}
              background="linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)"
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
              onClick={handleBuyProduct}
              borderRadius={"1.5rem"}
              w={"full"}
              h={"2.8rem"}
              color={"white"}
              background="linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)"
              fontSize={"0.95rem"}
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
    </Chakra.Flex>
  );
}
