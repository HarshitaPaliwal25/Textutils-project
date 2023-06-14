import React from "react";

class ClassComponent extends React.Component {
  constructor(){
    super()
    this.state = {
        name: "test",
        counter: 0
    }
  }
  incrementCounter=()=>{
    this.setState((prev)=>({
         counter: prev.counter + 1
    }))
  }
  componentDidMount(){
    setTimeout(this.incrementCounter,1000)
  }
  componentDidUpdate(){
    setTimeout(this.incrementCounter,1000)
  }
  componentWillUnmount(){
    console.log("Unmounting");
  }
    render() {
    const { name, counter } = this.state;
    console.log(counter);

    return (
      <div>
        <h1>
          My Footer {name}
          {counter}
        </h1>
      </div>
    );
  }
}
export default ClassComponent
