import React from "react";

const cardStyle = {
  width: "250px",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
  overflow: "hidden",
  fontFamily: "sans-serif",
  background: "#fff",
  border: "2px solid #5d5ebf",
  margin: "16px",
  padding: 0,
};

const headerStyle = {
  background: "linear-gradient(180deg, #6a8dff 0%, #a3c1ff 100%)",
  height: "90px",
  position: "relative",
};

const imageWrapperStyle = {
  position: "absolute",
  left: "50%",
  top: "90px",
  transform: "translate(-50%, -50%)",
  width: "75px",
  height: "75px",
  borderRadius: "50%",
  background: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  border: "2px solid #e0e0e0",
};

const imageStyle = {
  width: "70px",
  height: "70px",
  borderRadius: "60%",
  objectFit: "cover",
};

const contentStyle = {
  padding: "32px 10px 16px 10px",
  textAlign: "center",
};

const nameStyle = {
  fontSize: "1.1rem",
  fontWeight: "bold",
  margin: "8px 0 4px 0",
};

const roleStyle = {
  color: "#222",
  fontWeight: 500,
  fontSize: "0.95rem",
  marginBottom: "6px",
};

const descriptionStyle = {
  fontSize: "0.85rem",
  color: "#555",
  marginBottom: "12px",
};

const ProfileCard = ({ name, role, image, description }) => {
  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <div style={imageWrapperStyle}>
          <img src={image} alt={name} style={imageStyle} />
        </div>
      </div>
      <div style={contentStyle}>
        <div style={nameStyle}>{name}</div>
        <div style={roleStyle}>{role}</div>
        <div style={descriptionStyle}>{description}</div>
      </div>
    </div>
  );
};

export default ProfileCard;