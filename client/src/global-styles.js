import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after{ margin: 0; padding: 0; box-sizing: border-box; } 
  body{
    width: 100%;
    overflow-x: hidden; overflow-y: scroll;
  }

  /* pages transition: enter 300ms | exit 150ms */
  .fade-appear,
  .fade-enter {
      opacity: 0;
      z-index: 1;
  }
  .fade-appear-active,
  .fade-enter.fade-enter-active {
      opacity: 1;
      transition: opacity 300ms linear 150ms;
  }

  .fade-exit {
      opacity: 1;
  }

  .fade-exit.fade-exit-active {
      opacity: 0;
      transition: opacity 0ms linear; /* 150ms */
      
  }
`;