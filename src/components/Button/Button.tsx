"use client";
import style from "./Btn.module.scss";

export function Button( className) {
  Button.defaultProps = {
    className: '',

  };
  return <>
    <button className={style.button}>
    <picture >
      <img src={"/iconBtn.svg"} alt="Logo filme Turbo" className={`style.iconButton ${className}`} />
    </picture>
    Assistir
    </button>
  </>;
{}
  
}

