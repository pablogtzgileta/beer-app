import React, { Component } from 'react';
import HomeLayout from "../../layouts/Home";
import { withRouter } from 'react-router-native';

class Home extends Component {

    render() {
        const { history } = this.props;
        return (
            <HomeLayout history={ history }/>
        );
    }
}

export default withRouter(Home);
