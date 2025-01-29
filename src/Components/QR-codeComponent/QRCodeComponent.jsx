import "./QRCodeComponent.css";
import qrCodeImage from "./assets/image-qr-code.png";

export const QRCodeComponent = () => {
  return (
    <div className="qr-page">
      <div className="qr-card">
        <img src={qrCodeImage} alt="QR Code" className="qr-image" />
        <div className="qr-text">
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};
