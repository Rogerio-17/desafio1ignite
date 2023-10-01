import { CreateTastk } from "./components/CreateTask";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { useState } from "react";
import { Content } from "./components/Content.jsx"
import { NoTask } from "./components/NoTask";
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
  const [taskValue, setTaskValue] = useState('')

  //Adiciona tarefa
  function handleCreateTask(task, taskValue){
    event.preventDefault()
    const addTask = [...tasks,
      {
      id: Math.floor(Math.random() * 1000000),
      content: task,
      isCompleted: false,
     }
  ]

  setTask(addTask)
  setTaskValue('')
  }

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

  // Deleta tarefa selecionada
  function handleDelete(taskDelete) {
    const deleteTask = tasks.filter((task) => task.id !== taskDelete)
    setTask(deleteTask)
  }

  return (
    <div>
      <Header />
      <CreateTastk 
      handleCreateTask={handleCreateTask}
      task={taskValue}
      setTask={setTaskValue}

      /////////////////////////////////////////
      />
      <Task 
      task={tasks}
      />

      {/* Verfica se tem tarefas */}
      {tasks.length === 0 ? <NoTask/> : tasks.map((task) => {
          return <Content
             key={task.id}
             task={task}
             handleVerifyTask={handleVerifyTask}
             handleDelete={handleDelete}
           />;
           
         })

      }
    </div>
  );
}

export default App;
