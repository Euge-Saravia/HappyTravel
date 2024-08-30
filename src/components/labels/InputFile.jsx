import "./inputFile.scss";

const InputFile = ({ onChange, error }) => {
  const presetName = "yu1h90st";
  const cloudName = "drlqmol4c";

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const imgUrl = await uploadImage(file);
    onChange(imgUrl);
  };

  const uploadImage = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", presetName);
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const file = await response.json();
      return file.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="file-container">
      <label htmlFor="file-upload" className="file-label">
        Imagen
      </label>
      <div className="file-content">
        <input
          type="file"
          id="file-upload"
          className="file-input"
          onChange={handleFileChange}
        />
        <div className="icon-container">
          <svg
            width="31"
            height="24"
            viewBox="0 0 31 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0366 23.9972C19.0313 23.9972 23.0261 23.9934 27.0202 23.9997C28.2517 24.0016 29.1565 23.4546 29.7326 22.3948C29.8957 22.0948 29.9883 21.7168 29.9896 21.3743C30.0055 16.1873 29.9674 10.9998 30.0245 5.81281C30.0385 4.56245 28.8596 3.26524 27.7473 3.09051C27.378 3.03226 27.0012 2.99871 26.6274 2.99807C22.429 2.99174 18.2312 2.98984 14.0328 3.00187C13.6724 3.00314 13.4237 2.89488 13.1762 2.63911C12.4053 1.84014 11.6186 1.05637 10.814 0.290959C10.6541 0.139016 10.3896 0.0174619 10.1719 0.0161957C7.8224 -0.00343028 5.47225 -0.00343028 3.12273 0.00669924C1.31697 0.0149295 0.00611011 1.321 0.00420663 3.1152C-0.00150378 9.05236 -0.00150378 14.9895 0.00484113 20.9267C0.0067446 22.6987 1.32268 23.9953 3.09925 23.9966C7.07878 23.9991 11.0577 23.9972 15.0366 23.9972Z"
              fill="#FBFDCE"
            />
          </svg>
        </div>
        <span className="imgText">Sube una imagen...</span>
      </div>
      {error && <p className="invalidInputText">{error}</p>}
    </div>
  );
};

export default InputFile;
