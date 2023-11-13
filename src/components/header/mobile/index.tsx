import * as Chakra from "@chakra-ui/react";
import { useAuth } from "../../../hooks";
import { ModalLogin } from "../../modal/modalLogin";
import { MdAdminPanelSettings } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { getGreetingMessage } from "../../../helpers/getGreeting";

interface HeaderMobileProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export function HeaderMobile({ isOpen, onOpen, onClose }: HeaderMobileProps) {
  const { user, logOut } = useAuth();
  const signed = !!user;

  return (
    <Chakra.Flex
      w={"100%"}
      flexDirection={"column"}
      zIndex={"10"}
      mt={"0.5rem"}
      mb={"4rem"}
    >
      <Chakra.Flex
        w={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={"15px"}
      >
        <Chakra.Flex flexDirection={"column"}>
          <Chakra.Text
            fontSize={"1rem"}
            fontWeight={400}
            color={"white"}
            textAlign={"center"}
          >
            {getGreetingMessage()}
          </Chakra.Text>
          <Chakra.Text
            w={"100%"}
            fontSize={"1rem"}
            fontWeight={700}
            color={"white"}
          >
            Livraria Digital
          </Chakra.Text>
        </Chakra.Flex>
        <Chakra.Flex>
          {!signed ? (
            <Chakra.Button
              color={"#ffff"}
              onClick={onOpen}
              gap={"0.3rem"}
              textAlign={"center"}
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
              Acessar Admin
              <Chakra.Icon as={MdAdminPanelSettings} fontSize={"1rem"} />
            </Chakra.Button>
          ) : (
            <Chakra.Button
              aria-label="Sair"
              bg={"white"}
              onClick={logOut}
              gap={"0.5rem"}
              padding={"0.5rem"}
              borderRadius={"0.2rem"}
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
              <Chakra.Icon
                as={FiLogOut}
                fontSize={"1.5rem"}
                cursor={"pointer"}
                color={"#f97316"}
              />
            </Chakra.Button>
          )}
          <ModalLogin isOpen={isOpen} onClose={onClose} />
        </Chakra.Flex>
      </Chakra.Flex>
    </Chakra.Flex>
  );
}