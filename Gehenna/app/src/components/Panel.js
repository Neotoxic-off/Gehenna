import React from 'react';

import "../styles/components/panel.css";

class Panel extends React.Component {
  Content({data: Data}) {
    return (
      <Data/>
    )
  }
  render() {
    return (
      <>
        <div className="panel">
          <this.Content data={this.props.content}/>
        </div>
      </>
    );
  }
}

export default Panel;