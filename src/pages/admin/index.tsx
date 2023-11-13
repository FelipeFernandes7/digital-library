import * as Chakra from "@chakra-ui/react";
import { Temperature } from "../../components/temperature";

export function Admin() {
  return (
    <Chakra.Flex flexDirection={"column"} alignItems={"center"}>
      <Chakra.Flex
        w={"100%"}
        justifyContent={"flex-start"}
        pl={"2rem"}
        mt={{ md: "1.5rem", base: "0" }}
      >
        <Temperature />
      </Chakra.Flex>
    </Chakra.Flex>
  );
}
