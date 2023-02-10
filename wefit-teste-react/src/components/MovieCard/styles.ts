import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  background: #fff;
  color: #000;
  border-radius: 4px;

  >img{
    width: 147px;
    height: 188px;
  }

  .movieTitle{
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    margin-top: 7px;
  }

  .moviePrice{
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    margin-top: 2px;
    margin-bottom: 8px;
  }

  >button{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    gap: 12px;
    background: #009EDD;
    border-radius: 4px;
    color: #fff;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    
    >div{
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        font-size: 12px;
        font-weight: 400;
        margin-left: 3.5px;
      }
    }

    p{
      font-weight: 700;
      font-size: 12px;
      line-height: 18px;
    }
  }

  .active{
    background: #039B00;
  }
`