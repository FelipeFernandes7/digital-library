import * as Chakra from "@chakra-ui/react";
import { characterLimit, formatPrice } from "../../helpers";

interface ProductProps {
  title: string;
  price: number;
  image: string;
  bestSeller: boolean;
}
export function Product({ title, price, image, bestSeller }: ProductProps) {
  return (
    <Chakra.Box
      transition={"all 0.3s ease"}
      bg={{ md: "#232323", base: "none" }}
      w={{ base: "100%", md: "400px" }}
      h={{ base: "10rem auto", md: "auto" }}
      p={{ base: "10px", md: "0.5rem" }}
      display={"flex"}
      justifyContent={{ md: "center", base: "flex-start" }}
      borderRadius={{ md: "0.5rem", base: "0" }}
      borderBottom={{ base: "1px solid #475569", md: "none" }}
      cursor={"pointer"}
      _hover={{
        transition: "all 0.3s ease",
        ".active-button": {
          display: { base: "block", md: "block" },
        },
      }}
    >
      <Chakra.Flex
        flexDirection={{ base: "row", md: "column" }}
        w={"100%"}
        gap={3}
      >
        <Chakra.Image
          alt="Livro"
          src={image}
          borderRadius={{ base: "0.3rem", md: "0.3rem" }}
          objectFit={"cover"}
          w={{ base: 120, md: "100%" }}
          h={{ base: 120, md: "200px" }}
        />
        <Chakra.Flex flexDirection={"column"} p={"10px"} w={"100%"} h={"100%"}>
          {bestSeller && (
            <Chakra.Flex
              bg={"#f97316"}
              w={"100%"}
              maxW={"80px"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"0.2rem"}
            >
              <Chakra.Text
                fontSize={"0.75rem"}
                whiteSpace={"pre-wrap"}
                fontWeight={400}
                color={"#ffff"}
                p={"1px"}
              >
                Mais Vendido
              </Chakra.Text>
            </Chakra.Flex>
          )}
          <Chakra.Text
            w={"100%"}
            fontSize={"1rem"}
            fontWeight={700}
            whiteSpace={"pre-wrap"}
          >
            {characterLimit({
              text: title ? title : "Sem Título",
              limit: 60,
            })}
          </Chakra.Text>
          <Chakra.Text
            fontSize={"1.5rem"}
            fontWeight={400}
            color={"#ffff"}
            mt={{ base: "0.5rem", md: "1rem" }}
          >
            {formatPrice({
              value: price,
              coin: "BRL",
            })}
          </Chakra.Text>
          <Chakra.Box
            mt={{ base: "0.5rem", md: "1.5rem" }}
            w={"100%"}
            h={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            width={"100%"}
          >
            <Chakra.Button
              className="active-button"
              display={{ base: "none", md: "block" }}
              cursor={"pointer"}
              _hover={{
                opacity: 0.8,
                transition: "all 0.3s ease",
              }}
              _active={{
                transition: "all 0.3s ease",
                transform: "scale(0.95)",
              }}
              h={{ base: "2rem", md: "3rem" }}
              bg={"#f97316"}
              color={"#ffff"}
              w={"100%"}
            >
              Ver Mais
            </Chakra.Button>
          </Chakra.Box>
        </Chakra.Flex>
      </Chakra.Flex>
    </Chakra.Box>
  );
}
