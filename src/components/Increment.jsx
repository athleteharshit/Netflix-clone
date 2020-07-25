import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const Increment = () => {

    const [state, setState] = useState(0)

    // const incre = () => {

    //     setState(state + 1)
    // }

    // const decre = () => {
    //     if(state > 0) {
    //         setState(state - 1)
    //     }else{
    //         alert('you increes limit');

    //     }
    // }

    return (
        <>
        <h1>{state}</h1>
        <Tooltip title="Add" placement="bottom">
        <Button onClick={incre => setState(state + 1)}><AddIcon/></Button>
        </Tooltip>

        <Tooltip title="Add" placement="top">
        <Button onClick={decre => {state > 0 ? setState(state - 1) :  alert("zero limit end")}}><DeleteIcon/></Button>
        </Tooltip>
        </>
    );
}

export default Increment;