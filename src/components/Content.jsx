import { Trash } from "phosphor-react";
import style from "./Content.module.css";

export function Content({task, handleVerifyTask, handleDelete}) {

  return (
    <div>
    <div className={style.content}>
      <div className={style.content1}>
        <input 
        type="checkbox" 
        checked={task.isCompleted} 
        style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
        onClick={() => handleVerifyTask(task.isCompleted, task.id)}
        />

        <p style={{ textDecoration: task.isCompleted ? "line-through" : "" }}>
          {task.content}
        </p>
      </div>

      <div className={style.delete}>
        <Trash onClick={() => handleDelete(task.id)} size={24} />
      </div>
    </div>
    </div>
  );
}
