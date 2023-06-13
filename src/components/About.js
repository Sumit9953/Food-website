import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

// const About = () => {
//   return (
//     <div>
//         <h1>About</h1>
//         {/* <Outlet /> */}

//         {/* Next way to render profile */}
//         <Profile />

//         <ProfileClass name = {"sumit"} />

//     </div>
//   )
// }

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent - constructor");
  }

  componentDidMount() {

    console.log("parent - componentDidMount");
  }

  render() {
    console.log("parent - render");
    return (
      <div>
        <h1>About</h1>
        {/* <Outlet /> */}

        {/* Next way to render profile */}
        {/* <Profile /> */}

        <ProfileClass name={"sumit"} />
      </div>
    );
  }
}

export default About;
