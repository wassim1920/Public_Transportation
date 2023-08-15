import React, { useState } from "react";
import "./profileSetting.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";


const ProfileSettings = () => {
  const [file, setFile] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <Navbar />
      <div className="profile-settings">
        <h2>Profile Settings</h2>
        <form onSubmit={handleSubmit}>
        <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className="rimg"
            />
          </div>
          <div className="formInput">
            <label htmlFor="file">
              image : <DriveFolderUploadOutlinedIcon className="icon" />
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Link to="/">
            {" "}
            <button type="submit">Save Changes</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
