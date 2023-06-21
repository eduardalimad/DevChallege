"use client";
import style from "../cards/CardMovie.module.scss";

interface Props {
  type: 'active' | 'disabled',
  parentToChild: string,
  action: () => void,
}

const Card: React.FC<Props> = ({ parentToChild, action,type }: Props) => {
  return (
    <a onClick={action} className={style.containerCard} >
      <picture>
        <img src={parentToChild} alt="Cover do Filme" className={style.cardImg}/>
      </picture>
      <div className={style.containerBarProgress}>
        <div className={type == 'active' ? style.barProgressOn : style.barProgressOff }></div>
      </div>
    </a>
  );
};

export default Card;
