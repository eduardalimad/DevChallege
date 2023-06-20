"use client";
import style from "./Btn.module.scss";

interface Props {
  type: 'screen one' | 'screen two';
}

export function Button({type}: Props) {

  return <>
    <button className={type == 'screen one' ? style.buttonScreenOne : style.buttonScreenTwo }>
    <picture >
      <img src={"/iconBtn.svg"} alt="Logo filme Turbo" className={style.iconButton } />
    </picture>
    Assistir
    </button>
  </>;
{}
  
}

