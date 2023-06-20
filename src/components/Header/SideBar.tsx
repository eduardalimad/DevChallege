import style from './header.module.scss';

export function SideBar() {
    return (
    <>
        <div className={style.menuMobile}>
              <li key="filmes" className={style.link}> Filmes</li>
              <li key="series" className={style.link}> Séries</li>
              <li key="minha-lista" className={style.link}> Minha Lista</li>
        </div>
        
    </>
  );
}
