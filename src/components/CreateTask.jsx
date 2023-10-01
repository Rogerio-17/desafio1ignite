import style from "./CreateTask.module.css";
import { PlusCircle } from "phosphor-react";


export function CreateTastk({handleCreateTask, task, setTask}) {
  

  return (
    <div>
    <form className={style.createtask}>
      <input 
      type="text" 
      placeholder="Digite uma nova tarefa" 
      value={task}
      onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => handleCreateTask(task)}>
        Criar <PlusCircle size={24} />
      </button>
    </form>
    </div>
  );
}
