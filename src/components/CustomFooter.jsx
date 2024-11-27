import { Container, Navbar } from 'react-bootstrap'

const CustomFooter = () => {
  return (
    <Navbar bg="light" data-bs-theme="light" className="p-2">
      <Container fluid className="justify-content-center">
        <p className="m-0">{new Date().getFullYear()} - © Bookshop</p>
      </Container>
    </Navbar>
  )
}

export default CustomFooter
