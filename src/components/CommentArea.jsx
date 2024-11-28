import { Component } from 'react'
import AddComment from './AddComment'
import { Col, Card, Button, Spinner, Alert } from 'react-bootstrap'
const apiKey =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDBhMDhhZDEyOTAwMTU4NzZiYjEiLCJpYXQiOjE3MzE2NTc4ODgsImV4cCI6MTczMjg2NzQ4OH0.xQK6uAb_sB0o0F3MwMso74u56QBkTHd7Yggrfk3SM8Y'

class CommentArea extends Component {
  state = {
    comments: [],
    createNewComment: false,
    isLoading: true,
    isError: false,
  }

  getComments = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    )
      .then((response) => {
        console.log(response)
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('No ok')
        }
      })
      .then((data) => {
        console.log(data)
        this.setState({
          comments: data,
          isLoading: false,
        })
      })
      .catch((err) => {
        console.log('errore', err)
        this.setState({
          isLoading: false,
          isError: true,
        })
      })
  }

  deleteComment = (comment) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: apiKey,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log('Eliminato')
        } else {
          throw new Error('No ok')
        }
      })
      .catch((err) => {
        console.log('errore', err)
        this.setState({
          isLoading: false,
          isError: true,
        })
      })
  }

  componentDidMount() {
    this.getComments()
  }

  render() {
    return (
      <Col className="mt-3 col-6 col-md-4 col-lg-2 text-center">
        {this.state.isLoading && (
          <Spinner
            animation="border"
            role="status"
            variant="success"
            className="d-block m-3"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {this.state.isError && (
          <Alert variant="danger">Oops! Qualcosa è andato storto!😭</Alert>
        )}
        {this.state.comments.length
          ? this.state.comments.slice(0, 3).map((comment) => {
              return (
                <Card key={comment._id} className="text-center">
                  <Card.Title className="m-0">
                    rating: {comment.rate}
                  </Card.Title>
                  <Card.Text className="m-0">{comment.comment}</Card.Text>
                  <Card.Footer>
                    {comment.author}
                    <Button
                      variant="danger"
                      className="p-0"
                      onClick={(e) => {
                        this.deleteComment(comment)
                      }}
                    >
                      Elimina commento
                    </Button>
                  </Card.Footer>
                </Card>
              )
            })
          : !this.state.isLoading &&
            !this.state.isError && (
              <Card>
                <Card.Title>Non ci sono commenti</Card.Title>
              </Card>
            )}
        {!this.state.isLoading && !this.state.isError && (
          <Button
            variant="warning"
            onClick={(e) => {
              this.setState({ createNewComment: !this.state.createNewComment })
            }}
            className={`mt-2 ${this.state.createNewComment && 'd-none'}`}
          >
            Aggiungi commento
          </Button>
        )}
        {this.state.createNewComment && (
          <AddComment asin={this.props.asin} api={apiKey} />
        )}
      </Col>
    )
  }
}
export default CommentArea
