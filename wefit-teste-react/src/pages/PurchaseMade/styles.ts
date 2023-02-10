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
    padding: 64px;
    gap: 32px;
    background-color: #fff;
    border-radius: 4px;
    color: #2F2E41;
  }

  .purchaseMode{
    max-width: 960px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    >span{
      font-weight: 700;
      font-size: 20px;
      line-height: 27px;
      color: #2F2E41;
    }
  }
`