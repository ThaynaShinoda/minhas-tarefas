import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Container, GlobalStyle } from './styles'
import store from './store'
import { Home } from './pages/Home'
import { Cadastro } from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1>404 Not found</h1>
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
