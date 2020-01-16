import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width: 600px) {
    form {
      width: 100%;
    }
}

  .city {
    width: 20%
  }

  .event {
    width: 40%
  }

  input {
    height: 46px;
    color: #777;
    font-size: 15px;
    padding: 0 20px;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  select {
    height: 46px;
    width: 20%;
    color: #777;
    font-size: 15px;
    padding: 0 20px;
    border: 1px solid #ddd;    
  }

  button {
    color: #fff;
    font-size: 15px;
    background: #fc6963;
    height: 46px;
    width: 20%;
    border: 0;
    cursor: pointer;
  }
`

export default Container;