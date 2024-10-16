import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Rodape from './comum/componentes/Rodape/Rodape';
import Cabecalho from './comum/componentes/Cabecalho/Cabecalho';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import ListaProdutos from './paginas/PaginaInicial/ListasProdutos/ListaProdutos';
import BotaoIncrementar from './paginas/PaginaInicial/BotaoIncrementar/BotaoIncrementar';
import BotaoIncrementarDecrementar from './paginas/PaginaInicial/BotaoIncrementarDecrementar/BotaoIncrementarDecrementar';
import PaginaListaTarefas from './paginas/PaginaInicial/PaginaListaTarefas/PaginaListaTarefas';



const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaInicial />,
  },
  {
    path: 'lista-produtos',
    element: <ListaProdutos />,
  },
  {
    path: 'botao-incrementar',
    element: <BotaoIncrementar />,
  },
  {
    path: 'botao-incrementar-decrementar',
    element: <BotaoIncrementarDecrementar />,
  },
  {
    path: 'lista-tarefa',
    element: <PaginaListaTarefas />,
  }
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
