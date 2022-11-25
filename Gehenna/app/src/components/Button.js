import React from 'react';

import "../styles/components/button.css";

class Button extends React.Component {
  render() {
    return (
      <>
        <form action={this.props.link}>
          <button type="submit" className="button">
            {this.props.text}
          </button>
        </form>
      </>
    );
  }
}

export default Button;