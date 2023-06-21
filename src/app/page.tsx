"use client";
import { app } from '@/api/app';
import { useEffect, useState } from 'react'
import style from '../app/index.module.scss'
import { NavBar } from '@/components/Header/Header'
import Card from '@/components/cards/Card'
import { Button } from '@/components/Button/Button'
import Footer from '@/components/Footer/footer'


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

  const getMovies = async () => {
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
    getMovies()

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
        <div className={style.containerbannerPrincipal}>

          <div className={style.bannerPrincipal}>
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
                        <Button type='screen one'  />
                      </div>
                    </>
                  );
                }
              })
            }

          </div>
        </div>

        <div className={style.mainContentMovie} >
          <h1 className={style.titleMainContent}>Filmes legais</h1>
          <div className={style.containerAllMovies}>
            {
              movies && movies.map((element: MoviesProps) => {
                return (
                  <>
                    <Card type='active' parentToChild={element.cover} action={() => getMovieById(element.id)} />
                  </>
                );
              })
            }
          </div>
        </div>
    
      </div>)
  }

  function screenMoviesSelectedComponent() {
    const conversor = (minutos: number): string => {
      const horas: number = Math.floor(minutos / 60);
      const min: number = minutos % 60;
      const textoHoras: string = (`00${horas}`).slice(-2);
      const textoMinutos: string = (`00${min}`).slice(-2);

      return `${textoHoras}h${textoMinutos}m`;
    };

    return (
      <div className='screenSelectedMovies'>
        <button className={style.buttonBack} onClick={() => setScreenMovies(true)} ></button>
        { moviesSelected && <>
            <div className={style.moviesSelected}>
              <picture>
                <img src={moviesSelected.banner} alt="Banner do Filme" className={style.moviesSelected_Banner} />
              </picture>

              <picture  >
                <img src={moviesSelected.logo} alt="Logo do Filme" className={style.moviesSelected_Logo} />
              </picture>
              <div className={style.moviesSelected_Sinopse}>
                <div className={style.moviesSelected_movieDuration}>
                  <span className={style.moviesSelected_movieName}>Duração</span>
                  <picture className={style.moviesSelected_movieClassification}>
                    <img src="/classificacaoIdade.svg" alt="Classificação indicativa" />
                  </picture>
                  <span className={style.duration}>{(conversor(moviesSelected.durationInMinutes))}</span>
                </div>
                <Button type='screen two' />
                <p className={style.moviesSelected_movieDescription}>
                  {moviesSelected.description}
                </p>

              </div>

            </div>

            <div className={style.mainContentMovie}>
              <h1 className={style.titleMainContent}>Outros Filmes legais</h1>
              <div className={style.containerAllMovies}>
                {
                  movies && movies.map((element: MoviesProps) => {
                    return (
                      <>
                        <Card type='disabled' parentToChild={element.cover} action={() => getMovieById(element.id)} />
                      </>
                    );
                  })
                }
              </div>
            </div>

          </>
        }
      </div>)
  }

  return (
    <div>
      {screenMovies && screenMoviesComponent()}
      {!screenMovies && screenMoviesSelectedComponent()}
      <Footer />
    </div>
  )
}
