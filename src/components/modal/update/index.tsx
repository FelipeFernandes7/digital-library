import { useMediaQuery } from "@chakra-ui/react";
import { UpdateMobile } from "./mobile";
import { UpdateDesktop } from "./desktop";

interface ModalUpdateProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  placement: "bottom" | "top" | "left" | "right";
}
export function ModalUpdate({
  isOpen,
  onClose,
  placement,
  id,
}: ModalUpdateProps) {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      {isMobile ? (
        <UpdateMobile
          isOpen={isOpen}
          onClose={onClose}
          placement={placement}
          id={id}
        />
      ) : (
        <UpdateDesktop isOpen={isOpen} onClose={onClose} id={id} />
      )}
    </>
  );
}
