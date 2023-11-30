import * as Chakra from "@chakra-ui/react";

import { useLocation, useNavigate } from "react-router-dom";

import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../../hooks";
import { ModalLogin } from "../../modal/modalLogin";
import { MdAdminPanelSettings } from "react-icons/md";
interface HeaderDesktopProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export function HeaderDesktop({ isOpen, onOpen, onClose }: HeaderDesktopProps) {
  const { user, logOut } = useAuth();
  const signed = !!user;
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const isAdmin = path === "/admin";
  const isRecords = path === "/records";
  const isHome = path === "/";
  return (
    <Chakra.Flex w={"100vw"}>
      <Chakra.Flex
        w={"100%"}
        maxW={"64rem"}
        mx={"auto"}
        h={"5rem"}
        p={"15px"}
        bg={"#191919"}
        alignItems={"center"}
        borderRadius={"0.5rem"}
        boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
      >
        <Chakra.Text
          ml={"1rem"}
          cursor={"pointer"}
          fontSize={"1.2rem"}
          onClick={() => navigate("/")}
          whiteSpace={"nowrap"}
        >
          Livraria Digital
        </Chakra.Text>
        {signed && (
          <>
            <Chakra.Flex
              w={"100%"}
              gap={"1rem"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Chakra.Text
                onClick={() => navigate("/")}
                cursor={"pointer"}
                fontSize={"0.95rem"}
                color={isHome ? "#7918F2" : "white"}
              >
                Home
              </Chakra.Text>
              <Chakra.Text
                onClick={() => navigate("/admin")}
                cursor={"pointer"}
                fontSize={"0.95rem"}
                color={isAdmin ? "#7918F2" : "white"}
              >
                Admin
              </Chakra.Text>
              <Chakra.Text
                onClick={() => navigate("/records")}
                cursor={"pointer"}
                fontSize={"0.95rem"}
                color={isRecords ? "#7918F2" : "white"}
              >
                Registros
              </Chakra.Text>
            </Chakra.Flex>
            <Chakra.Button
              mr={"1rem"}
              aria-label="Sair"
              bg={"white"}
              onClick={logOut}
              gap={"0.5rem"}
              padding={"0.5rem"}
              fontSize={"0.72rem"}
              fontWeight={700}
              borderRadius={{ base: "1rem", md: "0.5rem" }}
              background="linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)"
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
          </>
        )}
        {!signed && (
          <Chakra.Flex
            w={"100%"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Chakra.Button
              color={"#ffff"}
              onClick={onOpen}
              gap={"0.3rem"}
              textAlign={"center"}
              padding={"0.5rem"}
              borderRadius={"0.5rem"}
              background="linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)"
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
          </Chakra.Flex>
        )}
      </Chakra.Flex>
      <ModalLogin isOpen={isOpen} onClose={onClose} placement={"bottom"} />
    </Chakra.Flex>
  );
}
