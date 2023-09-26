import { Trash } from "phosphor-react";
import style from "./Content.module.css";

export function Content() {
  return (
    <div className={style.content}>
      <div className={style.content1}>
        <input type="checkbox" />
        <p>
          bsadjkbindsaiovbijndjnvijaivndijaj ij aihd viadicnianfawuiebfinaiudf
        </p>
      </div>

      <div className={style.delete}>
        <Trash size={24} />
      </div>
    </div>
  );
}
