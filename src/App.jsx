import Body from "./components/Body";
import AppName from "./components/AppName";
import Intro from "./components/Intro";
import Time from "./components/Time";



import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Body>
        <AppName />
        <Intro />
        <Time />
      </Body>
    </>
  );
}

export default App;
