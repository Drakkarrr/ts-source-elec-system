import GlobalStyle from "./globalStyle";
import Landing from './pages/PageLanding';
import PageWelcome from './pages/PageWelcome';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Landing/>
      <PageWelcome/>
    </div>
  );
}

export default App;
