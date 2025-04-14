import React, { useState } from "react";
import "./Upload.css";
import { FaFileUpload } from "react-icons/fa";
/*import Icone from "./assets/add_photo_alternate_outlined.svg";*/

function Upload() {
  const [image, setImage] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  }

  function triggerFileInput() {
    document.getElementById("fileInput").click();
  }

  return (
    <div className="uploadcontainer" onClick={triggerFileInput}>
      <input
        id="fileInput"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      {image ? (
        <img src={image} alt="Preview" className="uploadpreview" />
      ) : (
        <div className="uploadplaceholder">
          <div className="logo">
            <FaFileUpload />
          </div>
        </div>
      )}
    </div>
  );
}

export default Upload;
