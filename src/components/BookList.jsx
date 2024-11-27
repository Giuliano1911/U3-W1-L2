import { Row, Col } from 'react-bootstrap'
import { Component } from 'react'
import SingleBook from './SingleBook'

class BookList extends Component {
  state = {
    search: '',
  }

  render() {
    const filteredBooks = this.props.array
    return (
      <>
        <Row className=" justify-content-center">
          <Col className="col-4">
            <input
              type="text"
              className=" w-100"
              value={this.state.search}
              onChange={(e) => {
                this.setState({
                  search: e.target.value,
                })
              }}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          {filteredBooks
            .filter((book) =>
              book.title.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map((book) => {
              return (
                <SingleBook
                  key={book.asin}
                  title={book.title}
                  price={book.price}
                  img={book.img}
                />
              )
            })}
        </Row>
      </>
    )
  }
}
export default BookList
