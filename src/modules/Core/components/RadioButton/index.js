import React, { Component } from 'react';
import { View } from 'react-native';

class RadioButton extends Component {
    render() {
        const { style, selected } = this.props;
        return (
            <View style={ [ {
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: '#efb54f',
                alignItems: 'center',
                justifyContent: 'center',
            }, style ] }>
                {
                    selected ?
                        <View style={ {
                            height: 12,
                            width: 12,
                            borderRadius: 6,
                            backgroundColor: '#efb54f',
                        } }/>
                        : null
                }
            </View>
        );
    }
}

export default RadioButton;
