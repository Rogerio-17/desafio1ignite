import style from "./Task.module.css"
import { Content } from "./Content";

export function Task() {
  return (
    <div className={style.task}>

      <div className={style.info}>
        <div className={style.taskcreate}>
          <p>
            Tarefas criadas <span>5</span>{" "}
          </p>
        </div>

        <div className={style.completed}>
            Concluídas <span>2 de 5</span>
        </div>
      </div>

      <div>
        <Content/>
      </div>
    </div>
  );
}
