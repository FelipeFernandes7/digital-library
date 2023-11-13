import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
background: #18181b;
background-size: cover;
color: #ffff;
font-family: "Poppins";
}

&::-webkit-scrollbar {
width: 5px;
}

&::-webkit-scrollbar-track {
background: transparent;
}

&::-webkit-scrollbar-thumb {
background-color: transparent;
border-radius: 15px;
border: none;
}
`;
