import React from "react";
const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "12px",
  width: "250px",
  margin: "16px",
  padding: "16px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
};
const imageStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "12px",
};
const nameStyle = {
  fontSize: "1.2rem",
  fontWeight: "bold",
};
const roleStyle = {
  color: "#777",
  marginBottom: "8px",
};
const descriptionStyle = {
  fontSize: "0.9rem",
  color: "#555",
};
const ProfileCard = ({ name, role, image, description }) => {
  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <div style={nameStyle}>{name}</div>
      <div style={roleStyle}>{role}</div>
      <div style={descriptionStyle}>{description}</div>
    </div>
  );
};
export default ProfileCard;