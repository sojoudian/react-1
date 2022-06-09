import React, { Component } from "react";

export default class AppContent extends Component {

    fetchList = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then(json => {
            console.log(json);
        })
    }
    render() {
        return (
            <p>This is the content.
            <br />
            <button onClick={this.fetchList} className="btn btn-primary" href="#"> Fetch Data</button>

            <hr />

            <ul id="post-list"></ul>
            </p>
        )
    }
}