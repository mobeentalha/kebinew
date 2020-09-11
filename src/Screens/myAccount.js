import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {BackF, ImageF} from '../../assets/images';

class MyAccount extends Component {
  static navigationOptions = {
    drawerLabel: 'My Account',
    // drawerIcon: ({ tintColor }) => (
    //   // <Image
    //   //   source={ImageF}
    //   //   style={[{ width: "35%", height: "50%" }, { tintColor: "#fff" }]}
    //   // />
    // ),
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <View style={styles.bar}>
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                // alignItems: "center",
              }}
              source={require('../../assets/images/top.jpg')}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '5%',
                  paddingLeft: '5%'
                }}>
                <TouchableOpacity
                onPress={() => this.props.navigation.openDrawer()}
                >
                  <Image
                    resizeMode="cover"
                    style={{height: 40, width: 40}}
                    source={require('../../assets/images/icons/menu.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.HeadingText}> My Account </Text>
                <View style={{flex: 0.2}}></View>
              </View>
            </ImageBackground>
          </View>
          <View style={{flex: 1}}>
            
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
                position: 'absolute',
                top: Dimensions.get('screen').height - 300,
                right: 0,
                left: 0,
                bottom: 0,
              }}>
              <Image
                style={{width: '30%', height: '23%', alignSelf: 'center'}}
                source={ImageF}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default MyAccount;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bar: {
    flex: 0.13,
    backgroundColor: '#2cc8de',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // width: "100%",
    // height: "100%",
    backgroundColor: 'white',
    flex: 1,
  },
  HeadingText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: '5%'
  },
  input: {
    borderColor: '#5b82e9',
    color: '#5b82e9',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
    // height: "8%",
    // width: "80%",
    marginTop: '5%',
  },
  activeText: {
    color: '#4f93e6',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: '5%',
  },
  text: {
    color: '#4f93e6',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: '5%',
  },
  steps: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '5%',
    backgroundColor: 'white',
  },
  logo: {
    backgroundColor: 'transparent',
    width: '80%',
    height: '30%',
    marginTop: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '30%',
    height: '50%',
  },
});
