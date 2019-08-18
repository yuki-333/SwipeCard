import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  Button
} from 'react-native';
import { scale, verticalScale, } from 'react-native-size-matters';
import SwipeCards from 'react-native-swipe-cards';

const cards = [
  { name:'りんご', image: require('../assets/images/Fruits/Ringo.jpg') },
  { name:'かき', image: require('../assets/images/Fruits/Kaki.jpg') },
  { name:'みかん', image: require('../assets/images/Fruits/Mikan.jpg') },
  { name:'ばなな', image: require('../assets/images/Fruits/Banana.jpg') },
  { name:'いちご', image: require('../assets/images/Fruits/Itigo.jpg') },
  { name:'れもん', image: require('../assets/images/Fruits/Lemon.jpg') },
  { name:'もも', image: require('../assets/images/Fruits/Momo.jpg') },
  { name:'なし', image: require('../assets/images/Fruits/Nasi.jpg') },
  { name:'さくらんぼ', image: require('../assets/images/Fruits/Sakuranbo.jpg') },
  { name:'ぱいなっぷる', image: require('../assets/images/Fruits/Pineapple.jpg') },
]

export default class App extends React.Component {
  static navigationOptions = {
    title: '果物',
    headerStyle: {backgroundColor: 'lightskyblue',},
    headerTintColor: 'white',
  };
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: true,
    }
  }
  

  render() {
    return (
      <View style={styles.base}>
      <SwipeCards
        renderCard={(cardData) => <FruitsScreen {...cardData} />}
        cards={this.state.cards}
        loop={true}
        showYup={false}
        showNope={false}
        showMaybe={false}
        hasMaybeAction={true}
      />
      </View>
    );
  }
}

class FruitsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
  }

  render() {
    return (
      <View style={styles.cardBase}>
        <View style={styles.thumbnail}>
          <Image  source={this.props.image} />
        </View> 
        <Modal animationType="fade" transparent={true} visible={this.state.modal} onRequestClose={this.closeModal}>
        <View style={styles.modalBase}>
        <View style={styles.modalPanel}>
          <Text style={styles.modalContent}>{this.props.name}</Text>
          <TouchableOpacity style={styles.modalButton} onPress={this.doModalAction} >
          <Text style={styles.cardText} >OK</Text>
        </TouchableOpacity>
        </View>
        </View>
        </Modal>
        <View style={styles.cardButonBase}>
        <TouchableOpacity style={styles.cardButon} onPress={this.doAction} >
          <Text style={styles.cardText} >読み</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
  doAction = () => {
    this.setState({modal: true})
  }
  doModalAction = () => {
    this.setState({modal:false,});
  }
}


const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  cardBase: {
    width: scale(300),
    height: verticalScale(555),
    padding: scale(5),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'lightskyblue',
    borderWidth: 5,
    borderRadius: 10,
    borderColor: 'lightskyblue',
  },
  thumbnail: {
    flex: 7,
    width: scale(280),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderRadius: 10,
    borderColor: 'lightskyblue',
    backgroundColor: 'white',
  },
  cardButonBase: {
    flex: 1,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightskyblue',
  },
  cardButon: {
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightskyblue',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'white',
  },
  cardText: {
    fontSize: scale(20),
    color: 'white',
  },
  modalBase: {
    flex:1, 
    justifyContent:'center',
    backgroundColor:'#00000099', 
  },
  modalPanel: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin:50,
    backgroundColor:'white',
    borderRadius: 30,
    borderWidth:2,
    borderColor:'black',
  },
  modalContent: {
    padding:10,
    fontSize: scale(40),
  },
  modalButton: {
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightskyblue',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'white',
    fontSize: scale(20),
  },
})




