import { Component } from 'react'
import { Col, Form, Button } from 'react-bootstrap'

class AddComment extends Component {
  state = {
    nuovo: {
      comment: '',
      rate: '',
      elementId: this.props.asin,
    },
  }

  newComment = (e) => {
    e.preventDefault()
    fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
      method: 'POST',
      body: JSON.stringify(this.state.nuovo),
      headers: {
        'Content-Type': 'application/JSON',
        Authorization: this.props.api,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('salvato')
        } else {
          throw new Error('No ok')
        }
      })
      .catch((err) => {
        console.log('errore', err)
      })
  }

  render() {
    return (
      <Col>
        <Form className="text-white" onSubmit={this.newComment}>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              placeholder="1-5"
              min={1}
              max={5}
              required
              value={this.state.nuovo.rate}
              onChange={(e) => {
                this.setState({
                  nuovo: {
                    ...this.state.nuovo,
                    rate: e.target.value + '',
                  },
                })
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Commento</Form.Label>
            <Form.Control
              type="text"
              placeholder="commento sul libro"
              required
              value={this.state.nuovo.comment}
              onChange={(e) => {
                this.setState({
                  nuovo: {
                    ...this.state.nuovo,
                    comment: e.target.value,
                  },
                })
              }}
            />
          </Form.Group>
          <Button type="submit" variant="success" className="mt-2">
            Aggiungi
          </Button>
        </Form>
      </Col>
    )
  }
}

export default AddComment
