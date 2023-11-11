import * as Chakra from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface ErrorProps {
  message: string;
}
export function Error({ message }: ErrorProps) {
  const navigate = useNavigate();
  return (
    <Chakra.Flex
      p={"10px"}
      h={"100%"}
      alignItems="center"
      justifyContent="center"
      flexDirection={"column"}
    >
      <Chakra.Text mt={10} fontSize={"3xl"} fontWeight={700}>
        {message}...
      </Chakra.Text>
      <Chakra.Button
        onClick={() => navigate("/")}
        mt={3}
        color={"white"}
        padding={"0.5rem"}
        borderRadius={"0.2rem"}
        background={
          "radial-gradient(circle at 10% 20%, rgb(255, 131, 61) 0%, rgb(249, 183, 23) 90%)"
        }
        sx={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
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
        Voltar á página inicial
      </Chakra.Button>
    </Chakra.Flex>
  );
}
