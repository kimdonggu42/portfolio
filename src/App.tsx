import GlobalStyle from "./assets/style/globalStyle";
import Main from "./pages/Main";
import { ThemeProvider } from "styled-components";
import { lightMode } from "./assets/style/commonStyle";

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
