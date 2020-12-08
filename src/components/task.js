import React from 'react';

class Task extends React.Component {
    render() {
      return (
        <div>
          Hello, {this.props.name}
        </div>
      );
    }
  }
  
  export default Task;