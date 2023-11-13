import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import * as Chakra from "@chakra-ui/react";
import { useAuth } from "../../hooks";
interface PrivateProps {
  children: ReactNode;
}

export function Private({ children }: PrivateProps) {
  const { loadingAuth, user } = useAuth();
  const signed = !!user;
  if (loadingAuth) {
    return (
      <Chakra.Flex
        h="100vh"
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        align="center"
        justify="center"
      >
        <Chakra.Spinner size={"xl"} color="#fff" />
      </Chakra.Flex>
    );
  }
  if (!signed) {
    return <Navigate to={"/"} />;
  }
  return children;
}
