import "./App.css";
import FunctionUp from "./components/FunctionUp/FunctionUp";
import Greet from "./components/Greet/Greet";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const element = <h1>Привет, мир!</h1>;
  const arr = [1, 2, 3];

  const getNumber = (num) => {
    console.log(num + 2);
  };

  return (
    <div className="App">
      <FunctionUp getNumber={getNumber} />
      {/* <Greet name="Jon" age={10} boolean={true} />
      <hr />
      <Greet
        begy={arr}
        h1={element}
        name="Begimai"
        age={23}
        image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
      /> */}
    </div>
  );
}

export default App;
