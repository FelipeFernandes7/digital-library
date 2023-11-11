import { useEffect } from "react";
import * as Chakra from "@chakra-ui/react";
import { useDisclosure, useMediaQuery } from "@chakra-ui/react";

import { Link, useLocation } from "react-router-dom";
import { ModalLogin } from "../modal/modalLogin";
import { useAuth } from "../../hooks";

import { Error } from "../../pages/error";

import { MdAdminPanelSettings } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

export function Header() {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const { user, logOut } = useAuth();
  const signed = !!user;
  const location = useLocation();
  const path = location.pathname;
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  function permissionDenied() {
    if (!signed && path === "/admin") {
      return (
        <Error
          message={"Ops, você não tem permissão para acessar essa página"}
        />
      );
    }
  }

  useEffect(() => {
    permissionDenied();
  }, [path]);

  return (
    <>
      {!isMobile && (
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
      )}
      {isMobile && (
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
      )}
    </>
  );
}
