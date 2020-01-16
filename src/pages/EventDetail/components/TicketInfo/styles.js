import styled from 'styled-components';

export const Container = styled.div`

.box{
  font-family: roboto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  width: 400px;
  background-color: #fff;

  @media (max-width: 600px) {
    width: 80%;
  }
  
  .price, .total, .qtd, .type { 
    font-weight:bold;
    font-size:29px;
  }

  @media (max-width: 600px) {
    .price, .total, .qtd, .type { 
    font-weight:bold;
    font-size:20px;
  }
  }
  
  li {
    width: 100%;
    border: 2px solid;
    border-color: #A7A6A6;
  }
  .title {
    padding: 5px;
    color: white;
    font-size: 30px;
    background: black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sample {
    padding: 0 20px 0 20px;
    color: #5CE091;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 20px;
    
    .qtd{
      display: flex;
      justify-content: space-between;
      font-weight:bold;
      font-size:29px;
    }
    button {
      font-weight:bold;
      font-size: 20px;
      background-color: white;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      border: 2px solid black;
    }
  }
  .total {
      justify-content: center;
      padding: 0 20px 10px 20px;
      justify-content: space-between;
      button{
      color: #fff;
      font-size: 16px;
      background: #5CE091;
      height: 56px;
      border: 0;
      border-radius: 40px;
      width: 100%;
      cursor: pointer;
      &:hover{
        background: #61BD86
      }  
      }
  }
}
`;

export default Container;
