import * as Chakra from "@chakra-ui/react";
import { Temperature } from "../../components/temperature";
import { TextField } from "../../components/textfield";

export function Admin() {
  return (
    <Chakra.Flex w={"100%"} flexDirection={"column"} alignItems={"center"}>
      <Chakra.Flex
        w={"100%"}
        justifyContent={"flex-start"}
        pl={"2rem"}
        mt={{ md: "1.5rem", base: "0" }}
      >
        <Temperature />
      </Chakra.Flex>
      <Chakra.Box
        as="form"
        mt={"1rem"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={{ md: "#27272a", base: "none" }}
        borderRadius={"2rem"}
        width={{ md: "650px", base: "100%" }}
        mb={{ md: "1rem", base: "0" }}
      >
        <Chakra.Text
          w={"100%"}
          display={"flex"}
          fontSize={"1.5rem"}
          justifyContent={{ base: "flex-start", md: "center" }}
          p={"15px"}
        >
          Cadastrar Produto
        </Chakra.Text>
        <Chakra.Flex
          flexDirection={"column"}
          gap={"1rem"}
          w={"100%"}
          p={"15px"}
          maxW={{ md: "400px", base: "100%" }}
        >
          <TextField
            h={"3rem"}
            borderRadius={"2rem"}
            variant={"unstyled"}
            bg={"transparent"}
            border={"1px solid #525252"}
            w={"full"}
            placeholder="Imagem do Produto"
          />
          <TextField
            h={"3rem"}
            borderRadius={"2rem"}
            variant={"unstyled"}
            bg={"transparent"}
            border={"1px solid #525252"}
            w={"full"}
            placeholder="Título"
          />
          <TextField
            h={"3rem"}
            borderRadius={"2rem"}
            variant={"unstyled"}
            bg={"transparent"}
            border={"1px solid #525252"}
            w={"full"}
            placeholder="Autor"
          />
          <TextField
            h={"3rem"}
            borderRadius={"2rem"}
            variant={"unstyled"}
            bg={"transparent"}
            border={"1px solid #525252"}
            w={"full"}
            placeholder="Descrição"
          />
          <TextField
            h={"3rem"}
            borderRadius={"2rem"}
            variant={"unstyled"}
            bg={"transparent"}
            border={"1px solid #525252"}
            w={"full"}
            placeholder="Preço"
          />
          <TextField
            h={"3rem"}
            borderRadius={"2rem"}
            variant={"unstyled"}
            bg={"transparent"}
            border={"1px solid #525252"}
            w={"full"}
            placeholder="Mais vendido?"
          />
          <Chakra.Button
            w={"100%"}
            color={"white"}
            gap={"0.5rem"}
            padding={"0.5rem"}
            borderRadius={"2rem"}
            background={
              "radial-gradient(circle at 10% 20%, rgb(255, 131, 61) 0%, rgb(249, 183, 23) 90%)"
            }
            fontSize={"0.72rem"}
            fontWeight={700}
            transition={"all 0.3s ease"}
            _active={{
              transform: "scale(0.95)",
            }}
            _hover={{
              opacity: 0.9,
            }}
          >
            Cadastrar
          </Chakra.Button>
        </Chakra.Flex>
      </Chakra.Box>
    </Chakra.Flex>
  );
}
