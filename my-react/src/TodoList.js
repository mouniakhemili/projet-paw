// import React, { useState } from "react";
//  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//  import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
//  import { faStar } from "@fortawesome/free-regular-svg-icons";
//  import './App.css';
// const TodoList = () => {
//  const [tasks, setTasks] = useState([]);

//  const addTask = () => {
//     setTasks((prevTasks) => [...prevTasks, { task: '', completed: false, important: false }]);
//  };

//  const handleCheckboxChange = (e) => {
//     const taskId = e.target.id.split("btn")[1];

//     setTasks((prevTasks) => {
//       return prevTasks.map((task, index) => {
//         if (index === parseInt(taskId)) {
//           return { ...task, completed: e.target.checked };
//         }

//         return task;
//       });
//     });
//  };

//  const handleStarIconClick = (index) => {
//   alert('salut')
//     setTasks((prevTasks) => {
//       return prevTasks.map((task, i) => {
//         if (i === index) {
//           return { ...task, important: !task.important };
//         }

//         return task;
//       });
//     });
//  };

//  const deleteTask = (index) => {
//     setTasks((prevTasks) => {
//       return prevTasks.filter((task, i) => i !== index);
//     });
//  };

//  return (
//     <div className="TodoList">
//       <div className="title">
//         <h1>Personnel</h1>
//         <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={addTask} />
//       </div>

//       <div className="taskList">
//         {tasks.map((task, index) => (
//           <div key={index} className="task">
//             <input
//               type="text"
//               id={`task${index}`}
//               value={task.task}
//               readOnly={task.completed}
//             />

//             <input
//               type="checkbox"
//               className="checkbox"
//               id={`btn${index}`}
//               checked={task.completed}
//               onChange={handleCheckboxChange}
//             />&nbsp;

//             <FontAwesomeIcon
//               icon={faStar}
//               onClick={() => handleStarIconClick(index)}
//               className={task.important ? "star-filled" : "star-empty"}
//             />&nbsp;

//             <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(index)} />
//           </div>
//         ))}
//       </div>
//     </div>
//  );
// };

// export default TodoList;
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import './App.css';
const TodoList = () => {
  
  
 const [tasks, setTasks] = useState([]);
 

 const addTask = () => {
    const newTask = {
      task: "",
      completed: false,
      important: false,
    };

    setTasks([...tasks, newTask]);
 };

 const handleCheckboxChange = (e) => {
    const taskId = e.target.id.split("btn")[1];

    setTasks((prevTasks) => {
      return prevTasks.map((task, index) => {
        if (index === parseInt(taskId)) {
          return { ...task, completed: e.target.checked };
        }

        return task;
      });
    });
 };
const handleStarIconClick = (index) => {
  // alert('salut')
    setTasks((prevTasks) => {
      return prevTasks.map((task, i) => {
        if (i === index) {
          return { ...task, important: !task.important };
        }

        return task;
      });
    });
 };

 const deleteTask = (index) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task, i) => i !== index);
    });
 };

 return (
    <div className="TodoList">
      <div className="title">
        <h1>Personnel</h1>
        <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={addTask} />
      </div>

      <div className="inputsBox">
        {tasks.map((task, index) => (
          <div className="inputs" key={index}>
            <input
              type="text"
              placeholder="Enter a task here..."
              className="inputText"
              value={task.task}
              onChange={(e) => {
                setTasks((prevTasks) => {
                 return prevTasks.map((task, i) => {
                    if (i === index) {
                      return { ...task, task: e.target.value };
                    }

                    return task;
                 });
                });
              }}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                background: task.important ? "rgba(248, 0, 0, 0.5)" : "none",
              }}
            />

            <input
              type="checkbox"
              className="checkbox"
              id={`btn${index}`}
              checked={task.completed}
              onChange={handleCheckboxChange}
            />&nbsp;

           <FontAwesomeIcon
              icon={faStar}
             onClick={() => handleStarIconClick(index)}
             className={task.important ? "star-filled" : "star-empty"}
/>&nbsp;

           <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(index)} />
         </div>
        ))}
      </div>
    </div>
 );
};

export default TodoList;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { faStar } from "@fortawesome/free-regular-svg-icons";

// const TodoList = () => {
//  const [tasks, setTasks] = useState([]);

//  const addTask = () => {
//     const newTask = {
//       task: "",
//       completed: false,
//       important: false,
//     };

