import styled, {keyframes} from "styled-components";

const loading = keyframes`
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex; 
  flex-direction: column;
  align-items: center;
  
  .grid{
    max-width: 960px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .loading{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0;
    animation: ${loading} 1s linear infinite ;
  }
`

