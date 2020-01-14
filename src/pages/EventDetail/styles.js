import styled from 'styled-components';


export const Container = styled.div`
padding: 50px;
padding-top: 0;
display:grid;
grid-template-columns: 2fr 1fr;
grid-template-rows: 40vh 70vh;
grid-template-areas: "header header"
                     "main aside";

@media (max-width: 600px) {
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 40vh 20vh 70vh;
  grid-template-areas: "header header"
                        "aside aside"
                        "main main";

}
                     
header {
  display: flex;
  grid-area: header;
  justify-content: center;
  img{
    object-fit: cover;
    width: 80%;
  }
}

main {
  grid-area: main;
  padding: 10% 0 5% 15%;
  + p {
    padding: 3% 0 0 0; 
  }
}

aside {
  display: flex;
  grid-area: aside;
  justify-content: center;
  padding: 20% 0 0 0;
  button {
    color: #fff;
    font-size: 16px;
    background: #5CE091;
    height: 56px;
    border: 0;
    border-radius: 40px;
    width: 70%;
    cursor: pointer;
    &:hover{
      background: #61BD86
    }
  }
}
`;
