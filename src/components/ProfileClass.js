import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "Dummy "
      }
    }

    // this.state = {
    //   count: 0,
    //   count2: 0, //creating useState variable in class based comp
    // };

    console.log("child constructor");
  }

  // In this we can make an API Calls
  async componentDidMount() {

    const data = await fetch("https://api.github.com/users/sumit9953")
    const json = await data.json()

    this.setState({
      userInfo: json
    })

    console.log("child - componentDidMount");
  }

  render() {
    console.log("child render");
    return (
      <div>
        <h1>Profile class component</h1>
        {/* <h2>Name: {this.props.name}</h2>
        <h2>Count: {this.state.count}</h2>
        <h2>Count: {this.state.count2}</h2> */}
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count+1,
              count2: this.state.count2+1,
            });
          }}
        >incr</button> */}
      </div>
    );
  }
}

export default Profile;
