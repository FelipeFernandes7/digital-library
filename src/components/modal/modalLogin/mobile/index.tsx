import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Spinner,
} from "@chakra-ui/react";
import { z } from "zod";
import { useState } from "react";
import { useAuth } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TextField } from "../../..";

import toast from "react-hot-toast";

interface LoginMobileProps {
  isOpen: boolean;
  onClose: () => void;
  placement: "bottom" | "top" | "left" | "right";
}
export function LoginMobile({ isOpen, onClose, placement }: LoginMobileProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();

  const schema = z.object({
    email: z
      .string()
      .email("Informe um e-mail válido")
      .nonempty("O e-mail é obrigatório"),
    password: z.string().nonempty("O campo senha é obrigatório"),
  });

  type FormData = z.infer<typeof schema>;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  function onSubmit(formData: FormData) {
    setIsLoading(true);
    const { email, password } = formData;
    signIn(email, password)
      .then(() => {
        toast.success("Login efetuado com sucesso", {
          position: "top-center",
          style: {
            background: "#151515",
            color: "#fff",
          },
        });

        setIsLoading(false);
        navigate("/admin");
        onClose();
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          style: {
            background: "#151515",
            color: "#fff",
          },
        });
        setIsLoading(false);
      });
  }
  return (
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent h={"65vh"} bg={"#191919"} borderTopRadius={"1.5rem"}>
        <DrawerHeader
          borderBottomWidth="1px"
          w={"100%"}
          fontWeight={700}
          textAlign={"center"}
          background="linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)"
          sx={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Entrar como Administrador
        </DrawerHeader>
        <DrawerBody>
          <FormControl
            overflowY={"hidden"}
            mt={4}
            w={"100%"}
            height={"100%"}
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            display={"flex"}
            flexDirection={"column"}
          >
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <TextField
                border={"none"}
                bg={"#232323"}
                borderRadius={"0.5rem"}
                type="email"
                name="email"
                register={register}
                placeholder="example@gmail.com"
                error={errors.email}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Senha</FormLabel>
              <TextField
                border={"none"}
                borderRadius={"0.5rem"}
                bg={"#232323"}
                type="password"
                name="password"
                register={register}
                placeholder="digite sua senha"
                error={errors.password}
              />
            </FormControl>
            <Flex
              flexDirection={"column"}
              w={"100%"}
              h={"100%"}
              justifyContent={"center"}
            >
              <Button
                type="submit"
                borderRadius={"0.5rem"}
                w={"full"}
                color={"white"}
                background="linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)"
                fontSize={"0.95rem"}
                transition={"all 0.3s ease"}
                _active={{
                  transform: "scale(0.95)",
                }}
                _hover={{
                  opacity: 0.9,
                }}
              >
                {isLoading ? <Spinner color="white" /> : "Entrar"}
              </Button>
            </Flex>
          </FormControl>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
