import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="shadow-lg p-6 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ?
      <button
        className="cursor-pointer underline"
        onClick={() => setIsVisible(false)}
      >
        Hide
      </button> :
       <button
        className="cursor-pointer underline"
        onClick={() => setIsVisible(true)}
      >
        Show
      </button> }
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about")
  return (
    <div className="h-screen p-6">
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quis velit doloremque necessitatibus tenetur voluptatibus itaque quam! Rerum molestias, sint repellendus consectetur placeat aspernatur harum consequuntur veniam et ipsam quos? sit amet consectetur adipisicing elit. Sapiente quis velit doloremque necessitatibus tenetur voluptatibus itaque quam! Rerum molestias, sint repellendus consectetur placeat aspernatur harum consequuntur veniam et ipsam quos?"
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
        
      />
      <Section
        isVisible ={visibleSection === "team"}
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quis velit doloremque necessitatibus tenetur voluptatibus itaque quam! Rerum molestias, sint repellendus consectetur placeat aspernatur harum consequuntur veniam et ipsam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quis velit doloremque necessitatibus tenetur voluptatibus itaque quam! Rerum molestias, sint repellendus consectetur placeat aspernatur harum consequuntur veniam et ipsam quos? quos?"
        }
        setIsVisible={() => setVisibleSection("team")}
      />
      <Section
        isVisible={visibleSection === "careers"}
        title={"Careers"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quis velit doloremque necessitatibus tenetur voluptatibus itaque quam! Rerum molestias, sint repellendus consectetur placeat aspernatur harum consequuntur veniam et ipsam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quis velit doloremque necessitatibus tenetur voluptatibus itaque quam! Rerum molestias, sint repellendus consectetur placeat aspernatur harum consequuntur veniam et ipsam quos? quos?"
        }
        setIsVisible={() => setVisibleSection("careers")}
      />
    </div>
  );
};

export default Instamart;
