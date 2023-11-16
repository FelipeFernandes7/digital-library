import * as Chakra from "@chakra-ui/react";
import { Table } from "../../components/table";
import { useProduct } from "../../hooks";

export function Records() {
  const { product } = useProduct();
  return (
    <Chakra.Box
      display={"flex"}
      width={"100%"}
      flexDirection={"column"}
      mb={{ base: "5rem", md: "0" }}
    >
      <Table products={product} />
    </Chakra.Box>
  );
}
