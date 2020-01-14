import styled from 'styled-components';

export const Container = styled.div`

margin-top: 90px;

.card {
  width: 250px;
  background: #fff;
  border-radius: 30px;
  margin: 0 10px;

  display: flex;
  flex-direction: column;
}
header {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
}

img {
    width: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }

ul {
    list-style: none;

    li {
      padding: 12px 20px;
      border-radius: 30px;

      .date {
        font-weight: bold;
        font-size: 16px;
        color: #0CA1B9;
        font-family: 'Roboto';
        font-style: bold;
      }

      .title {
        font-size: 16px;
        color: #000;
        font-family: 'Roboto';
        font-stretch: condensed;
      }

      .institute {
        font-size: 16px;
        color: #000;
        font-family: Roboto, sans-serif;
        font-weight: 300;
      }
    }
  }

`

export const Events = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-gap: 1rem;
`;
