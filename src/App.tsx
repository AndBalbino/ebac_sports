import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'

import { store } from './store'

/*Alterar o gerenciamento de estado do projeto que está sendo o "useState" para um gerenciamento com Redux. Você precisará:
usar o Redux Toolkit;
criar um slice para o carrinho;
utilizar o Redux Toolkit Query para as requisições;
utilizar o useSelector;
utilizar o useDispatch.*/

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos favoritos={favoritos} />
      </div>
    </Provider>
  )
}

export default App
