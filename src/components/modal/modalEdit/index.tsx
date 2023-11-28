import * as Chakra from "@chakra-ui/react";
import { TextField } from "../..";
import { useMediaQuery } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useProduct } from "../../../hooks";
import { ProductProps } from "../../../context/ProductContext";

interface ModalEditProps {
  isOpen: boolean;
  onClose: () => void;
  props: ProductProps;
}
export function ModalEdit({ isOpen, onClose, props }: ModalEditProps) {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const [bestSeller, setBestSeller] = useState(false);
  const { updateProduct } = useProduct();

  const schema = z.object({
    title: z.string(),
    author: z.string(),
    price: z.number(),
    description: z.string(),
    image: z.string(),
    productLink: z.string(),
  });
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    setValue("title", props?.title);
    setValue("author", props?.author);
    setValue("price", props?.price);
    setValue("description", props?.description);
    setValue("image", props?.image);
    setValue("productLink", props?.productLink);
  }, [isOpen]);

  async function handleOnSubmit(formValues: FormData) {
    const { title, author, price, image, description, productLink } =
      formValues;
    updateProduct({
      ...props,
      title,
      author,
      price,

      image,
      description,
      productLink,
      isBestSeller: bestSeller,
    });
  }

  return (
    <Chakra.Modal
      size={{ base: "sm", md: "md" }}
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior={isMobile ? "outside" : "inside"}
      motionPreset={isMobile ? "slideInBottom" : "slideInRight"}
    >
      <Chakra.ModalOverlay />
      <Chakra.ModalContent bg={"#0f172a"} borderRadius={"1.5rem"}>
        <Chakra.ModalHeader
          w={"100%"}
          gap={"1rem"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight={700}
          textAlign={"center"}
          backgroundImage={
            "radial-gradient(circle at 10% 20%, rgb(255, 131, 61) 0%, rgb(249, 183, 23) 90%)"
          }
          sx={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Editar Produto
          {
            <Chakra.Icon
              as={FaEdit}
              fontSize={"1.5rem"}
              color={"rgb(249, 183, 23)"}
            />
          }
        </Chakra.ModalHeader>
        <Chakra.ModalCloseButton />
        <Chakra.ModalBody pb={6}>
          <Chakra.Box
            as="form"
            onSubmit={handleSubmit(handleOnSubmit)}
            w={"100%"}
            gap={"1rem"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <TextField
              name="title"
              register={register}
              label="Título"
              borderRadius={"1rem"}
              bg={"transparent"}
              color={"#fff"}
              border={"1px solid #fff"}
              placeholder="Título do Produto"
              error={errors.title}
              value={getValues("title")}
            />
            <TextField
              name="description"
              register={register}
              label="Descrição"
              borderRadius={"1rem"}
              bg={"transparent"}
              color={"#fff"}
              border={"1px solid #fff"}
              placeholder="Descrição do Produto"
              error={errors.description}
            />
            <TextField
              name="author"
              register={register}
              label="Autor"
              borderRadius={"1rem"}
              bg={"transparent"}
              color={"#fff"}
              border={"1px solid #fff"}
              placeholder="Autor do Produto"
              error={errors.author}
            />
            <TextField
              name="price"
              type="number"
              register={register}
              label="Preço"
              borderRadius={"1rem"}
              bg={"transparent"}
              color={"#fff"}
              border={"1px solid #fff"}
              placeholder="Preço do Produto"
              error={errors.price}
            />
            <TextField
              name="image"
              register={register}
              label="Link da imagem"
              borderRadius={"1rem"}
              bg={"transparent"}
              color={"#fff"}
              border={"1px solid #fff"}
              placeholder="Link da imagem do Produto"
              error={errors.image}
            />
            <TextField
              name="productLink"
              register={register}
              label="Link do Produto"
              borderRadius={"1rem"}
              bg={"transparent"}
              color={"#fff"}
              border={"1px solid #fff"}
              placeholder="Link do Produto"
              error={errors.productLink}
            />
            <Chakra.Box display={"flex"} w={"100%"} flexDirection={"column"}>
              <Chakra.Text>Produto está em Alta?</Chakra.Text>
              <Chakra.Flex
                w={"100%"}
                mt={"0.5rem"}
                gap={"0.5rem"}
                alignItems={"center"}
              >
                <Chakra.Button
                  w={"100%"}
                  onClick={() => setBestSeller(true)}
                  variant={"unstyled"}
                  borderRadius={"2rem"}
                  border={!bestSeller ? "1px solid #22c55e" : "none"}
                  bg={bestSeller ? "#22c55e" : "transparent"}
                >
                  Sim
                </Chakra.Button>
                <Chakra.Button
                  w={"100%"}
                  onClick={() => setBestSeller(false)}
                  variant={"unstyled"}
                  borderRadius={"2rem"}
                  bg={!bestSeller ? "#e11d48" : "none"}
                  border={bestSeller ? "1px solid #e11d48" : "none"}
                >
                  Não
                </Chakra.Button>
              </Chakra.Flex>
            </Chakra.Box>
            <Chakra.Flex
              w={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"1rem"}
            >
              <Chakra.Button
                w={"100%"}
                border={"1px solid #fff"}
                bg={"transparent"}
                color={"#fff"}
                onClick={onClose}
                borderRadius={"2rem"}
                _active={{
                  transition: "all 0.3s ease",
                  transform: "scale(0.95)",
                }}
              >
                Cancelar
              </Chakra.Button>

              <Chakra.Button
                type="submit"
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
                Salvar
              </Chakra.Button>
            </Chakra.Flex>
          </Chakra.Box>
        </Chakra.ModalBody>
      </Chakra.ModalContent>
    </Chakra.Modal>
  );
}
