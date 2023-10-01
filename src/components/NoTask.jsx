import clipBoard from "../assets/Clipboard.svg"
import style from "./NoTask.module.css"

export function NoTask() {
    return(
        <div className={style.content}>
            <img src={clipBoard} alt="" />

            <div>
            <span>Você ainda não tem tarefas cadastradas</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}