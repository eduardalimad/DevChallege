import style from './header.module.scss';

export function SideBar() {
    return (
    <>
        <div className={style.menuMobile}>
              <li key="filmes">Filmes</li>
              <li key="series">Séries</li>
              <li key="minha-lista">Minha Lista</li>
        </div>
        
    </>
  );
}
