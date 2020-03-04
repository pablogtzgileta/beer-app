import React from 'react';
import { Switch, Route } from 'react-router-native';
import styled from 'styled-components';
import Home from "./modules/Home/containers/Home";
import Alcohol from "./modules/Filters/containers/Alcohol";
import Organic from "./modules/Filters/containers/Organic";
import BothFilters from "./modules/Filters/containers/BothFilters";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Container>
                    <Route exact path="/" component={ Home }/>
                    <Route exact path="/alcohol" component={ Alcohol }/>
                    <Route exact path="/organic" component={ Organic }/>
                    <Route exact path="/both" component={ BothFilters }/>
                </Container>
            </Switch>
        );
    }
}

const Container = styled.View`
    padding: 0 22px;
`;
export default Routes;
