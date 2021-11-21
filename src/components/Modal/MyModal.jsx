import axios from "axios";
import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
export default class MyModal extends Component {
  state = {
    post: null,
  };

  async componentDidUpdate(prevState) {
    console.log("from componentDidUpdate", prevState);

    if (this.props.id && this.props.id !== prevState.id) {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${this.props.id}`
      );
      console.log("data", data);
      this.setState({
        post: data,
      });
    }
  }

  renderPostsHandler = () => {
    if (this.state.post) {
      return (
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.props.showModel}
          onHide={this.props.closeShowHandler}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.state.post.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Post Content</h4>
            <p>{this.state.post.body}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeShowHandler}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  };
  render() {
    // console.log(this.props);
    return <>{this.renderPostsHandler()}</>;
  }
}
