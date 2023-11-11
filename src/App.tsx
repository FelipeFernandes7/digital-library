import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Layout } from "./components/layout";
import { Private } from "./components/private";
import { Admin } from "./pages/admin";
import { Error } from "./pages/error";

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
        path: "*",
        element: (
          <Error
            message={
              "Ops, parece que essa página não existe. Sentimos muito :'(, tente acessar a página inicial"
            }
          />
        ),
      },
    ],
  },
]);

export { router };
