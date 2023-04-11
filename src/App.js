import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
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
        <Button secondary outline>
          Hide Ads
        </Button>
      </div>
      <div>
        {/* primary is true */}
        <Button primary rounded>
          Something
        </Button>
      </div>
    </div>
  );
}

export default App;
