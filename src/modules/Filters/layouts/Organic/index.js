import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components';
import Images from '../../../../assets/images/index';
import ListItem from "../../../Core/components/ListItem";
import RadioButton from "../../../Core/components/RadioButton";


class OrganicLayout extends Component {

    render() {
        const { history, beers, loading, updateList, changeSelected, activeRadio, searchByOrganic } = this.props;
        return (
            <View style={ { height: Dimensions.get('window').height } }>
                <View style={ { flex: 2 } }>
                    <Back onPress={ () => history.push('/') }>
                        <Icon source={ Images.arrows.back }/>
                    </Back>
                    <Title>Organic</Title>
                </View>
                <View style={ {
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: 30
                } }>
                    <TouchableOpacity style={ { flexDirection: 'row' } } onPress={ () => searchByOrganic(1) }>
                        <RadioButton selected={ activeRadio === 1 }/><Text
                        style={ { marginLeft: 10, marginRight: 30 } }>Organic</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ { flexDirection: 'row' } } onPress={ () => searchByOrganic(2) }>
                        <RadioButton selected={ activeRadio === 2 }/><Text
                        style={ { marginLeft: 10 } }>Non Organic</Text>
                    </TouchableOpacity>
                </View>

                <View style={ { flex: 11 } }>
                    <ListContainer>
                        { !loading && beers ? <FlatList
                            data={ beers }
                            onEndReached={ updateList }
                            onEndReachedThreshold={ 100 }
                            renderItem={ ({ item }) => {
                                return (
                                    <ListItem item={ item }/>
                                )
                            } }
                            keyExtractor={ item => item.id }
                        /> : <ActivityIndicator size="large" color="0000ff"/> }
                    </ListContainer>
                </View>
            </View>
        );
    }
}

const Title = styled.Text`
    text-align: center;
    font-size: 25px;
    display: flex;
    margin-top: 50px;
    z-index: 1;
`;

const ListContainer = styled.View`
    height: 100%;
    margin: 10px -22px 0;
`;

const Icon = styled.Image`
	height: 25px;
	width: 25px;
`;

const Back = styled.TouchableOpacity`
	position: relative;
    top: 55px;
	z-index: 1000000;
`;

export default OrganicLayout;