//     setTasks([...tasks, newTask]);
//  };


//  const handleCheckboxChange = (e) => {
//     const taskId = e.target.id.split("btn")[1];

//     setTasks((prevTasks) => {
//       return prevTasks.map((task, index) => {
//         if (index === parseInt(taskId)) {
//           return { ...task, completed: e.target.checked };
//         }

//         return task;
//       });
//     });
//  };

//  const handleStarIconClick = (e) => {
//     const taskId = e.target.id.split("star")[1];

//     setTasks((prevTasks) => {
//       return prevTasks.map((task, index) => {
//         if (index === parseInt(taskId)) {
//           return { ...task, important: !task.important };
//         }

//         return task;
//       });
//     });
//  };

// function MonComposant() {
//   const [isStarFilled, setIsStarFilled] = useState(false);


//   const handleStarClick = () => {
//     setIsStarFilled(!isStarFilled);
//   };

//  const deleteTask = (index) => {
//   setTasks(prevTasks => prevTasks.filter((task, i) => i !== index));
//  };
// };
//  const deleteTask = (index) => {
//     setTasks((prevTasks) => {
//       return prevTasks.map((task, i) => {
//         if (i === index) {
//           return { ...task, task: "" };
//         }

//         return task;
//       });
//     });
//  };

//  return (
//     <div className="TodoList">
//       <div className="title">
//         <h1>Personnel</h1>
//         <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={addTask} />
//       </div>

//       <div className="inputsBox">
//         {tasks.map((task, index) => (
//           <div className="inputs" key={index}>
//             <input
//               type="text"
//               placeholder="Enter a task here..."
//               className="inputText"
//               value={task.task}
//               onChange={(e) => {
//                 setTasks((prevTasks) => {
//                  return prevTasks.map((task, i) => {
//                     if (i === index) {
//                       return { ...task, task: e.target.value };
//                     }

//                     return task;
//                  });
//                 });
//               }}
//               style={{
//                 textDecoration: task.completed ? "line-through" : "none",
//                 background: task.important ? "rgba(248, 0, 0, 0.5)" : "none",
//               }}
//             />

//             <input
//               type="checkbox"
//               className="checkbox"
//               id={`btn${index}`}
//               checked={task.completed}
//               onChange={handleCheckboxChange}
//             /> 
// <FontAwesomeIcon
//         icon={faStar}
//         onClick={handleStarClick}
//         className={isStarFilled ? 'star-filled' : 'star-empty'}
//       />

//             <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(index)} />
//           </div>
//         ))}
//       </div>
//     </div>
//  )
// };

// export default TodoList; 
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

// const TodoList = () => {
//  const [tasks, setTasks] = useState([]);

//  const addTask = () => {
//     const newTask = {
//       task: "",
//       completed: false,
//       important: false,
//     };

//     setTasks([...tasks, newTask]);
//  };

//  const handleCheckboxChange = (e) => {
//     const taskId = e.target.id.split("btn")[1];

//     setTasks((prevTasks) => {
//       return prevTasks.map((task, index) => {
//         if (index === parseInt(taskId)) {
//           return { ...task, completed: e.target.checked };
//         }

//         return task;
//       });
//     });
//  };

//  const handleStarIconClick = (e) => {
//     const taskId = e.target.id.split("star")[1];

//     setTasks((prevTasks) => {
//       return prevTasks.map((task, index) => {
//         if (index === parseInt(taskId)) {
//           return { ...task, important: !task.important };
//         }

//         return task;
//       });
//     });
//  };

//  const deleteTask = (index) => {
//     const newTasks = [...tasks];
//     newTasks.splice(index, 1);
//     setTasks(newTasks);
//  };

//  return (
//     <div className="TodoList">
//       <div className="title">
//         <h1>Personnel</h1>
//         <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={addTask} />
//       </div>

//       <div className="inputsBox">
//         {tasks.map((task, index) => (
//           <div className="inputs" key={index}>
//             <input
//               type="text"
//               placeholder="Enter a task here..."
//               className="inputText"
//               style={{
//                 textDecoration: task.completed ? "line-through" : "none",
//                 background: task.important ? "rgba(248, 0, 0, 0.5)" : "none",
//               }}
//             />

