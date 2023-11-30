import { useMediaQuery } from "@chakra-ui/react";
import { LoginMobile } from "./mobile";
import { LoginDesktop } from "./desktop";

interface ModalLoginProps {
  isOpen: boolean;
  onClose: () => void;
  placement: "bottom" | "top" | "left" | "right";
}
export function ModalLogin({ isOpen, onClose, placement }: ModalLoginProps) {
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <>
      {isMobile ? (
        <LoginMobile isOpen={isOpen} onClose={onClose} placement={placement} />
      ) : (
        <LoginDesktop isOpen={isOpen} onClose={onClose} />
      )}
    </>
  );
}
