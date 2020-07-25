import React from 'react';

// class EventHandling extends React.Component {

//     Eventchange() {
//         console.log('event change')
//     }

//     render() {
//         return (
//             <>
//             <button onMouseOver={this.Eventchange}>click me</button>
//             </>
//         );
//     }
// }

const EventHandling = () => {

    const Eventchange = () => {
        console.log('function component');
    }
    return(
        <>
             <button onMouseOver={Eventchange}>click me</button>
        </>
    );
}

export default EventHandling;