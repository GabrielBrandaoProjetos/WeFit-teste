import {useContext} from 'react'
import { Header } from '../../components/Header';
import LoadingImg from '../../assets/loading-img.png'
import { CardFilm } from '../../components/MovieCard';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

import * as Styled from './styles';

export function Home(){
  const {movies} = useContext(ShoppingCartContext)

  return(
    <Styled.Container>
      <Header></Header>
      {movies.length > 0 ? (
        <div className="grid">
          {movies.length > 0 && movies.map((movie) => (
            <CardFilm key={movie.id} movie={movie}/>
          ))}
        </div>
      ) : (
        <div className="loading">
          <img src={LoadingImg} alt="" />
        </div>
      )}
    </Styled.Container>
  )
}