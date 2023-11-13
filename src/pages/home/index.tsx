import * as Chakra from "@chakra-ui/react";
import { Product } from "../../components/product";

export function Home() {
  const booksMock = [
    {
      id: "1",
      title: "The Great Adventure",
      author: "John Doe",
      price: 29.99,
      bestSeller: true,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      title: "Coding Chronicles",
      author: "Jane Smith",
      price: 19.99,
      bestSeller: false,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "3",
      title: "Mystery in the Mountains",
      author: "Bob Johnson",
      price: 24.99,
      bestSeller: false,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "4",
      title: "Space Odyssey",
      author: "Alice Rogers",
      price: 34.99,
      bestSeller: true,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "5",
      title: "Underwater Wonders",
      author: "Charlie Brown",
      price: 22.99,
      bestSeller: false,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "6",
      title: "The Quantum Quest",
      author: "Eva White",
      price: 27.99,
      bestSeller: false,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "7",
      title: "Cooking with Code",
      author: "Frank Green",
      price: 18.99,
      bestSeller: true,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "8",
      title: "Time Traveler's Dilemma",
      author: "Grace Turner",
      price: 31.99,
      bestSeller: false,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "9",
      title: "Robots vs. Aliens",
      author: "Henry Black",
      price: 26.99,
      bestSeller: false,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "10",
      title: "Sailing the Stars",
      author: "Ivy Davis",
      price: 39.99,
      bestSeller: true,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "11",
      title: "Invisible Ink",
      author: "Jackie Clark",
      price: 21.99,
      bestSeller: false,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "12",
      title: "The Art of Algorithms",
      author: "Kevin White",
      price: 28.99,
      bestSeller: true,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "13",
      title: "Zen of Zeroes and Ones",
      author: "Lily Turner",
      price: 23.99,
      bestSeller: false,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "14",
      title: "Culinary Code",
      author: "Mike Green",
      price: 36.99,
      bestSeller: false,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "15",
      title: "The Bug Hunter",
      author: "Nina Black",
      price: 32.99,
      bestSeller: true,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Chakra.Flex
      borderTopRadius={"1rem"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={{ base: "-50px", md: "0" }}
      zIndex={"50"}
      pt={"30px"}
      gap={2}
    >
      <Chakra.Text color={"white"} fontWeight={700} fontSize={"1.5rem"}>
        Produtos
      </Chakra.Text>
      <Chakra.Flex
        w={"100%"}
        gap={{ base: "0", md: "1rem" }}
        display={{ base: "flex", md: "flex" }}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ md: "center", base: "initial" }}
        flexWrap={{ md: "wrap", base: "nowrap" }}
      >
        {booksMock.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            bestSeller={product.bestSeller}
            author={product.author}
          />
        ))}
      </Chakra.Flex>
    </Chakra.Flex>
  );
}
