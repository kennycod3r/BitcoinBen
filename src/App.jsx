import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
//import PorsheHome from "./PorsheFile/PorsheHome";

function App() {
  return (
    <div className="bodyWrapper">
      {/*<PorsheHome />*/}
      <div className="container">
        <Header />
        <div className="body-div">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
