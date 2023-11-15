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
            background: "#232323",
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
            background: "#232323",
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
      <Chakra.ModalContent bg={"#27272a"} borderRadius={"1.5rem"}>
        <Chakra.ModalHeader
          w={"100%"}
          fontWeight={700}
          bg={"rgb(255, 131, 61)"}
          textAlign={"center"}
          backgroundImage={
            "radial-gradient(circle at 10% 20%, rgb(255, 131, 61) 0%, rgb(249, 183, 23) 90%)"
          }
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
                borderColor={"#181818"}
                borderRadius={"2rem"}
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
                borderColor={"#181818"}
                borderRadius={"2rem"}
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
              {isLoading ? <Chakra.Spinner color="white" /> : "Entrar"}
            </Chakra.Button>
          </Chakra.ModalFooter>
        </Chakra.FormControl>
      </Chakra.ModalContent>
    </Chakra.Modal>
  );
}
