import React from 'react';
import { NativeRouter as Router } from 'react-router-native';
import { Provider } from 'react-redux';
import Routes from './src/routes';
import store from './src/Redux/store';


export default class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <Router>
                    <Routes/>
                </Router>
            </Provider>
        );
    }
}
