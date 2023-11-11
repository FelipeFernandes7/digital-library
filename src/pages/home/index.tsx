import * as Chakra from "@chakra-ui/react";
import { Product } from "../../components/product";
export function Home() {
  return (
    <Chakra.Flex
      borderTopRadius={"1rem"}
      bg={"#131313"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={2}
      mt={{ base: "-50px", md: "0" }}
      zIndex={"50"}
      pt={"30px"}
    >
      <Chakra.Text color={"white"} fontWeight={700} fontSize={"1.5rem"}>
        Produtos
      </Chakra.Text>
      <Chakra.Flex
        gap={5}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        p={"10px"}
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Chakra.Flex>
    </Chakra.Flex>
  );
}
