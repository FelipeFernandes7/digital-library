import * as Chakra from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { TextField } from "../../textfield";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { z } from "zod";
import toast from "react-hot-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface ModalLoginProps {
  isOpen: boolean;
  onClose: () => void;
}
export function ModalLogin({ isOpen, onClose }: ModalLoginProps) {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
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
    <Chakra.Modal
      size={isMobile ? "xs" : "md"}
      isOpen={isOpen}
      onClose={onClose}
      motionPreset={isMobile ? "slideInBottom" : "slideInRight"}
    >
      <Chakra.ModalOverlay />
      <Chakra.ModalContent bg={"#191919"} borderRadius={"0.5rem"}>
        <Chakra.ModalHeader
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
        </Chakra.ModalHeader>
        <Chakra.ModalCloseButton />
        <Chakra.FormControl as={"form"} onSubmit={handleSubmit(onSubmit)}>
          <Chakra.ModalBody>
            <Chakra.FormControl>
              <Chakra.FormLabel>E-mail</Chakra.FormLabel>
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
            </Chakra.FormControl>

            <Chakra.FormControl mt={4}>
              <Chakra.FormLabel>Senha</Chakra.FormLabel>
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
            </Chakra.FormControl>
          </Chakra.ModalBody>

          <Chakra.ModalFooter
            w={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Chakra.Button
              type="submit"
              mt={3}
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
              {isLoading ? <Chakra.Spinner color="white" /> : "Entrar"}
            </Chakra.Button>
          </Chakra.ModalFooter>
        </Chakra.FormControl>
      </Chakra.ModalContent>
    </Chakra.Modal>
  );
}
