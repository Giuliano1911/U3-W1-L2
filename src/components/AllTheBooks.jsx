import fantasyBooks from '../books/fantasy.json'
import historyBooks from '../books/history.json'
import horrorBooks from '../books/horror.json'
import romanceBooks from '../books/romance.json'
import scifiBooks from '../books/scifi.json'
import { Component } from 'react'
import BookList from './BookList'
import { Row, Col } from 'react-bootstrap'

class AllTheBooks extends Component {
  books = {
    fantasy: fantasyBooks,
    history: historyBooks,
    horror: horrorBooks,
    romance: romanceBooks,
    scifi: scifiBooks,
  }

  bookGenres = Object.keys(this.books)

  state = {
    genre: this.bookGenres[0],
  }

  render() {
    return (
      <>
        <Row className=" justify-content-center">
          <Col className=" col-4 my-4">
            <select
              className=" w-100"
              value={this.state.genre}
              onChange={(e) => {
                this.setState({
                  genre: e.target.value,
                })
              }}
            >
              {this.bookGenres.map((bookGenre, i) => {
                return <option key={i}>{bookGenre}</option>
              })}
            </select>
          </Col>
        </Row>
        <BookList array={this.books[this.state.genre]} />
      </>
    )
  }
}
export default AllTheBooks
