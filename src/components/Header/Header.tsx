import Image from 'next/image';
import { useState } from 'react';
import style from './header.module.scss';
import { SideBar } from './SideBar'

function showOrHideElement(showElement, setShowElement) {
  setShowElement(!showElement);
}


export function NavBar() {
  const [showElement, setShowElement] = useState(false);
  

  return (
    <>
      <header className={style.header}>
      <button className={style.btnMobile} onClick={() => showOrHideElement(showElement, setShowElement)}> 
      <Image
            src="/menu.png"
            width={32}
            height={32}
            alt="Picture of the author"
          />
    
       </button>
      {showElement && (
          <div>
            <SideBar/>
          </div>
        )}
        
        <div className={style.logoStream}>
          <Image
            src="/logo.svg"
            width={180}
            height={50}
            alt="Picture of the author"
          />
        </div>

        <div className={style.menu}>
          <nav id="navTag">
            <ul>
              <li key="filmes">Filmes</li>
              <li key="series">Séries</li>
              <li key="minha-lista">Minha Lista</li>
            </ul>
          </nav>
        </div>
        <div className={style.containerRight}>
          <Image
            src="/Vector.svg"
            width={17.49}
            height={17.49}
            alt="Picture of the author"
          />
          <Image
            src="/Avatar.svg"
            width={40}
            height={40}
            alt="Picture of the author"
          />
        </div>
      </header>
    </>
  );
}
