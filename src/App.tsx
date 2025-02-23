import { Provider } from 'react-redux'
import { Aside } from './containers/Aside'
import { TaskList } from './containers/TaskList'
import { Container, GlobalStyle } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Aside />
        <TaskList />
      </Container>
    </Provider>
  )
}

export default App
