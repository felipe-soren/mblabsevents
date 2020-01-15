import styled from 'styled-components';

export const Container = styled.div`

@media (min-width: 600px) {
  grid-template-columns: 100%;
  margin: 50px;
}

/* @media (min-width: 800px) {
  grid-template-columns: 50% 50%;
  margin: 50px;
} */

@media (min-width: 1200px) {
margin: 50px 500px 0 500px;
display: grid;
grid-template-columns: 33% 33% 33%;
grid-gap: 10px;
background-color: #eee;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
}

.card {
  width: 250px;
  background: #fff;
  border-radius: 30px;
  margin: 0 10px;
  height: 100%;
  display: flex;
  flex-direction: column;

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

}

`
