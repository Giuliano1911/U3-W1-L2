import CustomNavbar from './components/CustomNavbar'
import CustomFooter from './components/CustomFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App bg-dark">
      <header>
        <CustomNavbar />
      </header>
      <main>
        <Welcome />
        <Container fluid>
          <AllTheBooks />
        </Container>
      </main>
      <footer className="fixed-bottom">
        <CustomFooter />
      </footer>
    </div>
  )
}

export default App
