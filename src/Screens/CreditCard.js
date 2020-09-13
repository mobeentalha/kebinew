import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {BackF, ImageF} from '../../assets/images';

class CreaditCard extends Component {
  static navigationOptions = {
    drawerLabel: 'Credit Card',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={ImageF}
    //     style={[{ height: 20, width: 10 }, { tintColor: "#fff" }]}
    //   />
    // ),
  };
  constructor(props) {
    super(props);
    this.state = {
      country: 'uk',
    };
  }


  
  componentDidMount() {
    
  }

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
                alignItems: 'center',
                flexDirection: 'row',
              }}
              source={require('../../assets/images/top.jpg')}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'transparent',
                  paddingVertical: 12,
                  paddingHorizontal: 18,
                  borderRadius: 10,
                  width: '25%',
                  position: 'absolute',
                  left: '2%',
                  top: '30%'
                }}
                 onPress={() => this.props.navigation.goBack()}>
                  <Image source={require('../../assets/images/icons/back.png')} />
              </TouchableOpacity>
              <Text style={styles.HeadingText}> Creadit Card</Text>  
            </ImageBackground>
          </View>
          <View style={{flex: 1}}>
            <ScrollView>
              <View
                style={{
                  padding: 32,
                  justifyContent: 'space-evenly',
                  height: '120%'
                }}>
                <View style={{flex: 2}}>
                  <TextInput
                    keyboardType="number-pad"
                    placeholder="Card No"
                    placeholderTextColor="#5b82e9"
                    style={styles.input}
                  />
                  <TextInput
                    keyboardType="number-pad"
                    placeholder="Card Title"
                    placeholderTextColor="#5b82e9"
                    style={styles.input}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    flex: 2
                  }}>
                  <TextInput
                    keyboardType="number-pad"
                    placeholder="MM/YY"
                    placeholderTextColor="#5b82e9"
                    style={styles.input}
                  />
                  <TextInput
                    keyboardType="number-pad"
                    placeholder="CSV"
                    placeholderTextColor="#5b82e9"
                    style={styles.input}
                  />
                  <TextInput
                    keyboardType="number-pad"
                    placeholder="Zip/Postal Code"
                    placeholderTextColor="#5b82e9"
                    style={styles.input}
                  />
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: '5%',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#2cc8de',
                      paddingVertical: 12,
                      paddingHorizontal: 18,
                      borderRadius: 10,
                    }}
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 18,
                      }}>
                      Confirm
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
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
export default CreaditCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bar: {
    // marginTop: "15%",
    backgroundColor: '#2cc8de',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%'
  },
  image: {
    // width: "100%",
    // height: "100%",
    backgroundColor: 'white',
    flex: 1,
  },
  HeadingText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: '10%',
  },
  input: {
    borderColor: '#5b82e9',
    color: '#5b82e9',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
    flex: 1,
    marginTop: '5%',
    marginHorizontal: 4,
    // backgroundColor: 'red',
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
