import React from "react";

class Profile extends React.Component{

    render() {
        return (
            <div>
            <h1>Profile class component</h1>
            <h2>Name: {this.props.name}</h2>
            </div>
        )
    }
}

export default Profile