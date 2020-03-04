import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import FilterCard from "../../components/FilterCard/FilterCard";

class HomeLayout extends Component {
    render() {
        const { history } = this.props;

        return (
            <View>
                <Title>Thee Beer Filter App</Title>
                <TouchableOpacity onPress={ () => history.push('/alcohol') }>
                    <FilterCard bgColor={'edad3c'} title={ 'Filter By Alcohol %' }/>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => history.push('/organic') }>
                    <FilterCard bgColor={'efb54f'} title={ 'Filter By Is Organic' }/>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => history.push('/both') }>
                    <FilterCard bgColor={'f1be65'} title={ 'Both Filters' }/>
                </TouchableOpacity>
            </View>
        );
    }
}

const Title = styled.Text`
    text-align: center;
    font-size: 25px;
    margin-top: 50px;
`;

export default HomeLayout;
