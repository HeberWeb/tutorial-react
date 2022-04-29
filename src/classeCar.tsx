import React from "react";
//Example of state in a class component:
class Car extends React.Component {
    constructor(props = "") {
      super(props);
      this.state = {brand: "Ford"};
    }
  
    render(){
      return (
        <div>
          <h1>My car</h1>
        </div>
      )
    }
  }

  export default Car;