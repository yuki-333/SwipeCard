import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {
  createStackNavigator
} from 'react-navigation';
import { 
  moderateScale
 } from 'react-native-size-matters';

import FruitsScreen from './Fruits';
import VegeScreen from './Veges'
import AisatuScreen from './Greetings'
import ToolScreen from './Tools';
import CarsScreen from './Cars'

const SCREEN_WIDTH = Dimensions.get('window').width

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'HOME',
    headerStyle: {backgroundColor: 'skyblue'},
    headerTintColor: 'white',
  };

  constructor(props) {
    super(props);
    this.state = {
      message: 'カテゴリー内からカードの種類を選び、言語訓練などにご使用ください。'
    }
  }

  render() {
    return(
      <View style={styles.base}>
      <View style={styles.message}>
        <Text style={styles.textStyle1}>{this.state.message}</Text>
      </View>
        <View style={styles.contents}>
        <ScrollView horizontal={false}> 
        <View style={styles.allButtonContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.doAction0}>
            <Text style={styles.buttonText} >果物</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.doAction1}>
          <Text style={styles.buttonText} >野菜</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.doAction4}>
          <Text style={styles.buttonText} >乗り物</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.doAction3}>
          <Text style={styles.buttonText} >日用品</Text>
          </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
        </View>
          <View style={styles.footer}>
            <Text style={styles.textStyle2}  >© 2019 nara</Text>
          </View>
      </View>
    );
  }
  doAction0 = () => {
    this.props.navigation.navigate('Fruits')
  }
  doAction1 = () => {
    this.props.navigation.navigate('Vege')
  }
  doAction2 = () => {
    this.props.navigation.navigate('Aisatu')
  }
  doAction3 = () => {
    this.props.navigation.navigate('Tool')
  }
  doAction4 = () => {
    this.props.navigation.navigate('Cars')
  }
}

export default createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Fruits: { screen: FruitsScreen },
    Vege: { screen: VegeScreen },
    Aisatu: { screen: AisatuScreen },
    Tool: { screen: ToolScreen},
    Cars: {screen: CarsScreen},
  },
  {
    initialRouteName: 'Home',
  }
);


const styles = StyleSheet.create({
  base: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'lavender',
    alignItems: 'center',
  },
  message: {
    flex: 2,
    width: SCREEN_WIDTH - 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'royalblue',
  },
  contents: {
    flex: 14,
    width: SCREEN_WIDTH - 20,
    backgroundColor: 'white'
  },
  allButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    margin: 10,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'deepskyblue',
    borderColor: 'lightskyblue',
    borderWidth: 5,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 33,
    color: 'white',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
    width: SCREEN_WIDTH - 20,
  },
  textStyle1: {
    fontSize: moderateScale(15),
    color: 'white',
  },
  textStyle2: {
    fontSize: moderateScale(10),
    color: 'black',
  }
});