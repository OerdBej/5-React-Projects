import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <div>
        <Button success primary rounded outline>
          Click Me
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Me
        </Button>
      </div>
      <div>
        <Button warning>See Deal</Button>
      </div>
      <div>
        <Button>What</Button>
      </div>
      <div>
        <Button>Open Source</Button>
      </div>
    </div>
  );
}

export default App;
