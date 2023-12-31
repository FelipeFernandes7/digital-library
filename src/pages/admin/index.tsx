import * as Chakra from "@chakra-ui/react";
import { Temperature } from "../../components/temperature";
import { TextField } from "../../components/textfield";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { push, ref } from "firebase/database";
import { database } from "../../services";
import { useAuth } from "../../hooks";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getGreetingMessage } from "../../helpers/getGreeting";

export function Admin() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [bestSeller, setBestSeller] = useState(false);

  const schema = z.object({
    title: z.string().nonempty("O campo título é obrigatório"),
    author: z.string().nonempty("O campo autor é obrigatório"),
    price: z.string(),
    description: z.string().nonempty("O campo descrição é obrigatório"),
    image: z.string().nonempty("O campo imagem é obrigatório"),
    productLink: z.string().nonempty("O campo Link do Produto é obrigatório"),
  });
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  async function handleOnSubmit(formValues: FormData) {
    const { title, author, price, image, description, productLink } =
      formValues;
    const productRef = ref(database, `records/products`);
    await push(productRef, {
      id: uuid(),
      title,
      author,
      price,
      image,
      description,
      productLink,
      registeredBy: user?.uid,
      isBestSeller: bestSeller,
      registeredIn: new Date().toISOString(),
    })
      .then(() => {
        toast.success("Produto cadastrado com sucesso!", {
          position: "top-center",
          style: {
            background: "#151515",
            color: "#fff",
          },
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          style: {
            background: "#151515",
            color: "#fff",
          },
        });
      });
  }

  return (
    <Chakra.Flex
      w={"100%"}
      mb={{ base: "5rem", md: "0" }}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Chakra.Flex
        w={"100%"}
        justifyContent={"flex-end"}
        pl={"2rem"}
        pt={"2rem"}
        gap={"1rem"}
        mt={{ md: "1.5rem", base: "0" }}
      >
        <Chakra.Flex w={"100%"} flexDirection={"column"}>
          <Chakra.Text
            w={"100%"}
            display={"flex"}
            justifyContent={"flex-start"}
            fontSize={"1.5rem"}
            fontWeight={400}
            color={"white"}
            textAlign={"center"}
          >
            {getGreetingMessage()}
          </Chakra.Text>
          <Temperature />
        </Chakra.Flex>
      </Chakra.Flex>
      <Chakra.Box
        as="form"
        mt={"1rem"}
        onSubmit={handleSubmit(handleOnSubmit)}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={{ md: "#191919", base: "none" }}
        borderRadius={"0.5rem"}
        width={{ md: "650px", base: "100%" }}
        mb={{ md: "1rem", base: "0" }}
      >
        <Chakra.Text
          w={"100%"}
          p={"15px"}
          display={"flex"}
          fontSize={"1.5rem"}
          justifyContent={{ base: "flex-start", md: "center" }}
          fontWeight={600}
          background="linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)"
          sx={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Cadastrar Produto
        </Chakra.Text>
        <Chakra.Flex
          flexDirection={"column"}
          gap={"1rem"}
          w={"100%"}
          p={"15px"}
          maxW={{ md: "400px", base: "100%" }}
        >
          <TextField
            border={"none"}
            label="Link da Imagem do Produto"
            name="image"
            register={register}
            h={"3rem"}
            borderRadius={"0.5rem"}
            variant={"unstyled"}
            bg={{ md: "#131313", base: "#191919" }}
            w={"full"}
            placeholder="Link da Imagem do Produto"
            error={errors.image}
          />
          <TextField
            border={"none"}
            label="Link do Produto"
            name="productLink"
            register={register}
            h={"3rem"}
            borderRadius={"0.5rem"}
            variant={"unstyled"}
            bg={{ md: "#131313", base: "#191919" }}
            w={"full"}
            placeholder="Link do Produto"
            error={errors.productLink}
          />
          <TextField
            h={"3rem"}
            w={"full"}
            label="Título"
            name="title"
            border={"none"}
            register={register}
            borderRadius={"0.5rem"}
            variant={"unstyled"}
            bg={{ md: "#131313", base: "#191919" }}
            placeholder="Título"
            error={errors.title}
          />
          <TextField
            h={"3rem"}
            w={"full"}
            label="Autor"
            name="author"
            border={"none"}
            register={register}
            borderRadius={"0.5rem"}
            variant={"unstyled"}
            bg={{ md: "#131313", base: "#191919" }}
            placeholder="Autor"
            error={errors.author}
          />
          <TextField
            h={"3rem"}
            w={"full"}
            border={"none"}
            label="Descrição"
            name="description"
            register={register}
            borderRadius={"0.5rem"}
            variant={"unstyled"}
            bg={{ md: "#131313", base: "#191919" }}
            placeholder="Descrição"
            error={errors.description}
          />
          <TextField
            h={"3rem"}
            w={"full"}
            type="text"
            border={"none"}
            inputMode="numeric"
            label="Preço"
            name="price"
            register={register}
            borderRadius={"0.5rem"}
            variant={"unstyled"}
            bg={{ md: "#131313", base: "#191919" }}
            placeholder="Preço"
            error={errors.price}
          />
          <Chakra.Box display={"flex"} w={"100%"} flexDirection={"column"}>
            <Chakra.Text>Produto está em Alta?</Chakra.Text>
            <Chakra.Flex
              w={"100%"}
              mt={"0.5rem"}
              gap={"0.5rem"}
              border={"none"}
              alignItems={"center"}
            >
              <Chakra.Button
                w={"100%"}
                onClick={() => setBestSeller(true)}
                variant={"unstyled"}
                borderRadius={"0.5rem"}
                color={!bestSeller ? "#22c55e" : "white"}
                border={!bestSeller ? "1px solid #22c55e" : "none"}
                bg={bestSeller ? "#22c55e" : "transparent"}
              >
                Sim
              </Chakra.Button>
              <Chakra.Button
                w={"100%"}
                onClick={() => setBestSeller(false)}
                color={bestSeller ? "#e11d48" : "white"}
                variant={"unstyled"}
                borderRadius={"0.5rem"}
                bg={!bestSeller ? "#e11d48" : "none"}
                border={bestSeller ? "1px solid #e11d48" : "none"}
              >
                Não
              </Chakra.Button>
            </Chakra.Flex>
          </Chakra.Box>

          <Chakra.Button
            type="submit"
            w={"100%"}
            h={"2.7rem"}
            color={"white"}
            gap={"0.5rem"}
            padding={"0.5rem"}
            borderRadius={"0.5rem"}
            background="linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)"
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
            Cadastrar
          </Chakra.Button>
        </Chakra.Flex>
      </Chakra.Box>
    </Chakra.Flex>
  );
}
