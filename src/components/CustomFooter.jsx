import { Container, Navbar } from 'react-bootstrap'

const CustomFooter = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container fluid className="justify-content-center">
        <p>{new Date().getFullYear()} - © Bookshop</p>
      </Container>
    </Navbar>
  )
}

export default CustomFooter
