


import React,{Component} from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods :["pizza","lasagna","peach cobbler","roasted brussel sprouts"]
    };
  }


  render() {
    return (
      <div className="App">
        {this.state.foods.map((e,i)=>{
          return <p>{e}</p>
    } )}
        
      </div>
    );
  }

  // render() {
  //   let foodsToDisplay = this.state.foods.map((element, index) => {
  //     return <h2 key={index}>{element}</h2>;
  //   });

  //   return <div className="App">{foodsToDisplay}</div>;
  // }
}

export default App;