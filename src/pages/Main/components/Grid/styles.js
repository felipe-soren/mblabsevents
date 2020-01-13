import styled from 'styled-components';

export const Test = styled.div`

margin-top: 90px;

.card {
  background-color: dodgerblue;
  color: white;
  padding: 1rem;
  height: 4rem;
}

.cards {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
}

`;
