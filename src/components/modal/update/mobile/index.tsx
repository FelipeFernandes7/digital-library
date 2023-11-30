import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  FormControl,
  Icon,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

import { FaEdit } from "react-icons/fa";
import { TextField } from "../../..";
import { useEffect, useState } from "react";
import { ProductProps } from "../../../../context/ProductContext";
import { getBookById } from "../../../../services/api";

interface UpdateMobileProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  placement: "bottom" | "top" | "left" | "right";
}
export function UpdateMobile({
  id,
  isOpen,
  onClose,
  placement,
}: UpdateMobileProps) {
  const [bestSeller, setBestSeller] = useState(false);
  const [newProduct, setNewProduct] = useState<ProductProps>({
    id: "",
    author: "",
    title: "",
    price: 0,
    image: "",
    description: "",
    productLink: "",
    isBestSeller: false,
    registeredBy: "",
    registeredIn: "",
  });
  const getById = async () => {
    if (newProduct) {
      const result = await getBookById(id);
      setNewProduct(result);
    }
  };

  useEffect(() => {
    getById();
    return () => {
      getById();
    };
  }, [isOpen]);

  const handleRadioChange = (value: string) => {
    setBestSeller(value === "true");
  };

  return (
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent bg={"#191919"} borderTopRadius={"1.5rem"}>
        <DrawerHeader
          borderBottomWidth="1px"
          fontWeight={700}
          textAlign={"center"}
          background="linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)"
          sx={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Editar Produto <Icon as={FaEdit} color={"#7918F2"} ml={2} />
        </DrawerHeader>
        <DrawerBody>
          <FormControl
            as={"form"}
            display={"flex"}
            flexDirection={"column"}
            mt={"1rem"}
            gap={"1rem"}
          >
            <TextField
              label="Imagem do Produto"
              placeholder="Cole o Link da Imagem Aqui..."
              value={newProduct?.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              bg={"#151515"}
              color={"#fff"}
              border={"none"}
            />
            <TextField
              label="Link do Produto"
              placeholder="Cole o Link do Produto Aqui..."
              value={newProduct?.productLink}
              onChange={(e) =>
                setNewProduct({ ...newProduct, productLink: e.target.value })
              }
              bg={"#151515"}
              color={"#fff"}
              border={"none"}
            />
            <TextField
              label="Título"
              placeholder="Escreva o Título Aqui..."
              value={newProduct?.title}
              onChange={(e) =>
                setNewProduct({ ...newProduct, title: e.target.value })
              }
              bg={"#151515"}
              color={"#fff"}
              border={"none"}
            />
            <TextField
              label="Descrição"
              placeholder="Escreva a Descrição Aqui..."
              value={newProduct?.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              bg={"#151515"}
              color={"#fff"}
              border={"none"}
            />
            <TextField
              label="Autor"
              placeholder="Escreva o Autor Aqui..."
              value={newProduct?.author}
              onChange={(e) =>
                setNewProduct({ ...newProduct, author: e.target.value })
              }
              bg={"#151515"}
              color={"#fff"}
              border={"none"}
            />
            <TextField
              type="number"
              label="Preço"
              placeholder="Escreva o Preço Aqui..."
              value={newProduct?.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: Number(e.target.value) })
              }
              bg={"#151515"}
              color={"#fff"}
              border={"none"}
            />
            <RadioGroup
              display={"flex"}
              flexDirection={"column"}
              defaultValue={bestSeller.toString()}
              onChange={handleRadioChange}
            >
              <Text mb={"0.5rem"}>O Produto está em Alta?</Text>
              <Stack direction="row" mb="4">
                <Radio colorScheme="green" value={"true"}>
                  Sim
                </Radio>
                <Radio colorScheme="red" value={"false"}>
                  Não
                </Radio>
              </Stack>
            </RadioGroup>
            <Flex
              w={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"1rem"}
            >
              <Button
                w={"100%"}
                h={"2.7rem"}
                border={"1px solid #fff"}
                bg={"transparent"}
                color={"#fff"}
                onClick={onClose}
                borderRadius={"0.5rem"}
                _active={{
                  transition: "all 0.3s ease",
                  transform: "scale(0.95)",
                }}
              >
                Cancelar
              </Button>

              <Button
                type="submit"
                h={"2.7rem"}
                w={"full"}
                color={"white"}
                borderRadius={"0.5rem"}
                background="linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)"
                transition={"all 0.3s ease"}
                _active={{
                  transform: "scale(0.95)",
                }}
                _hover={{
                  opacity: 0.9,
                }}
              >
                Salvar
              </Button>
            </Flex>
          </FormControl>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
