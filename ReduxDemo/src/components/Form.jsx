import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function Form(){
    let [task, setTask] = useState("");
    const dispatch = useDispatch();

    function handleTask(evt){
        setTask(evt.target.value);
    }

    function handleSubmit(evt){
        evt.preventDefault();
        if(task.trim() !== ""){
            dispatch(addTodo(task));
            setTask("");
        } else{
            alert('Enter some task to add cannot add empty task');
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter tasks here" value={task} onChange={handleTask} style={{margin: "10px"}}/>
                <button style={{backgroundColor: "green", color: "white"}}>Add Task</button>
            </form>
        </>
    )
}