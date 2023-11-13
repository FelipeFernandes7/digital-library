import * as Chakra from "@chakra-ui/react";
import { FaFire } from "react-icons/fa";

interface BestSellerProps {
  image: string;
}
export function BestSeller({ image }: BestSellerProps) {
  return (
    <Chakra.Flex
      flexDirection={"column"}
      position={"relative"}
      cursor={"pointer"}
      width={{ md: 200, base: 150 }}
    >
      <Chakra.Image
        w={{ md: 200, base: 150 }}
        h={{ md: 300, base: 250 }}
        objectFit={"cover"}
        src={image}
        borderRadius={"1.5rem"}
      />
      <Chakra.Icon
        color={"#f59e0b"}
        position={"absolute"}
        as={FaFire}
        top={4}
        right={4}
        fontSize={"1.5rem"}
      />
    </Chakra.Flex>
  );
}
