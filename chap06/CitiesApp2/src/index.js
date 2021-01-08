import React from 'react'
import { View, Text, Button } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';

class LogoTitle extends React.Component {
    render() {
      return (
        <View>
            <Text>hello</Text>
        </View>
      );
    }
  }

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: () => <LogoTitle/>,
    };

    componentDidMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount })
    }

    state={
        count: 0
    }
    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button 
                    title="Go to Details"
                    onPress={() => {
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here'
                        })}
                    }/>
            </View>
        )
    }
}

class DetailsScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        };
    };

    render() {
        const { navigation } = this.props
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>
                    itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
                </Text>
                <Text>
                    otherParam: {JSON.stringify(navigation.getParam('otherParam', 'NO PARAM'))}
                </Text>
                <Button
                    onPress={() => this.props.navigation.push('Details')}
                    title="Go to Details... again"/>
                <Button
                    onPress={() => this.props.navigation.navigate('Home')}
                    title="Home"/>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="go back"/>
                <Button     
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({ otherParam: 'Updated'})}/>
            </View>
        );
    }
}

const AppNavigator = createBottomTabNavigator({
        Home: { screen: HomeScreen },
        Details: { screen: DetailsScreen }
    },
    {
        initialRouteName: 'Home'        
    }
)

export default createAppContainer(AppNavigator)