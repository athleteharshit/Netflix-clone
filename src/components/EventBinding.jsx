import React, { useState } from "react";
import Key from "./key";

// class EventBinding extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.state = "harshit";
//         // this.show= this.show.bind(this);
//         this.state = {
//             name: "hak",
//             ubg: this.props.pubg
//         }
//     }

//     // show(){
//     //     console.log("click", this.state);

//     // }

//     show = () => {
//         this.setState({
//             name: "gme",
//             pubg: "fjd"
//         })
//     }

//     render() {
//         return (
//             <>
//             <h1>Pubgt{this.state.name}</h1>
//             {this.props.pubg}
//             <button onClick={this.show}>hit</button>
//             </>
//         );
//     }
// }

const EventBinding = (props) => {
    const [state, setState] = useState(props.pubg)

    let numbers = [2, 3, 4 , 56];
    let newNumbers = numbers.map((number)=> <li>{number}</li>);

    const show = () => {
        setState("kjdkgj")
    }
  return (
    <>
      <h1>hello,{state}</h1>
      <button onClick={show}>hit</button>
      <ul key={numbers}>{newNumbers}</ul>
      <Key/>
    </>
  );
};

export default EventBinding;
