import "./App.css";
import CharacterModel from "./components/Character";
import MainContainer from "./components/MainContainer";
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => (
  <LoadingProvider>
    <MainContainer>
      <CharacterModel />
    </MainContainer>
  </LoadingProvider>
);

export default App;
