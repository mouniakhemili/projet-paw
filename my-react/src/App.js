


import { ReactDOM } from "react-dom";
import React from "react";
import TodoList from "./TodoList.js";
import styles from "./App.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: []
//     };
//   }

//   addTodo = text => {
//     const newTodos = [...this.state.todos, { text }];
//     this.setState({ todos: newTodos });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Todo List</h1>
//         <TodoList todos={this.state.todos} />
//       </div>
//     );
//   }
// }

// export default App;


        const App = () => {
          return (
            <div style={styles.main}>
              <TodoList />
            </div>
          );
            
}

export default App;
