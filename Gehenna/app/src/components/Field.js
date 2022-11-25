import React from 'react';

import "../styles/components/field.css";

class Field extends React.Component {
  render() {
    return (
      <>
        <div>
          <input
            className="field"
            placeholder={this.props.placeholder}
            type={this.props.type}
            minLength={this.props.minlength}
            maxLength={this.props.maxLength}
          />
        </div>
      </>
    );
  }
}

export default Field;