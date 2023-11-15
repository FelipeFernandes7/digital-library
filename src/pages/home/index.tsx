import * as Chakra from "@chakra-ui/react";
import { Product } from "../../components/product";
import { BestSeller } from "../../components/bestseller";
import { useProduct } from "../../hooks";

export function Home() {
  const { product, isLoading } = useProduct();
  const bestSellers = product.filter((book) => book.isBestSeller);
  return (
    <Chakra.Flex
      w={"100%"}
      mb={{ base: "5rem", md: "0" }}
      borderTopRadius={"1rem"}
      flexDirection={"column"}
      alignItems={"center"}
      zIndex={"50"}
      pt={"30px"}
      gap={2}
      overflowX={"hidden"}
    >
      <Chakra.Text
        w={"100%"}
        display={"flex"}
        alignItems={{ base: "flex-start", md: "center" }}
        justifyContent={{ base: "flex-start", md: "center" }}
        color={"white"}
        fontWeight={700}
        fontSize={"1.5rem"}
        ml={{ base: "1.5rem", md: "1.5rem" }}
      >
        Em Alta 🔥
      </Chakra.Text>
      <Chakra.Box
        gap={{ md: 4, base: 2 }}
        overflowX={"auto"}
        mb={"1.5rem"}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        maxW={"100%"}
        p={2}
        sx={{
          "> div": {
            flex: "0 0 auto",
          },
        }}
      >
        {bestSellers.length > 0 &&
          bestSellers.map((item) => (
            <BestSeller key={item.id} image={item.image} />
          ))}
        {isLoading && (
          <Chakra.Flex
            justifyContent={"center"}
            alignItems={"center"}
            w={"100%"}
            h={"100%"}
          >
            <Chakra.Spinner color="white" fontSize={"x-large"} />
          </Chakra.Flex>
        )}
      </Chakra.Box>
      <Chakra.Text
        w={"100%"}
        display={"flex"}
        alignItems={{ base: "flex-start", md: "center" }}
        justifyContent={{ base: "flex-start", md: "center" }}
        color={"white"}
        fontWeight={700}
        fontSize={"1.5rem"}
        ml={{ base: "1.5rem", md: "1.5rem" }}
      >
        Todos os Livros
      </Chakra.Text>
      <Chakra.Flex
        w={"100%"}
        gap={{ base: "0", md: "1rem" }}
        display={{ base: "flex", md: "flex" }}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ md: "center", base: "initial" }}
        flexWrap={{ md: "wrap", base: "nowrap" }}
      >
        {product.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            bestSeller={item.isBestSeller}
            author={item.author}
          />
        ))}
      </Chakra.Flex>
    </Chakra.Flex>
  );
}
