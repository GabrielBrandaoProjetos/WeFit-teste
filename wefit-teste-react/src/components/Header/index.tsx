import ShoppingCartIcon from '../../assets/icons/shopping-cart-icon.svg'
import {Link} from 'react-router-dom'
import * as Styled from './styles';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

export function Header(){
  const {countMoviesCart} = useContext(ShoppingCartContext)

  return(
    <Styled.Container>
      <Link to="/">
        <span className="headerTitle">WeMovies</span>
      </Link>
      <Link to="/carrinho">
        <div 
          className='shoppingCart'
          >
          <div>
            <span>Meu Carrinho</span>
            <p>{countMoviesCart} itens</p>
          </div>
          <img src={ShoppingCartIcon} alt="Carrinho de compras" />
        </div>
      </Link>
    </Styled.Container>
  )
}