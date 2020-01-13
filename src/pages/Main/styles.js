import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    height: 46px;
    width: 35%;
    color: #777;
    font-size: 15px;
    padding: 0 20px;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 15px;
    background: #fc6963;
    height: 46px;
    width: 30%;
    border: 0;
    cursor: pointer;
  }
`

export default Container;