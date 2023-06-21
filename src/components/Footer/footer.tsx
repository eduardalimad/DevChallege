"use client";
import style from "./footer.module.scss";

// interface Props {
//   parentToChild: string,
//   action: () => void,
// }

const Footer  = () => {
  return (
    <footer className={style.containerFooter}>
        <div className={style.container}>
            <span>© Dev Challenge</span>
            <a href="#" className={style.containerFooterAncora} >Política de Privacidade</a>
            <a href="#" className={style.containerFooterAncora}>Termos de Uso</a>
        </div>
        <span>Desenvolvido por Eduarda Lima</span>
    </footer>
  );
};

export default Footer;
