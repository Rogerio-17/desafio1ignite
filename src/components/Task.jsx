import style from "./Task.module.css"

export function Task(tasks) {
  const qtdTask = tasks.task.length
  const qtdTaskIsCompleted = tasks.task.filter((task) => task.isCompleted).length

  return (
    <div className={style.task}>

      <div className={style.info}>
        <div className={style.taskcreate}>
          <p>
            Tarefas criadas <span>{qtdTask}</span>{" "}
          </p>
        </div>

        <div className={style.completed}>
            Concluídas <span>{qtdTaskIsCompleted} de {qtdTask}</span>
        </div>
      </div>
    </div>
  );
}