//             <input
//               type="checkbox"
//               className="checkbox"
//               id={`btn${index}`}
//               checked={task.completed}
//               onChange={handleCheckboxChange}
//             />

//             <i
//               className={`fas fa-${task.important ? "solid" : "regular"} fa-star`}
//               id={`star${index}`}
//               onDoubleClick={handleStarIconClick}
//             ></i>

//             <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(index)} />
//           </div>
//         ))}
//       </div>
//     </div>
//  );
// };

// export default TodoList;
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

// const TodoList = () => {
//  const [tasks, setTasks] = useState([]);

//  const addTask = () => {
//     const newTask = {
//       task: "",
//       completed: false,
//       important: false,
//     };

//     setTasks([...tasks, newTask]);
//  };

//  const handleCheckboxChange = (e) => {
//     const taskId = e.target.id.split("btn")[1];

//     setTasks((prevTasks) => {
//       return prevTasks.map((task, index) => {
//         if (index === parseInt(taskId)) {
//           return { ...task, completed: e.target.checked };
//         }

//         return task;
//       });
//     });
//  };

//  const handleStarIconClick = (e) => {
//     const taskId = e.target.id.split("star")[1];

//     setTasks((prevTasks) => {
//       return prevTasks.map((task, index) => {
//         if (index === parseInt(taskId)) {
//           return { ...task, important: !task.important };
//         }

//         return task;
//       });
//     });
//  };

//  const deleteTask = (index) => {
//     const newTasks = [...tasks];
//     newTasks.splice(index, 1);
//     setTasks(newTasks);
//  };

//  return (
//     <div className="TodoList">
//       <div className="title">
//         <h1>Personnel</h1>
//         <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={addTask} />
//       </div>

//       <div className="inputsBox">
//         {tasks.map((task, index) => (
//           <div className="inputs" key={index}>
//             <input
//               type="text"
//               placeholder="Enter a task here..."
//               className="inputText"
//               style={{
//                 textDecoration: task.completed ? "line-through" : "none",
//                 background: task.important ? "rgba(248, 0, 0, 0.5)" : "none",
//               }}
//             />

//             <input
//               type="checkbox"
//               className="checkbox"
//               id={`btn${index}`}
//               checked={task.completed}
//               onChange={handleCheckboxChange}
//             />

//             <i
//               className={`fas fa-${task.important ? "solid" : "regular"} fa-star`}
//               id={`star${index}`}
//               onDoubleClick={handleStarIconClick}
//             ></i>

//             <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(index)} />
//           </div>
//         ))}
//       </div>
//     </div>
//  );
// };

// export default TodoList;
// import React, {useState} from "react";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { faStar } from "@fortawesome/free-regular-svg-icons";

// const TodoList = () => {
//  const [newTasks, setTasks] = useState([]);

//  const addTask = () => {
//     const newTask = {
//       task: "",
//       completed: false,
//       important: false,
//     };

//     setTasks([...newTasks, newTask]);
//  };

//  const handleCheckboxChange = (e) => {
//     const taskId = e.target.id.split("btn")[1];

//     setTasks((prevTasks) => {
//       return prevTasks.map((task, index) => {
//         if (index === parseInt(taskId)) {
//           return { ...task, completed: e.target.checked };
//         }

//         return task;
//       });
//     });
//  };

//   const handleStarIconClick = (e) => {
//     const taskId = e.target.id.split("star")[1];

//     setTasks((prevTasks) => {
//       return prevTasks.map((task, index) => {
//         if (index === parseInt(taskId)) {
//           return { ...task, important: !task.important };
//         }

//         return task;
//       });
//     });
//  };

//  const deleteTask = (index) => {
//     setTasks(newTasks.filter((task, taskIndex) => taskIndex !== index));
//  };

//  return (
//     <div className="TodoList">
//       <div className="title">
//         <h1>Personnel</h1>
//         <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={addTask}/>
//       </div>

//       <div className="inputsBox">
//         {newTasks.map((task, index) => (
//           <div className="inputs" key={index}>
//             <input
//               type="text"
//               placeholder="Enter a task here..."
//               className="inputText"
//               style={{
//                 textDecoration: task.completed ? "line-through" : "none",
//                 background: task.important ? "rgba(248, 0, 0, 0.5)" : "none",
//               }}
//             />

//             <input
//               type="checkbox"
//               className="checkbox"
//               id={`btn${index}`}
//               checked={task.completed}
//               onChange={handleCheckboxChange}
//             />

