"use client";
import style from "./Btn.module.scss";

export function Button() {
  return <>
    <button className={style.button}>
    <picture >
      <img src={"/iconBtn.svg"} alt="Logo filme Turbo" className={style.iconButton} />
    </picture>
    Assistir
    </button>
  </>;
}

