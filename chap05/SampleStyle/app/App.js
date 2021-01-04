import React, { Component }  from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class App extends Component {
    render() {
        return (
            <View style= {styles.container}>
                <View style={styles.flexContainer}>
                    <Example style={[styles.darkgrey]}>A 50%</Example>
                    <Example>B 50%</Example>
                </View>
                <View style={styles.flexContainer}>
                    <Example style={[styles.darkgrey]}>C 33%</Example>
                    <Example style={{flex: 2}}>D 66%</Example>
                </View>
                <View style={styles.flexContainer}>
                    <Example style={[styles.darkgrey]}>E 25%</Example>
                    <Example style={{flex: 3}}>F 75%</Example>
                </View>
            </View>
        )
    }
}

const profileCardColor = 'dodgerblue'

const Example = (props) => (
    <View style={[styles.example, props.style]}>
        <Text>
            {props.children}
        </Text>        
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexContainer: {
        width: 150,
        height: 150,
        borderWidth: 1,
        margin: 10,
        justifyContent: 'flex-end',
        alignItems: 'baseline'        
    },  
    darkgrey: {
        backgroundColor: '#666666'
    },
    lightgrey: {
        backgroundColor: '#ededed'
    },
    cardContainer: {
        backgroundColor: profileCardColor,
        width: 300,
        height: 400
    },
    example: {    
        alignItems: 'center',
        justifyContent: 'center'
    },
})
