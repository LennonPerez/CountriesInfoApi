import { createGlobalStyle } from "styled-components";

export const light = {
  body: "hsl(0, 0%, 98%)",
  fontColor: "hsl(200, 15%, 8%)",
  elements: "hsl(0, 0%, 100%)",
  input: "hsl(0, 0%, 52%)",
};
export const dark = {
  body: "hsl(207, 26%, 17%)",
  fontColor: "hsl(0, 0%, 100%)",
  elements: "hsl(209, 23%, 22%)",
  input: "hsl(0, 0%, 52%)",
};

export const GlobalStyles = createGlobalStyle`
 * {
    color: ${(props) => props.theme.fontColor};
  }
    header, .contenedor{
        background-color: ${(props) => props.theme.elements};
        h2, p{
            color: ${(props) => props.theme.fontColor};
    }
    }
    .contenedor-input, .contenedor-filtro, .contenedor-principal, body{
        background-color: ${(props) => props.theme.body};
        transition: background-color .3s ease;
    }
    .menu-oculto{
      li{
        padding-left: 2rem;
      :hover {
          background-color: ${(props) => props.theme.input};
          color: ${(props) => props.theme.fontColor};
          font-weight: 600;
          border-radius: 5px;
      }}
    }
    .contenedor {
    transition: width 0.3s ease;
    @media (min-width: 685px) {
      :hover {
        width: 110%;
      }
    }
    .contenedor-info {
      background-color: ${(props) => props.theme.elements};
      h3 {
        color: ${(props) => props.theme.fontColor};
      }
      span {
        color: ${(props) => props.theme.fontColor};
      }
    }
  }
  .filtradores {
    input,
    ul {
      background-color: ${(props) => props.theme.elements};
    }
  }
  .back {
    button {
      background-color: ${(props) => props.theme.elements};
      color: ${(props) => props.theme.fontColor};
      :hover {
        background: ${(props) => props.theme.input};
        color: white;
      }
    }
  }
  .columnas {
    span {
      color: ${(props) => props.theme.fontColor};
    }
  }
  .fronteras {
    .frontera {
      background-color: ${(props) => props.theme.elements};
      :hover {
        background: ${(props) => props.theme.input};
        color: white;
      }
    }
  }
 
`;
