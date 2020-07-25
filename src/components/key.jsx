import React from 'react';
import TestingKey from './TestingKey';

// const Key = () => {
//     const obj = [
//         {id: 1, name: "harshit", profassion: "coder"},
//         {id: 2, name: "pubg", profassion: "gammer"}
//     ];
//     let myObj = obj.map(val => <li>{val.name}</li>);
//     return (
//         <>
//         <h1>practice map and key </h1>
//         <ul key={obj[0].id}>{myObj}</ul>
//         <TestingKey get={obj.map(val => val.id)}/>
//         </>
//     );
// }

class Key extends React.Component {
    state = {
        obj: [
            {id: 1, name: "harshit", profassion: "coder"},
            {id: 2, name: "pubg", profassion: "gammer"}
        ]
    }
    // myObj = obj.map(val => val)
    render() {
        return (
            <>
            <h1>check key </h1>
            {
                this.state.obj.map(user => {
                    return(
                        <>
                        <h1 key={user.id}>{user.name}</h1>
                        <TestingKey  get={user}/>
                        </>
                    )
                })
            }
            {/* <ul>{this.obj}</ul> */}
            </>
        );
    }
}

export default Key;