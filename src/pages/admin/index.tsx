import * as Chakra from "@chakra-ui/react";

export function Admin() {
  return (
    <Chakra.Flex flexDirection={"column"} alignItems={"center"}>
      <Chakra.Text>Admin</Chakra.Text>
      <Chakra.FormControl as={"form"} display={"flex"} flexDirection={"column"}>
        <Chakra.Text>Registrar Produto</Chakra.Text>
        <Chakra.Flex flexDirection={"column"}>
          <Chakra.Input placeholder="Email" />
          <Chakra.Input placeholder="Password" />
        </Chakra.Flex>
      </Chakra.FormControl>
    </Chakra.Flex>
  );
}
