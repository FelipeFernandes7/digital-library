import * as Chakra from "@chakra-ui/react";
import { IoAlertCircle } from "react-icons/io5";
interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function AlertModal({ isOpen, onClose }: AlertModalProps) {
  return (
    <Chakra.Modal
      size={{ base: "xs", md: "md" }}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Chakra.ModalOverlay />
      <Chakra.ModalContent bg={"#0f172a"} color={"#fff"}>
        <Chakra.ModalHeader
          display={"flex"}
          alignItems={"center"}
          gap={"0.5rem"}
          color={"#dc2626"}
        >
          Excluir Produto <Chakra.Icon as={IoAlertCircle} fontSize={"1.5rem"} />{" "}
        </Chakra.ModalHeader>
        <Chakra.ModalCloseButton />
        <Chakra.ModalBody>
          <Chakra.Text
            w={"100%"}
            display={"flex"}
            alignItems={"center"}
            whiteSpace={"pre-wrap"}
            textAlign={"center"}
          >
            Ao realizar esta ação, seu produto será excluído permanentemente do
            banco de dados, deseja continuar?
          </Chakra.Text>
        </Chakra.ModalBody>

        <Chakra.ModalFooter
          w={"100%"}
          display={"flex"}
          alignItems={"center"}
          gap={"1rem"}
        >
          <Chakra.Button
            w={"100%"}
            border={"1px solid #fff"}
            bg={"transparent"}
            color={"#fff"}
            onClick={onClose}
            borderRadius={"1rem"}
            _active={{
              transition: "all 0.3s ease",
              transform: "scale(0.95)",
            }}
          >
            Nâo
          </Chakra.Button>
          <Chakra.Button
            w={"100%"}
            color={"#fff"}
            borderRadius={"1rem"}
            _active={{
              transition: "all 0.3s ease",
              transform: "scale(0.95)",
            }}
            background={
              "radial-gradient(circle at 10% 20%, rgb(255, 131, 61) 0%, rgb(249, 183, 23) 90%)"
            }
          >
            Sim
          </Chakra.Button>
        </Chakra.ModalFooter>
      </Chakra.ModalContent>
    </Chakra.Modal>
  );
}