//             <i
//               className={`fas fa-${task.important ? "solid" : "regular"} fa-star`}
//               id={`star${index}`}
//               onDoubleClick={handleStarIconClick}
//             ></i>

//             <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(index)}/>
//           </div>
//         ))}
//       </div>
//     </div>
//  )
// };

// export default TodoList;
// import React, {useState} from "react";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { faStar } from "@fortawesome/free-regular-svg-icons";


// const TodoList = () => {
//   const [newTasks, setTasks] = useState([]);

//   const addTask = () => {
//     const newTask = {
//       task: "",
//       completed: false,
//       important: false,
//     };

//     setTasks([...newTasks, newTask]);
//   };

//   const handleCheckboxChange = (e) => {
//     const taskId = e.target.id.split("btn")[1];

//     setTasks((prevTasks) => {
//       return prevTasks.map((task, index) => {
//         if (index === parseInt(taskId)) {
//           return { ...task, completed: e.target.checked };
//         }

//         return task;
//       });
//     });
//   };

//   const handleStarIconClick = (e) => {
//     const taskId = e.target.id.split("b")[1];

//     setTasks((prevTasks) => {
//       return prevTasks.map((task, index) => {
//         if (index === parseInt(taskId)) {
//           return { ...task, important: !task.important };
//         }

//         return task;
//       });
//     });
//   };

//   const deleteTask = (e) => {
//     const taskId = e.target.id.split("btnSup")[1];
//     newTasks=  newTasks.filter((task, index) => index !== parseInt(taskId));
//   setTasks(newTasks);
//   };

//   return (
//     <div className="TodoList">
//       <div className="title">
//         <h1>Personnel</h1>
//         <FontAwesomeIcon icon={faPlus} id="iconPlus" onClick={addTask}/>
//       </div>

//       <div className="inputsBox">
//         {newTasks.map((task, index) => (
//           <div className="inputs" key={index}>
//             <input
//               type="text"
//               placeholder="Enter a task here..."
//               className="inputText"
//               // value={task.task}
//               // onChange={(e) => {
//               //   setTasks((prevTasks) => {
//               //     return prevTasks.map((task, index) => {
//               //       if (index === index) {
//               //         return { ...task, task: e.target.value };
//               //       }

//               //       return task;
//               //     });
//               //   });
//               // }
        
//               style={{
//                 textDecoration: task.completed ? "line-through" : "none",
//                 background: task.important ? "rgba(248, 0, 0, 0.5)" : "none",
//               }}
//             />

//             <input
//               type="checkbox"
//               className="checkbox"
//               id={`btn${index}`}
//               checked={task.completed}
//               onChange={handleCheckboxChange}
//             />

//             <i
//               className={`fas fa-${task.important ? "solid" : "regular"} fa-star`}
            
//               onDoubleClick={handleStarIconClick}
//             ></i>

// <FontAwesomeIcon icon={faTrash}   onClick={deleteTask}/>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// };

// export default TodoList;

// const TodoList = () => {
//   const [tasks, setTasks] =useState([]);
//   const addTask = () => {
//     const newTask = { 
//       id: Math.random(),
//       text: "",
//       completed: false,
//     };

//     setTasks([...tasks, newTask]);
//   };

//   const handleCheckboxChange = (id) => {
//     setTasks(
//       tasks.map((task) => {
//         if (task.id === id) {
//           task.completed = !task.completed;
//         }

//         return task;
//       })
//     );
//   };

//   return (
//     <main>
//       <div className="box">
//         <div className="title">
//         <h1>Personnel</h1>
//           <FontAwesomeIcon icon={faPlus} id="iconPlus"
//             onClick={addTask} />
          
//         </div>
//         <div className="inputsBox">
//           {tasks.map((task) => (
//             <div className="inputs" key={task.id}>
//               <input
//                 type="text"
//                 placeholder="saisissez votre tache ici.."
//                 className="inputText"
//                 // value={task.text}
//                 // onChange={() => handleCheckboxChange(task.id)}
//               />
//               <input
//                 type="checkbox"
//                 className="checkBox"
//                 // checked={task.completed}
//               />
//               <FontAwesomeIcon icon={faStar} />
//                <button className="btn1"><FontAwesomeIcon icon={faTrash} /></button>
               
               
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }
