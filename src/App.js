import "./App.css";
import ClickCounterTwo from "./component/ClickCounterTwo";
import Counter2 from "./component/Counter2";
import HoverCounterTwo from "./component/HoverCounterTwo";


function App() {
  return (
    <div className="App">
      <Counter2
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />

      <Counter2
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />

      
    </div>
  );
}

export default App;
