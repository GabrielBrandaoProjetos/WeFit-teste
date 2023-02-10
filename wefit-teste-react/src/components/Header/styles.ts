import styled from "styled-components";

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 18px 10px;
  margin-bottom: 24px;
  
  .headerTitle{
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
  }

  .shoppingCart{
    display: flex;
    gap: 8px;

    span{
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
    }
    p{
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: #999999;
      text-align: end;
    }
  }
`