import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Rodape from './comum/componentes/Rodape/Rodape';
import Cabecalho from './comum/componentes/Cabecalho/Cabecalho';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import ListaProdutos from './paginas/PaginaInicial/ListasProdutos/ListaProdutos';



const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaInicial />,
  },
    {
      path: 'lista-produtos',
      element: <ListaProdutos/>,
    }
 ]);
 

function App() {

  return (
    <>
    <Cabecalho/>
    <RouterProvider router={router} />
    <Rodape/>
  </>
  );
}

export default App;
