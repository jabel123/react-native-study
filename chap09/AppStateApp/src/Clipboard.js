import React, {Component } from 'react'
import { TextInput, Clipboard, TouchableHighlight, getString, View, Text, StyleSheet } from 'react-native'

let styles = {}

export default class App extends Component { 
    constructor() {
        super() 
        this.state = {
            clipboardData: []
        }
        this.pushClipboardToArray = this.pushClipboardToArray.bind(this);
    }

    componentDidMount() {
        Clipboard.setString('Hello World! ');
    }

    updateClipboard(string) {
        Clipboard.setString(string);
    }

    async pushClipboardToArray() {
        const { clipbaordData } = this.state
        var content = await Clipboard.getString();

        clipboardData.push(contnet)

        this.setState({clipboardData})

    }   
    
    render() {
        const { clipboardData } = this.state
        return (
            <View style = {styles.container} >
                <Text style={{textAlign: 'center'}}>Testing Clipboard</Text>

                <TextInput style={styles.input} onChangeText={(text) => this.updateClipboard(text)}/>

                <TouchableHighlight style={styles.button} onPress={this.pushClipboardToArray}>
                    <Text>Click To Add Array</Text>
                </TouchableHighlight>
                {
                    clipboardData.map((d, i) => {
                        return <Text key={i}>{d}</Text>
                    })
                }
            </View>
        )
    }
}

styles = StyleSheet.create( {
    container: {
        justifyContent: 'center',
        flex: 1,
        margin: 20
    },
    input: {
        padding: 10,
        marginTop: 15,
        height: 60,
        backgroundColor: '#dddddd'
    },
    button: {
        backgroundColor: '#dddddd',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        marginTop: 15,
    }
})