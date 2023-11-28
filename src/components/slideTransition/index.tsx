import { Box, Button, Flex, Icon, Slide } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiCloseLine } from "react-icons/ri";

interface SlideTransitionProps {
  isOpen: boolean;
  onClose: () => void;
  direction: "bottom" | "top" | "left" | "right";
  children: ReactNode;
}
export function SlideTransition({
  isOpen,
  onClose,
  direction,
  children,
}: SlideTransitionProps) {
  return (
    <Slide direction={direction} in={isOpen} style={{ zIndex: 10 }}>
      <Box
        display={{ md: "none", base: "block" }}
        p="40px"
        color="white"
        mt="4"
        bg="#131313"
        rounded="md"
        shadow="md"
        position={"relative"}
        zIndex={10}
      >
        <Flex position={"absolute"} top={1} right={1}>
          <Button
            variant={"unstyled"}
            fontSize={"2rem"}
            bg={"transparent"}
            onClick={onClose}
            fontWeight={700}
            _active={{
              transition: "all 0.3s ease",
              transform: "scale(0.95)",
            }}
          >
            <Icon as={RiCloseLine} color={"#fff"} fontSize={"2rem"} />
          </Button>
        </Flex>
        {children}
      </Box>
    </Slide>
  );
}
