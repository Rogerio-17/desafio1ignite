import style from "./CreateTask.module.css";
import { PlusCircle } from "phosphor-react";


export function CreateTastk() {


  return (
    <div>
    <form className={style.createtask}>
      <input type="text" placeholder="Digite uma nova tarefa" />
      <button>
        Criar <PlusCircle size={24} />
      </button>
    </form>
    </div>
  );
}
