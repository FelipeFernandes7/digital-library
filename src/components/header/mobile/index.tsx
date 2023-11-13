import * as Chakra from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { ModalLogin } from "../../modal/modalLogin";
import { MdAdminPanelSettings } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

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
      h={"15rem"}
      w={"100%"}
      background={
        "radial-gradient(circle at 10% 20%, rgb(255, 131, 61) 0%, rgb(249, 183, 23) 90%)"
      }
      flexDirection={"column"}
      zIndex={"10"}
    >
      <Chakra.Flex w={"100%"} justifyContent={"space-between"} p={"10px"}>
        <Chakra.Text fontSize={"1.5rem"} fontWeight={700} color={"white"}>
          <Link to={"/"}>Livraria Digital</Link>
        </Chakra.Text>
        <Chakra.Flex>
          {!signed ? (
            <Chakra.Button
              color={"#f97316"}
              onClick={onOpen}
              gap={"0.5rem"}
              padding={"0.5rem"}
              borderRadius={"0.2rem"}
              background={"white"}
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
      <Chakra.Box
        display={"flex"}
        flexDirection={"column"}
        w={"100%"}
        p={"10px"}
      >
        <Chakra.Flex
          mt={"2rem"}
          bg={"white"}
          borderRadius={"0.5rem"}
          border={"1px solid white"}
          w={"100%"}
          pl={"10px"}
        >
          <Chakra.Input
            color={"black"}
            variant={"unstyled"}
            placeholder="Pesquisar"
          />
          <Chakra.Button bg={"transparent"}>
            <Chakra.Icon
              as={BiSearchAlt2}
              fontSize={"1.5rem"}
              _active={{
                transition: "all 0.3s ease",
                transform: "scale(0.95)",
              }}
            />
          </Chakra.Button>
        </Chakra.Flex>
      </Chakra.Box>
    </Chakra.Flex>
  );
}
