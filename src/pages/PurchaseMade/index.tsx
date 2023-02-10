import {Link} from 'react-router-dom'
import { Button } from '../../components/Button';
import PurchaseMadeImg from '../../assets/purchase-made-img.svg'

import * as Styled from './styles';
import { Header } from '../../components/Header';

export function PurchaseMade(){
  
  return(
    <Styled.Container>
      <Header />
      <main>
        <div className="purchaseMode">
          <span>Compra realizada com sucesso!</span>
          <img src={PurchaseMadeImg} alt="Compra realizada" />
          <Link to="/">
            <Button text='voltar' width='180px'/>
          </Link>
        </div>
      </main>
    </Styled.Container>
  )
}