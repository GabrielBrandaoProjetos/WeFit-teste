import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex; 
  flex-direction: column;
  align-items: center;

  main{
    max-width: 960px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 32px;
    background-color: #fff;
    border-radius: 4px;
    color: #2F2E41;
  }

  .empty{
    max-width: 960px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 40px;
    >span{
      font-weight: 700;
      font-size: 20px;
      line-height: 27px;
      color: #2F2E41;
    }
  }

  .cart{
    width: 100%;
    display: grid;
    grid-template-columns: 89px 253px 120px 214px auto;
    row-gap: 21px;
    column-gap: 52px;
    align-items: center;
  }
  .col-2{
    grid-column: span 2;
  }

  .cartTitle{
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #999999;
    text-transform: uppercase;
  }

  .imgMovie{
    font-size: 0;
    img{
      width: 89px; 
      height: 114px;
    }
  }

  .movieTitle{
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #2F2E41;
    gap: 8px;

    >span{
      font-size: 16px;
      line-height: 22px;
    }
  }

  .qtdMovies{
    display: flex;
    align-items: center;
    gap:  11px;

    button{
      background: transparent;
      border: none;
      font-size: 0;
      cursor: pointer;
    }

    input{
      width: 62px;
      height: 26px;
      border: 1px solid #D9D9D9;
      border-radius: 4px;
      padding-left: 16px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  .subtotal{
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }

  .delMovieCart{
    display: flex;
    justify-content: end;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .separator{
    width: 100%;
    background: #999999;
  }

  .checkout{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >div{
      display: flex;
      align-items: center;
      gap: 10px;
    }

    span:last-child{
      width: 130px;
      font-weight: 700;
      font-size: 24px;
      line-height: 33px;
      text-align: center;
    }
  }
`