import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const TodoList = () => {
  const [tasks, setTasks] =useState([]);
  const addTask = () => {
    const newTask = {
      id: Math.random(),
      text: "",
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const handleCheckboxChange = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }

        return task;
      })
    );
  };

  return (
    <main>
      <div className="box">
        <div className="title">
        
          <FontAwesomeIcon icon={faPlus} id="iconPlus"
            onClick={addTask} />
            
          <h1>Personnel</h1>
          
        </div>
        <div className="inputsBox">
          {tasks.map((task) => (
            <div className="inputs" key={task.id}>
              <input
                type="text"
                placeholder="saisissez votre tache ici.."
                className="inputText"
                // value={task.text}
                // onChange={() => handleCheckboxChange(task.id)}
              />
              <input
                type="checkbox"
                className="checkBox"
                // checked={task.completed}
              />
              <FontAwesomeIcon icon={faStar} />&nbsp;&nbsp;
               
                <FontAwesomeIcon icon={faTrash} />
               
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TodoList;