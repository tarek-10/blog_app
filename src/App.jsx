import React, { Component } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Posts />
        <Footer />
      </>
    );
  }
}
