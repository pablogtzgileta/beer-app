import React, { Component } from 'react';
import styled from 'styled-components';

class FilterCard extends Component {

    // onCardPress = (goTo) => {
    //     const {history} = this.props
    //     history.push('/alcohol');
    // };
    render() {

        const { title, bgColor } = this.props;

        return (
            <Card bgColor={ bgColor }>
                <Title>{ title }</Title>
            </Card>
        );
    }
}

const Card = styled.View`
    width: 100%;
    height: 150px;
    margin-top: 20px;
    align-items: center;
  	justify-content: center;
    background-color: #${ props => props.bgColor };
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
`;

const Title = styled.Text`
    font-size: 25px;
    color: white;
`;

export default FilterCard;
