import * as Chakra from "@chakra-ui/react";
import { characterLimit, formatPrice } from "../../helpers";

export interface ProductProps {
  title: string;
  author: string;
  price: number;
  image: string;
  bestSeller: boolean;
  navigate: () => void;
}
export function Product({
  title,
  price,
  image,
  bestSeller,
  author,
  navigate,
}: ProductProps) {
  return (
    <Chakra.Box
      transition={"all 0.3s ease"}
      bg={{ md: "#191919", base: "none" }}
      w={{ base: "100%", md: "350px" }}
      h={{ base: "10rem auto", md: "auto" }}
      p={{ base: "10px", md: "0" }}
      display={"flex"}
      justifyContent={{ md: "center", base: "flex-start" }}
      borderRadius={{ md: "0.5rem", base: "0" }}
      borderBottom={{ base: "1px solid #1f2937", md: "none" }}
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
          borderRadius={{ base: "1rem", md: "0.5rem" }}
          objectFit={{ base: "cover", md: "cover" }}
          w={{ base: 120, md: "100%" }}
          h={{ base: 120, md: "200px" }}
          _hover={{
            objectFit: { md: "scale-down", base: "cover" },
            transform: { md: "scale(1.1)", base: "none" },
            transition: "all 0.3s ease",
          }}
        />
        <Chakra.Flex flexDirection={"column"} p={"15px"} w={"100%"} h={"100%"}>
          {bestSeller && (
            <Chakra.Flex
              bg={"#f97316"}
              w={"100%"}
              maxW={"80px"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"0.2rem"}
              mb={"0.1rem"}
            >
              <Chakra.Text
                fontSize={"0.65rem"}
                textAlign={"center"}
                whiteSpace={"nowrap"}
                fontWeight={600}
                color={"#ffff"}
                p={"2px"}
              >
                Mais Vendido
              </Chakra.Text>
            </Chakra.Flex>
          )}
          <Chakra.Text
            w={"100%"}
            fontSize={"1rem"}
            fontWeight={600}
            whiteSpace={"pre-wrap"}
          >
            {characterLimit({
              text: title ? title : "Sem Título",
              limit: 60,
            })}
          </Chakra.Text>
          <Chakra.Text
            mt={{ base: "0.2rem", md: "0.5rem" }}
            w={"100%"}
            fontSize={{ base: "0.8rem", md: "1rem" }}
            fontWeight={500}
            whiteSpace={"pre-wrap"}
            color={"#6b7280"}
          >
            {author}
          </Chakra.Text>
          <Chakra.Text
            fontSize={"1.5rem"}
            fontWeight={400}
            color={"#22c55e"}
            mt={{ base: "0.5rem", md: "1rem" }}
            fontStyle={"italic"}
          >
            {formatPrice({
              value: price,
              currency: "BRL",
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
            p={{ md: "0.5rem", base: "0" }}
          >
            <Chakra.Button
              fontSize={{ base: "0.8rem", md: "1rem" }}
              onClick={navigate}
              className="active-button"
              display={{ base: "none", md: "block" }}
              borderRadius={{ base: "1rem", md: "0.5rem" }}
              cursor={"pointer"}
              _hover={{
                opacity: 0.8,
                transition: "all 0.3s ease",
              }}
              _active={{
                transition: "all 0.3s ease",
                transform: "scale(0.95)",
              }}
              h={{ base: "2rem", md: "2.5rem" }}
              background="linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)"
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
