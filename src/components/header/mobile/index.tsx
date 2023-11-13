import * as Chakra from "@chakra-ui/react";
import { useAuth } from "../../../hooks";
import { ModalLogin } from "../../modal/modalLogin";
import { MdAdminPanelSettings } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { getGreetingMessage } from "../../../helpers/getGreeting";
import { useLocation, useNavigate } from "react-router-dom";

interface HeaderMobileProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export function HeaderMobile({ isOpen, onOpen, onClose }: HeaderMobileProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const { user, logOut } = useAuth();
  const signed = !!user;
  const isAdmin = path === "/admin";
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
            onClick={() => navigate("/")}
            w={"100%"}
            fontSize={"1rem"}
            fontWeight={700}
            color={"white"}
            cursor={"pointer"}
          >
            Livraria Digital
          </Chakra.Text>
        </Chakra.Flex>
        {signed && (
          <Chakra.Box cursor={"pointer"}>
            <Chakra.Icon
              onClick={() => navigate("/admin")}
              color={isAdmin ? "rgb(249, 183, 23) " : "white"}
              as={MdAdminPanelSettings}
              fontSize={"2rem"}
              _hover={{
                transition: "all 0.3s ease",
                opacity: 0.8,
              }}
            />
          </Chakra.Box>
        )}
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
              fontSize={"0.72rem"}
              fontWeight={700}
              borderRadius={{ base: "1rem", md: "2rem" }}
              background={
                "radial-gradient(circle at 10% 20%, rgb(255, 131, 61) 0%, rgb(249, 183, 23) 90%)"
              }
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
                color={"#fff"}
              />
            </Chakra.Button>
          )}
          <ModalLogin isOpen={isOpen} onClose={onClose} />
        </Chakra.Flex>
      </Chakra.Flex>
    </Chakra.Flex>
  );
}
