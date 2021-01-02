import React, { Component }  from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class App extends Component {
    render() {
        return (
            <View style= {styles.container}>
                <Example style={{borderWidth: 1}}>
                    <CenteredText>border Width: 1</CenteredText>
                </Example>
                <Example style={{borderWidth: 3, borderLeftWidth: 0}}>
                    <CenteredText>border Width: 0</CenteredText>
                </Example>
                <Example style={{borderWidth: 3, borderLeftColor: 'red'}}>
                    <CenteredText>border Width: 0</CenteredText>
                </Example>
                <Example style={{borderLeftWidth: 3}}>
                    <CenteredText>border Width: 0</CenteredText>
                </Example>
                <Example style={{borderWidth: 1, borderStyle: 'dashed'}}>
                    <CenteredText>border Width: 0</CenteredText>
                </Example>
                <View style= {styles.cardContainer}/>
            </View>
        )
    }
}

const profileCardColor = 'dodgerblue'

const Example = (props) => (
    <View style={[styles.example, props.style]}>
        {props.children}
    </View>
)
const CenteredText = (props) => (
    <Text style={[styles.centeredText, props.style]}>
        {props.children}
    </Text>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centeredText: {
        textAlign: 'center',
        margin: 10
    },  
    cardContainer: {
        backgroundColor: profileCardColor,
        width: 300,
        height: 400
    },
    example: {
        marginBottom: 15
    }
})