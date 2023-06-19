"use client";
import style from "../cards/CardMovie.module.scss"
interface Props {
  parentToChild: string,
}

const Card: React.FC<Props> = ({ parentToChild }) => {
  return (
    <picture>
      <img src={parentToChild} alt="Cover do Filme" className={style.containerCard} />
    </picture>
  );
};

export default Card;
