import React, { useContext } from 'react';
import CountShoppingCart from '../../assets/icons/countshoppingcart.svg'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { addMovieInTheCart } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';

import * as Styled from './styles';

interface MovieProps{
  id: number,
  image: string,
  price: number,
  title: string,
  added_to_cart?: boolean,
  count_added_to_cart?: number,
}

interface MovieCardProps {
  movie: MovieProps
}
export const CardFilm: React.FC<MovieCardProps> = ({movie}) => {
  const {reloadMovies} = useContext(ShoppingCartContext)

  async function handleAddMovieToCart(){
    if(movie.added_to_cart) return;
    const count =  (movie.count_added_to_cart ?? 0) + 1
    await addMovieInTheCart(movie.id, count )
    await reloadMovies()
  }

  return(
    <Styled.Container>
      <img src={movie.image} alt={movie.title} />
      <span className="movieTitle">{movie.title}</span>
      <span className="moviePrice">R$ {formatPrice(movie.price)}</span>
      <button 
        onClick={handleAddMovieToCart} 
        className={movie.added_to_cart ? "active": ""}
      >
        <div>
          <img src={CountShoppingCart} alt="" />
          <span>{movie.count_added_to_cart ?? 0}</span>
        </div>
        <p>Adicionar ao carrinho</p>
      </button>
    </Styled.Container>
  )
}