"use client";
import style from "../cards/CardMovie.module.scss";

interface Props {
  parentToChild: string,
  action: () => void,
}

const Card: React.FC<Props> = ({ parentToChild, action }: Props) => {
  return (
    <a onClick={action} className={style.containerCard} >
      <picture>
        <img src={parentToChild} alt="Cover do Filme" className={style.cardImg} />
      </picture>
    </a>
  );
};

export default Card;
