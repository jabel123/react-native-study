import React, {Component} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

export default class App extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage} source={require('./user.png')}/>
                    </View>
                    <View>
                        <Text style={styles.cardName}>
                            키노시타 아유미
                        </Text>
                    </View>
                    <View style={styles.cardOccupationContainer}>
                        <Text style={styles.cardOccupation}>
                            원한해결 사무소
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.cardDescription}>
                            당신의 원한을 해결해 드립니다.
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const profileCardColor = 'dodgerblue'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15
    },
    cardImage: {
        width: 80,
        height: 80
    },
    cardName: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
        textShadowColor: 'black',
        textShadowOffset: {
            height: 2,
            width: 2
        },
        textShadowRadius: 3
    },
    cardOccupationContainer: {
        borderColor: 'black',
        borderWidth: 3,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0
    },
    cardOccupation: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },
    cardDescription: {
        fontStyle: 'italic',
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10
    }
})