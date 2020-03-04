import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

class ListItem extends Component {

    render() {
        const { item: { name, abv, isOrganic } } = this.props;

        return (
            <ItemContainer>
                <Name>{ name }</Name>
                <View style={{flexDirection: 'row'}}>
                    {abv ? <AlcoholData>{ abv }% Alcohol</AlcoholData> : <AlcoholData>Unknown</AlcoholData>}
                    <OrganicData>{ isOrganic === 'N' ? 'Non Organic' : 'Organic' }</OrganicData>
                </View>
            </ItemContainer>
        );
    }
}

const ItemContainer = styled.View`
    padding: 18px 22px;
    border-bottom-color: #efefef;
    border-bottom-width: 1px;
`;

const Name = styled.Text`
    font-size: 18px;
    margin-bottom: 10px;
`;

const AlcoholData = styled.Text`
    color: #a5a5a5;
`;

const OrganicData = styled.Text`
    margin-left: 20px;
    color: #a5a5a5;
`;

export default ListItem;
