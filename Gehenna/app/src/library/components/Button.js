import React from 'react';

import "../styles/Button.css";

class Button extends React.Component {
  render() {
    return (
      <>
        <a className={this.props.type} href={this.props.link}>
          {this.props.text}
        </a>
      </>
    );
  }
}

export default Button;