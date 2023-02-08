import "./index.css";
import CMS from "netlify-cms-app";

function App() {
  CMS.init();
  CMS.registerPreviewTemplate("my-template", MyTemplate);
  return (
    <div className="App">
      <h1>Paws</h1>
    </div>
  );
}

export default App;
