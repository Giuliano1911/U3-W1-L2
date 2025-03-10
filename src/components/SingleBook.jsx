import { Card, Col } from 'react-bootstrap'
import { Component } from 'react'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <>
        <Col className="col-6 col-md-4 col-lg-2 d-flex mt-3">
          <Card
            role="button"
            onClick={(e) => {
              this.setState({ selected: !this.state.selected })
            }}
            className={this.state.selected && 'bg-danger'}
          >
            <Card.Img variant="top" src={this.props.img} />
            <Card.Body className=" d-flex flex-column justify-content-between">
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Footer>{this.props.price}</Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        {this.state.selected && (
          <CommentArea
            title={this.props.title}
            price={this.props.price}
            img={this.props.img}
            asin={this.props.asin}
          />
        )}
      </>
    )
  }
}
export default SingleBook
