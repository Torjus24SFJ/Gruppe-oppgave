import "./App.css";
import { BlogPreview } from "./Components/BlogPreview/BlogPreview";
// import { MatKort } from "./Components/MatKort/MatKort";
// import { NFTKort } from "./Components/NFTKort/NFTKort";
// import { ResultatOversikt } from "./Components/ResultatOversikt/ResultatOversikt";

function App() {
  return (
    <>
      <div className="gallery">
        {/* <div className="component">
          <MatKort />
        </div> */}
        {/* <div className="component">
          <NFTKort />
        </div> */}
        {/* <div className="component">
          <ResultatOversikt />
        </div> */}
        <div className="component">
          <BlogPreview />
        </div>
      </div>
    </>
  );
}

export default App;
