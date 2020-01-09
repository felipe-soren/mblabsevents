import styled from 'styled-components'

export const Container = styled.header`
  background-color: white;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;
  padding: 20px 50px;
  border-bottom: 1px solid rgba(46, 62, 72, 0.12);

  img {
    width: 24px
  }

  nav {
    display: flex
  }
  
  li a {
    color: #191c03;
  }

  li {
    font-size: 14px;
    margin: 0 15px;
  }

  li:first-child {
    margin-left: 0;
  }

  li:last-child {
    margin-right: 0;
  }
`