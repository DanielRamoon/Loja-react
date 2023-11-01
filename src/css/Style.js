import styled from "styled-components";

export const ProductsArea = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;

  div {
    height: 320px;
    width: 230px;
    border: 1px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column; // Correção aqui
    padding: 20px;
  }

  button {
    font-size: 25px;
    background: transparent;
    border: none;
    color: crimson;
  }
`;

export const HeaderArea = styled.header`
  display: flex;
  align-items: center; // Correção aqui
  justify-content: center;
  gap: 50px;
  background-color: crimson;
  padding: 20px;
  margin-bottom: 70px;
  position: fixed;
  top: 0;
  width: 100%;

  a {
    text-decoration: none;
    color: #fff;
  }
`;
