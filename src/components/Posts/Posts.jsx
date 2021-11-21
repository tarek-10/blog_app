import React, { Component } from "react";
import img from "../../images/default.jpg";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import postStyle from "./posts.module.css";
import MyModal from "../Modal/MyModal";
export default class Posts extends Component {
  state = {
    posts: [],
    showModel: false,
    currentId: null,
  };
  getData = async () => {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({
      posts: data,
    });
    console.log(this.state.posts);
  };
  componentDidMount() {
    this.getData();
  }

  openShowModelHandler = () => {
    this.setState({ showModel: true });
  };
  closeShowHandler = () => {
    this.setState({ showModel: false });
  };
  openModelHanler = (id) => {
    this.openShowModelHandler();
    this.setState({
      currentId: id,
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className={postStyle.postTitle}>
              <h1 className={postStyle.text_primary}>Latest Posts</h1>
            </div>
          </div>
          <div className="row">
            {this.state.posts.map((value, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-6" key={value.id}>
                  <div className="items">
                    <Card style={{ width: "18rem" }} className={postStyle.test}>
                      <Card.Img variant="top" src={img} />
                      <Card.Body className="test">
                        <Card.Title>{value.title}</Card.Title>
                        <Card.Text>{value.body}</Card.Text>
                        <Button
                          className="w-100"
                          variant="primary"
                          onClick={() => this.openModelHanler(value.id)}
                        >
                          open post
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <MyModal
              showModel={this.state.showModel}
              closeShowHandler={this.closeShowHandler}
              id={this.state.currentId}
            />
          </div>
        </div>
      </>
    );
  }
}
