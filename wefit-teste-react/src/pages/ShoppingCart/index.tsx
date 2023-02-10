import { Header } from '../../components/Header';
import EmptyCartImg from '../../assets/empty-cart-img.svg';
import SubMovieIcon from '../../assets/icons/sub-movie-icon.svg';
import AddMovieIcon from '../../assets/icons/add-movie-icon.svg';
import DelMovieIcon from '../../assets/icons/del-movie-icon.svg';
import {Link} from 'react-router-dom'
import { Button } from '../../components/Button';
import React, { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import { addMovieInTheCart, delMovieInTheCart, subMovieInTheCart } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';

import * as Styled from './styles';

interface MovieProps {
  movie: {
    id: number,
    image: string,
    price: number,
    title: string,
    added_to_cart?: boolean,
    count_added_to_cart?: number
  }
}

export function ShoppingCart() {
  const {countMoviesCart, moviesCart, reloadMovies} = useContext(ShoppingCartContext)
  
  async function handleAddQtdMovies(id: number, count: number){
    await addMovieInTheCart(id, count + 1)
    await reloadMovies()
  }

  async function handleSubQtdMovies(id: number, count: number){
    if(count === 1) return;
    
    await subMovieInTheCart(id, count - 1)
    await reloadMovies()
  }

  async function handleDelMovieCart(id: number){
    await delMovieInTheCart(id)
    await reloadMovies()
  }

  async function handleCheckout(){
    moviesCart.forEach(async(movie) => {
      await handleDelMovieCart(movie.id)
    })
    await reloadMovies()
  }

  function totalSumOrders(){
    let total = 0
    moviesCart.forEach(movie => {
      total += movie.price * movie.count_added_to_cart 
    })
    return formatPrice(total)
  }

  const Input = ({movie}: MovieProps,) =>{
    const [inputValue, setInputValue] = useState<string|null>(null)

    async function onChange(id: number, count: string){
      setInputValue(count)
      if(Number(count) < 1) return;
      await addMovieInTheCart(id, Number(count))
      await reloadMovies()
    }
    return(
      <input
        type="number" 
        value={inputValue ?? movie.count_added_to_cart}
        onChange={(e) => onChange(movie.id, e.target.value)}
      />
    )
  }
  
  return(
    <Styled.Container>
      <Header/>

      <main>
        {countMoviesCart === 0 && (
          <div className="empty">
            <span>Parece que não há nada por aqui :&#40;</span>
            <img src={EmptyCartImg} alt="Carrinho vazio" />
            <Link to="/">
              <Button text='voltar' width='180px'/>
            </Link>
          </div>
        )}
        {countMoviesCart > 0 && (
          <>
            <div className='cart'>
              <span className='cartTitle col-2'>Produto</span>
              <span className='cartTitle'>Qtd</span>
              <span className='cartTitle col-2'>Subtotal</span>
              {moviesCart.map((movie) => (
                <React.Fragment key={movie.id}>
                  <div className="imgMovie">
                    <img src={movie.image} alt={movie.title} />
                  </div>
                  <div className='movieTitle'>
                    <p>{movie.title}</p>
                    <span>R$ {formatPrice(movie.price)}</span>
                  </div>
                  <div className='qtdMovies'>
                    <button 
                      disabled={movie.count_added_to_cart === 1}
                      onClick={() => handleSubQtdMovies(movie.id, movie.count_added_to_cart)}>
                      <img src={SubMovieIcon} alt="Subtrair filme" />
                    </button>
                    <Input movie={movie}/>
                    <button onClick={() => handleAddQtdMovies(movie.id, movie.count_added_to_cart)}>
                      <img src={AddMovieIcon} alt="Adicionar filme" />
                    </button>
                  </div>
                  <div className='subtotal'>
                    R$ {formatPrice(movie?.price * movie?.count_added_to_cart)}
                  </div>
                  <button 
                    className="delMovieCart"
                    onClick={() => handleDelMovieCart(movie.id)}
                    >
                    <img src={DelMovieIcon} alt="" />
                  </button>
                </React.Fragment>
              ))}
            </div>

            <hr className="separator"/>

            <div className='checkout'>
              <Link to='/compra_realizada'>
                <Button onClick={handleCheckout} text='Finalizar pedido' />
              </Link>
              <div>
                <span className='cartTitle'>Total</span>
                <span>R$ {totalSumOrders()}</span>
              </div>
            </div>
          </>
        )}

      </main>
    </Styled.Container>
  )
}