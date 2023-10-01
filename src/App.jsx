import { CreateTastk } from "./components/CreateTask";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { useState } from "react";
import { Content } from "./components/Content.jsx"
function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      content: "Está é uma tarefa teste",
      isCompleted: false,
    },

    {
      id: 2,
      content: "Uma outra tarefa para novos testes",
      isCompleted: true,
    }
  ]);

  //Marca como concluido e desmarca
  function handleVerifyTask(stateTask, id) {
    const updateTask = tasks.map((task) => {
      if(task.id === id) {
        return { ...task, isCompleted: !stateTask };
      }
      return task;
    })
    setTask(updateTask)
  }

  return (
    <div>
      <Header />
      <CreateTastk />
      <Task/>
      {tasks.map((task) => {
       return <Content
          key={task.id}
          task={task}
          handleVerifyTask={handleVerifyTask}
        />;
      })}
    </div>
  );
}

export default App;
