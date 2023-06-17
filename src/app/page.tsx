"use client";
import { app } from '@/api/app';
import { useEffect, useState } from 'react'
import style from '../app/index.module.scss'
import { NavBar } from '@/components/Header/Header'
import Card from '@/components/cards/CardMovie'
import { Button } from '@/components/Button/Button'


interface MoviesProps {
  id: string,
  title: string,
  cover: string,
  banner: string,
  logo: string,
  ageGroup: string,
  durationInMinutes: number,
  description: string;
  otherMovies?: MoviesProps;
}

export default function Home() {
  const [movies, setMovies] = useState<MoviesProps[]>();
  const [moviesSelected, setMoviesSelected] = useState<MoviesProps>();
  const [screenMovies, setScreenMovies] = useState(true);

  const getPosts = async () => {
    try {
      await app.get('/movies').then((response => {
        setMovies(response.data);
      }));




    }
    catch (error) {
      console.log(error);

    }


  }
  useEffect(() => {
    getPosts()

  }, []);

  function getMovieById(id: string): void {
    app.get(`/movies/${id}`).then((response => {
      setMoviesSelected(response.data);
      setScreenMovies(false);
    }));
  }

  function screenMoviesComponent() {
    return (
      <div className='screenAllMovies'>
        <NavBar />
        <div className={style.carrosel}>

          <div className={style.img}>
            {
              movies && movies.map((element: MoviesProps, index) => {
                if (index === 2) {

                  return (
                    <>
                      <div key={index} className={style.cardImg}>
                        <picture>
                          <img src={element.logo} alt="Logo filme Turbo" />
                          <h4 className={style.cardDescription} >{element.description} </h4>
                        </picture>
                        <Button />
                      </div>
                    </>
                  );
                }
              })
            }

          </div>
        </div>

        <div className={style.main} >
          <h1 className={style.title}>Filmes legais</h1>
          {
            movies && movies.map((element: MoviesProps) => {
              return (
                <>
                  <a onClick={() => getMovieById(element.id)} >
                    <Card parentToChild={element.cover} />
                  </a>
                </>
              );
            })
          }
        </div>
      </div>)
  }

  function screenMoviesSelectedComponent() {
    return (
    <div className='screenSelectedMovies'>
      <button className={style.backButtonClass} onClick={() => setScreenMovies(true)} ></button>  
      {
      
      moviesSelected && <div>
        {}
        <div className={style.moviesSelected}>
          <picture>
            <img src={moviesSelected.banner} alt="Banner do Filme" className={style.imgBanner} />
          </picture>

          <picture >
            <img src={moviesSelected.logo} alt="Banner do Filme" className={style.imgLogo}/>
          </picture>
          <div className={style.movieSinopse}>
            <div className={style.duration}>
                <span className={style.durationTitle}>Duração</span>
                <picture className={style.classification}>
                <img src="/classificacaoIdade.svg" alt="Cover do Filme" />
              </picture>
                <span className={style.duration}>{moviesSelected.durationInMinutes}</span>
            </div>
            <Button/>
            <p className={style.description}>
              {moviesSelected.description}</p>
          
        </div>
          
        </div>

        <div className={style.main} style={{top: '0'}}>
          <h1 className={style.title}>Outros Filmes legais</h1>
          {
            movies && movies.map((element: MoviesProps) => {
              return (
                <>
                  <a onClick={() => getMovieById(element.id)} >
                    <Card parentToChild={element.cover} />
                  </a>
                </>
              );
            })
          }
        </div>

      </div>
      
      }

      
    </div>)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {screenMovies && screenMoviesComponent()}
      {!screenMovies && screenMoviesSelectedComponent()}
    </main>
  )
}
