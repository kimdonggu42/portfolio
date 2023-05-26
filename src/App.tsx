import GlobalStyle from "./assets/style/globalStyle";
import { ThemeProvider } from "styled-components";
import { lightMode } from "./assets/style/commonStyle";
import Main from "./pages/Main";

function App() {
  return (
    <ThemeProvider theme={lightMode}>
      <div className='App'>
        <GlobalStyle />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
