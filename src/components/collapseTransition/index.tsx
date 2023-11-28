import { Box, Collapse } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CollapseTransitionProps {
  isOpen: boolean;
  children: ReactNode;
}
export function CollapseTransition({
  isOpen,
  children,
}: CollapseTransitionProps) {
  return (
    <Collapse in={isOpen} animateOpacity>
      <Box
        mb={"4"}
        display={{ md: "block", base: "none" }}
        color="white"
        bg="transparent"
        rounded="md"
        shadow="md"
      >
        {children}
      </Box>
    </Collapse>
  );
}
