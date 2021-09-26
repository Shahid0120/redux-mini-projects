import "./App.css";
import HomePage from "./componets/Homepage/HomePage";
import Nav from "./componets/Nav/Nav";
function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <HomePage />
      </div>
    </>
  );
}

export default App;
