import React, { Component, Fragment } from "react";

export default class AppHeader extends Component {

    render() {
        const currentYear = new Date().getFullYear();
        return (
            <Fragment>
            
                <h1> { this.props.title }</h1>
            </Fragment>
        )
    }
}