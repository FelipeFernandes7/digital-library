import * as Chakra from "@chakra-ui/react";

import { Link, useLocation } from "react-router-dom";

import { MdAdminPanelSettings } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../../hooks";
import { ModalLogin } from "../../modal/modalLogin";

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

  return (
    <Chakra.Flex
      w={"100%"}
      h={"5rem"}
      p={"1rem"}
      alignItems={"center"}
      justifyContent={"space-between"}
      bg={"#e5e7eb"}
    >
      <Chakra.Text
        fontSize={"1.5rem"}
        fontWeight={700}
        bg={"rgb(255, 131, 61)"}
        backgroundImage={
          "radial-gradient(circle at 10% 20%, rgb(255, 131, 61) 0%, rgb(249, 183, 23) 90%)"
        }
        sx={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <Link to={"/"}>Livraria Digital</Link>
      </Chakra.Text>
      {signed && (
        <Chakra.Text
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          fontSize={"1rem"}
          fontWeight={700}
          textDecoration={
            path === "/admin" ? "underline rgb(255, 131, 61)" : "none"
          }
          _hover={{
            transition: "all 0.3s ease",
            color: "rgb(249, 183, 23)",
          }}
        >
          <Link to={"/admin"}>Admin</Link>
        </Chakra.Text>
      )}
      <Chakra.Flex>
        {!signed ? (
          <Chakra.Button
            color={"white"}
            onClick={onOpen}
            gap={"0.5rem"}
            padding={"0.5rem"}
            borderRadius={"0.2rem"}
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
            color={"white"}
            onClick={logOut}
            gap={"0.5rem"}
            padding={"0.5rem"}
            borderRadius={"0.2rem"}
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
            <Chakra.Icon
              color={"white"}
              as={FiLogOut}
              fontSize={"1.5rem"}
              cursor={"pointer"}
            />
          </Chakra.Button>
        )}
        <ModalLogin isOpen={isOpen} onClose={onClose} />
      </Chakra.Flex>
    </Chakra.Flex>
  );
}
