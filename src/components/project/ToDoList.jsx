import React, { useState } from 'react';
import './ToDoList.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom';
// C:\Users\acer\Desktop\react\my-app\node_modules\bootstrap\dist\css\bootstrap.min.css
const ToDoList = () => {
    const [item, setItem] = useState("")
    const [addItem, addNewItem] = useState([])

    const itemEvent = (e) => {
        setItem(e.target.value)
    }

    const getItem = () => {
        if(item === "" ) {
            alert("list  item emppty")
        }else {
            addNewItem(preValue => [...preValue, item])
        }
        // console.log(preValue);
        setItem("")
        console.log(addItem);
    }
    return (
        <>
        <div className="main_div">
            <div className="card_div">
                <h1>Todo List</h1>
                <input type="text"
                    placeholder="Add an Item"
                    onChange={itemEvent}
                    value={item}
                />
                <div className="input_div">
                <Button variant="contained" color="secondary" onClick={getItem}>
                    <AddIcon/>
                </Button>
                </div>
                <ul>
                    {addItem.map((list, index) => <ListCom key={index} text={list}/>)}
                </ul>
            </div>
        </div>
        </>
    );
}

export default ToDoList;