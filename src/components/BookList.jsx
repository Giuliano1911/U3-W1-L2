import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import SingleBook from './SingleBook'

const BookList = (props) => {
  const [search, setSearch] = useState('')

  const filteredBooks = props.array
  return (
    <>
      <Row className=" justify-content-center">
        <Col className="col-4">
          <input
            type="text"
            className=" w-100"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        {filteredBooks
          .filter((book) =>
            book.title.toLowerCase().includes(search.toLowerCase().trim())
          )
          .map((book) => {
            return (
              <SingleBook
                key={book.asin}
                title={book.title}
                price={book.price}
                img={book.img}
                asin={book.asin}
              />
            )
          })}
      </Row>
    </>
  )
}
export default BookList
