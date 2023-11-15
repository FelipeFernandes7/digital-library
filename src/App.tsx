import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Layout } from "./components/layout";
import { Private } from "./components/private";
import { Admin } from "./pages/admin";
import { Error } from "./pages/error";
import { Records } from "./pages/records";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/admin",
        element: (
          <Private>
            <Admin />
          </Private>
        ),
      },
      {
        path: "/records",
        element: (
          <Private>
            <Records />
          </Private>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Error
        message={
          "Ops, parece que essa página não existe. Sentimos muito :'(, tente acessar a página inicial"
        }
      />
    ),
  },
]);

export { router };
