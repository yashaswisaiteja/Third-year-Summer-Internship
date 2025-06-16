import React from "react";
import ProfileCard from "./ProfileCard";
const profiles = [
  {
    name: "Yashaswi",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    description: "Expert in React, CSS, and UI design.",
  },
  {
    name: "Ram",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    description: "Focuses on cloud infrastructure and CI/CD.",
  },
  {
    name: "Likitha",
    role: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    description: "Skilled in Node.js, Express, and databases.",
  },
  {
    name: "Shankar",
    role: "AWS Engineer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    description: "Focuses on cloud infrastructure and CI/CD.",
  },
  {
    name: "Harsha",
    role: "Devops Engineer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    description: "Focuses on cloud infrastructure and CI/CD.",
  },
  {
    name: "Sravanthi",
    role: "Data Specialist",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    description: "Loves to build scalable full-stack apps.",
  },
];
const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "20px",
  backgroundColor: "#f4f4f4",
  minHeight: "30vh",
};
function App() {
  return (
    <div style={containerStyle}>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          role={profile.role}
          image={profile.image}
          description={profile.description}
        />
      ))}
    </div>
  );
}
export default App;