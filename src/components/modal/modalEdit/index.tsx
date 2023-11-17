import * as Chakra from "@chakra-ui/react";
import { ModalProps } from "../../../types";
import { TextField } from "../..";
import { useMediaQuery } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";

export function ModalEdit({ isOpen, onClose }: ModalProps) {
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <Chakra.Modal
      size={{ base: "sm", md: "md" }}
      isOpen={isOpen}
      onClose={onClose}
      motionPreset={isMobile ? "slideInBottom" : "slideInRight"}
    >
      <Chakra.ModalOverlay />
      <Chakra.ModalContent bg={"#0f172a"} borderRadius={"1.5rem"}>
        <Chakra.ModalHeader
          w={"100%"}
          gap={"1rem"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight={700}
          textAlign={"center"}
          backgroundImage={
            "radial-gradient(circle at 10% 20%, rgb(255, 131, 61) 0%, rgb(249, 183, 23) 90%)"
          }
          sx={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Editar Produto
          {
            <Chakra.Icon
              as={FaEdit}
              fontSize={"1.5rem"}
              color={"rgb(249, 183, 23)"}
            />
          }
        </Chakra.ModalHeader>
        <Chakra.ModalCloseButton />
        <Chakra.ModalBody pb={6}>
          <Chakra.Box
            w={"100%"}
            gap={"1rem"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <TextField
              label="Título"
              borderRadius={"1rem"}
              bg={"transparent"}
              color={"#fff"}
              border={"1px solid #fff"}
              placeholder="Título do Produto"
            />
            <TextField
              label="Descrição"
              borderRadius={"1rem"}
              bg={"transparent"}
              color={"#fff"}
              border={"1px solid #fff"}
              placeholder="Descrição do Produto"
            />
            <TextField
              label="Autor"
              borderRadius={"1rem"}
              bg={"transparent"}
              color={"#fff"}
              border={"1px solid #fff"}
              placeholder="Autor do Produto"
            />
            <TextField
              label="Preço"
              borderRadius={"1rem"}
              bg={"transparent"}
              color={"#fff"}
              border={"1px solid #fff"}
              placeholder="Preço do Produto"
            />
            <TextField
              label="Link da imagem"
              borderRadius={"1rem"}
              bg={"transparent"}
              color={"#fff"}
              border={"1px solid #fff"}
              placeholder="Link da imagem do Produto"
            />
            <TextField
              label="Link do Produto"
              borderRadius={"1rem"}
              bg={"transparent"}
              color={"#fff"}
              border={"1px solid #fff"}
              placeholder="Link do Produto"
            />
          </Chakra.Box>
        </Chakra.ModalBody>

        <Chakra.ModalFooter
          w={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"1rem"}
        >
          <Chakra.Button
            w={"100%"}
            border={"1px solid #fff"}
            bg={"transparent"}
            color={"#fff"}
            onClick={onClose}
            borderRadius={"2rem"}
            _active={{
              transition: "all 0.3s ease",
              transform: "scale(0.95)",
            }}
          >
            Cancelar
          </Chakra.Button>

          <Chakra.Button
            type="submit"
            borderRadius={"2rem"}
            w={"full"}
            color={"white"}
            backgroundImage={
              "radial-gradient(circle at 10% 20%, rgb(255, 131, 61) 0%, rgb(249, 183, 23) 90%)"
            }
            fontSize={"1rem"}
            fontWeight={700}
            transition={"all 0.3s ease"}
            _active={{
              transform: "scale(0.95)",
            }}
            _hover={{
              opacity: 0.9,
            }}
          >
            Salvar
          </Chakra.Button>
        </Chakra.ModalFooter>
      </Chakra.ModalContent>
    </Chakra.Modal>
  );
}
