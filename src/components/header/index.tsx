import { useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { HeaderMobile } from "./mobile";
import { HeaderDesktop } from "./desktop";

export function Header() {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      {isMobile ? (
        <HeaderMobile isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      ) : (
        <HeaderDesktop isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      )}
    </>
  );
}
