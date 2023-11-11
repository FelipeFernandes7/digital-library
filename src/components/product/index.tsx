import * as Chakra from "@chakra-ui/react";
import { formatPrice } from "../../helpers/utils";

export function Product() {
  return (
    <Chakra.Card
      maxW="sm"
      color={"#fff"}
      bg={"#232323"}
      boxShadow={"rgba(0, 0, 0, 0.12) 0px 3px 8px"}
      cursor={"pointer"}
      zIndex={"1"}
    >
      <Chakra.CardBody>
        <Chakra.Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w={"full"}
          objectFit={"cover"}
        />
        <Chakra.Stack mt="6" spacing="3">
          <Chakra.Heading size="md">Living room Sofa</Chakra.Heading>
          <Chakra.Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Chakra.Text>
          <Chakra.Text color="green.600" fontWeight={"bold"} fontSize="2xl">
            {formatPrice({ value: 399, coin: "BRL" })}
          </Chakra.Text>
        </Chakra.Stack>
      </Chakra.CardBody>
      <Chakra.Divider />
      <Chakra.CardFooter>
        <Chakra.ButtonGroup
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"full"}
        >
          <Chakra.Button
            w={"full"}
            variant="solid"
            background={
              "radial-gradient(circle at 10% 20%, rgb(255, 131, 61) 0%, rgb(249, 183, 23) 90%)"
            }
            color={"white"}
            _hover={{
              opacity: 0.9,
              transition: "all 0.3s ease",
            }}
            _active={{
              transform: "scale(0.95)",
            }}
          >
            Comprar Agora
          </Chakra.Button>
        </Chakra.ButtonGroup>
      </Chakra.CardFooter>
    </Chakra.Card>
  );
}
