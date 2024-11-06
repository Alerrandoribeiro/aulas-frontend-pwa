import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Rodape from "./comum/componentes/Rodape/Rodape";
import BotaoIncrementar from "./paginas/PaginaInicial/BotaoIncrementar/BotaoIncrementar";
import BotaoIncrementarDecrementar from "./paginas/PaginaInicial/BotaoIncrementarDecrementar/BotaoIncrementarDecrementar";
import ListaProdutos from "./paginas/PaginaInicial/ListasProdutos/ListaProdutos";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PaginaListaTarefas from "./paginas/PaginaInicial/PaginaListaTarefas/PaginaListaTarefas";
import Cabecalho from "./comum/componentes/cabecalho/Cabecalho";
import PaginaDesafioComponentes from "./PaginaDesafioComponentes/PaginaDesafioComponentes";
import PaginaListaClientes from "./paginas/PaginaInicial/PaginaListaClientes/PaginaListaClientes";
import PaginaCadastroClientes from "./paginas/PaginaCadastroClientes/PaginaCadastroClientes";

const router = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "lista-produtos",
    element: <ListaProdutos />,
  },
  {
    path: "botao-incrementar",
    element: <BotaoIncrementar />,
  },
  {
    path: "botao-incrementar-decrementar",
    element: <BotaoIncrementarDecrementar />,
  },
  {
    path: "lista-tarefa",
    element: <PaginaListaTarefas />,
  },
  {
    path: "pagina-desafio-componentes",
    element: <PaginaDesafioComponentes/>,
  },
  {
    path: "lista-clientes",
    element: <PaginaListaClientes/>,
  },
  {
    path: "/lista-cadastro-clientes/:id?",
    element: <PaginaCadastroClientes/>,
  },
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
    </>
  );
}

export default App;
