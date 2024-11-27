import { Container } from 'react-bootstrap'
import { Component } from 'react'

class Welcome extends Component {
  render() {
    return (
      <Container className="text-white d-flex align-items-center flex-column mt-5">
        <h1>Bookshop</h1>
        <h5>Compra Libri</h5>
      </Container>
    )
  }
}

export default Welcome
