import * as Chakra from "@chakra-ui/react";
import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";

interface BestSellerProps {
  image: string;
  bookId: string;
}
export function BestSeller({ image, bookId }: BestSellerProps) {
  return (
    <Link
      to={`book-detail/${bookId}`}
      style={{ width: "100%", height: "100%" }}
    >
      <Chakra.Flex
        transition={"all 0.3s ease"}
        flexDirection={"column"}
        position={"relative"}
        cursor={"pointer"}
        width={{ md: 200, base: 150 }}
        _active={{
          transition: "all 0.3s ease",
          transform: "scale(0.95)",
        }}
      >
        <Chakra.Image
          w={{ md: 200, base: 150 }}
          h={{ md: 300, base: 250 }}
          objectFit={"cover"}
          src={image}
          borderRadius={"1.5rem"}
        />
        <Chakra.Icon
          color={"#fbbf24"}
          position={"absolute"}
          as={FaFire}
          top={4}
          right={4}
          fontSize={"1.5rem"}
        />
      </Chakra.Flex>
    </Link>
  );
}
