import * as Chakra from "@chakra-ui/react";
import { useAuth } from "../../../hooks";
import { ModalLogin } from "../../modal/modalLogin";
import { MdAdminPanelSettings } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";

interface HeaderMobileProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export function HeaderMobile({ isOpen, onOpen, onClose }: HeaderMobileProps) {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const location = useLocation();
  const path = location.pathname;
  const signed = !!user;
  const isAdmin = path === "/admin";
  const isRecords = path === "/records";
  const isHome = path === "/";
  return (
    <Chakra.Flex
      w={"100vw"}
      flexDirection={"column"}
      position={"fixed"}
      bottom={0}
      zIndex={"5"}
      mt={"0.5rem"}
      bg={"#0c0a09"}
      borderTopRadius={"1.5rem"}
      boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
    >
      <Chakra.Flex
        w={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={"15px"}
      >
        <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
          <Chakra.Icon
            as={FaBookOpen}
            fontSize={"2rem"}
            color={isHome ? "#7918F2" : "#fff"}
          />
        </Link>
        {signed && (
          <Chakra.Flex width={"100%"} justifyContent={"space-evenly"}>
            <Chakra.Box
              cursor={"pointer"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Chakra.Icon
                onClick={() => navigate("/admin")}
                color={isAdmin ? "#7918F2 " : "white"}
                as={MdAdminPanelSettings}
                fontSize={"2rem"}
                _hover={{
                  transition: "all 0.3s ease",
                  opacity: 0.8,
                }}
              />
            </Chakra.Box>
            <Chakra.Box
              cursor={"pointer"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Chakra.Icon
                onClick={() => navigate("/records")}
                color={isRecords ? "#7918F2 " : "white"}
                as={FaListUl}
                fontSize={"1.5rem"}
                _hover={{
                  transition: "all 0.3s ease",
                  opacity: 0.8,
                }}
              />
            </Chakra.Box>
          </Chakra.Flex>
        )}
        <Chakra.Flex>
          {!signed ? (
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
          ) : (
            <Chakra.Button
              aria-label="Sair"
              bg={"white"}
              onClick={logOut}
              gap={"0.5rem"}
              padding={"0.5rem"}
              fontSize={"0.72rem"}
              fontWeight={700}
              borderRadius={"0.5rem"}
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
          )}
          <ModalLogin isOpen={isOpen} onClose={onClose} />
        </Chakra.Flex>
      </Chakra.Flex>
    </Chakra.Flex>
  );
}
