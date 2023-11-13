import * as Chakra from "@chakra-ui/react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { MdAdminPanelSettings } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../../hooks";
import { ModalLogin } from "../../modal/modalLogin";
import logo from "/book.png";
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
  return (
    <Chakra.Flex
      w={"100%"}
      h={"5rem"}
      p={"1rem"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Chakra.Text
        w={"100%"}
        gap={2}
        display={"flex"}
        alignItems={"center"}
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
        <Link to={"/"}>
          <Chakra.Image h={50} w={50} objectFit={"cover"} src={logo} />
        </Link>
        <Link to={"/"}>Livraria Digital</Link>
      </Chakra.Text>
      {signed && (
        <Chakra.Box
          cursor={"pointer"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Chakra.Icon
            onClick={() => navigate("/admin")}
            color={isAdmin ? "rgb(249, 183, 23) " : "white"}
            as={MdAdminPanelSettings}
            fontSize={"2.5rem"}
            _hover={{
              transition: "all 0.3s ease",
              opacity: 0.8,
            }}
          />
        </Chakra.Box>
      )}

      <Chakra.Flex w={"100%"} justifyContent={"flex-end"}>
        {!signed ? (
          <Chakra.Button
            color={"white"}
            onClick={onOpen}
            gap={"0.5rem"}
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
            color={"white"}
            onClick={logOut}
            gap={"0.5rem"}
            padding={"0.5rem"}
            borderRadius={{ base: "1rem", md: "2rem" }}
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
