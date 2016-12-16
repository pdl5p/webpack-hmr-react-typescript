/// <reference path="../typings/index.d.ts" />

import * as React from 'react';

class CoolComponent extends React.Component<{}, {}> {

  componentWillMount(){
    console.log("MOUNT");
  }

  componentDidMount(){
    console.log("MOUNTED");
  }

  render() {
    return (
      <div>
      <h2>TSX is cool</h2>

      </div>
    );
  }
}

export default CoolComponent