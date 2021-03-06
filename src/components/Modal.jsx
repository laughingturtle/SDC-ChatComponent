import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const chatContainerRoot = document.getElementById('main');
const modalRoot = document.getElementById('modal');

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.element = document.createElement('div');
  }
  componentDidMount() {
    modalRoot.appendChild(this.element);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.element
    );
  }
}