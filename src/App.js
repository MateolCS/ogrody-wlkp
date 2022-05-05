import {ThemeProvider} from 'styled-components';
import GlobaStyles from './components/styles/Global';
import Header from './components/Header';
const theme = {
  breakpoints: {
    mobile: '768px'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobaStyles/>
      <>
        <Header/>
      </>
    </ThemeProvider>
  );
}

export default App;
