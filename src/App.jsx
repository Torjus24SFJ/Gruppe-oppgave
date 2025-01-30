import "./App.css";
import { AdviceGenerator } from "./Components/AdviceGenerator/AdviceGenerator";
import { BlogPreview } from "./Components/BlogPreview/BlogPreview";
import { MatKort } from "./Components/MatKort/MatKort";
import { NFTKort } from "./Components/NFTKort/NFTKort";
import {QRCodeComponent} from "./Components/QR-codeComponent/QRCodeComponent";
import { ResultatOversikt } from "./Components/ResultatOversikt/ResultatOversikt";
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
          <div className="component">
            <QRCodeComponent />
          </div>
          <div className="component">
            <AdviceGenerator />
          </div>
          <div className="component">
            <RestCountries />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
