"use client";
import { app } from '@/api/app';
import { useEffect, useState } from 'react'

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

  useEffect(() => {
    app.get('/movies').then((response => {
      setMovies(response.data);
    }));
  }, [movies]);

  function getMovieById(id: string): void {
    app.get(`/movies/${id}`).then((response => {
      setMoviesSelected(response.data);
      setScreenMovies(false);
    }));
  }

  function screenMoviesComponent() {
    return (<div className='screenAllMovies'>
      {
        movies && movies.map((element: MoviesProps) => {
          return (
            <>
              <button onClick={() => getMovieById(element.id)} >
                {element.title}
              </button>
              <br></br>
            </>
          );
        })
      }
    </div>)
  }

  function screenMoviesSelectedComponent() {
    return (<div className='screenSelectedMovies'>
      {moviesSelected && <button onClick={() => setScreenMovies(true)} >
        {moviesSelected.title}
      </button>}
    </div>)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {screenMovies && screenMoviesComponent()}
      {!screenMovies && screenMoviesSelectedComponent()}
    </main>
  )
}
