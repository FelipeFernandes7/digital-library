import * as Chakra from "@chakra-ui/react";
import { Product } from "../../components/product";
export function Home() {
  const title =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula mattis tristique. Aliquam et commodo metus, eu porttitor eros. Ut at sapien nibh. Vestibulum diam nulla, ultrices eget libero at, lacinia tincidunt sapien. Etiam odio velit, tempor vel semper";
  return (
    <Chakra.Flex
      background={
        "linear-gradient(to top, #232323 0%, black 100%) no-repeat center center fixed"
      }
      borderTopRadius={"1rem"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={{ base: "-50px", md: "0" }}
      zIndex={"50"}
      pt={"30px"}
      gap={2}
    >
      <Chakra.Text color={"white"} fontWeight={700} fontSize={"1.5rem"}>
        Produtos
      </Chakra.Text>
      <Chakra.Flex
        w={"100%"}
        gap={{ base: "0", md: "1rem" }}
        display={{ base: "flex", md: "flex" }}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ md: "center", base: "initial" }}
        flexWrap={{ md: "wrap", base: "nowrap" }}
      >
        <Product
          title={title}
          price={500}
          image={"https://picsum.photos/800/600"}
          bestSeller={true}
        />
        <Product
          title={title}
          price={1000}
          image={"https://picsum.photos/800/600"}
          bestSeller={false}
        />
        <Product
          title={title}
          price={29.45}
          image={"https://picsum.photos/800/600"}
          bestSeller={false}
        />
        <Product
          title={title}
          price={5}
          image={"https://picsum.photos/800/600"}
          bestSeller={false}
        />
      </Chakra.Flex>
    </Chakra.Flex>
  );
}
