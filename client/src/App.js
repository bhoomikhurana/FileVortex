import { useRef, useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/erol-ahmed-FTy5VSGIfiQ-unsplash.jpg";
import { uploadFile } from "./services/api";
function App() {
  const fileInputRef = useRef();
  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  const [file, setFile] = useState("");
  console.log(file);
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await uploadFile();
      }
    };
    getImage();
  }, [file]);
  return (
    <div className="container">
      {/* <img src={logo} alt="banner" /> */}
      <div className="wrapper">
        <h1>FILE VORTEX</h1>
        <p className="tag">Unleash the Power of Seamless Sharing</p>
        <button onClick={() => onUploadClick()}>Upload</button>

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
    </div>
  );
}

export default App;
