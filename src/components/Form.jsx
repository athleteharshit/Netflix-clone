import React from 'react';
import {useState} from 'react';

const From = () => {
    const [state, setState] = useState()

    const eventHandler = (e) => {
        setState({
            username: e.target.value
        })
    }

    const eventSubmit = (e) => [
        e.preventDefault()
    ]
        return(
            <>
            <form>
            <label>username</label>
            <input onChange={eventHandler} type="text" placeholder= "enter user name"/>
            <submit onSubmit={eventSubmit}>hite me</submit>
            </form>
            </>
        );
       
  
  
}
export default From;