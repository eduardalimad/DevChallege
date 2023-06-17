"use client";
import Image from 'next/image'
import style from '../Header/header.module.scss'

export function NavBar() {
  return <>
    <header className={style.header}>
      <div className={style.logoStream}>
          <Image
          src="/logo.svg"
          width={180}
          height={50}
          alt="Picture of the author"
          
        />
      </div>
      <div className={style.menu}>
      <li >Filmes</li>
      <li>Séries</li>
      <li >Minha Lista</li>
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
  </>;
}

