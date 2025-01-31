import "./App.css";
import { BlogPreview } from "./Components/BlogPreview/BlogPreview";
import { MatKort } from "./Components/MatKort/MatKort";
import { NFTKort } from "./Components/NFTKort/NFTKort";
import { ResultatOversikt } from "./Components/ResultatOversikt/ResultatOversikt";
// import { MatKort } from "./Components/MatKort/MatKort";
// import { NFTKort } from "./Components/NFTKort/NFTKort";
// import { ResultatOversikt } from "./Components/ResultatOversikt/ResultatOversikt";
import SocialKort from "./Components/SocialKort/SocialKort";
import RestCountries from "./Components/Rest-Countries/RestCountries";

function App() {
  return (
    <>
      <main>
        <div className="gallery">
          <div className="component">
            <MatKort />
          </div>
          <div className="component">
            <NFTKort />
          </div>
          <div className="component">
            <ResultatOversikt />
          </div>
          <div className="component">
            <BlogPreview />
          </div>
          <div className="component">
            <SocialKort />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
