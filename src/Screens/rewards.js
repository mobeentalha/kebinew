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
import {Icon} from 'native-base';
class RewardsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Rewards',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={ImageF}
    //     style={[{ width: "35%", height: "50%" }, { tintColor: "#fff" }]}
    //   />
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
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
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
              <Text style={styles.HeadingText}> Rewards </Text>
            </ImageBackground>
          </View>
          <View style={{flex: 1}}>
              <View
                style={{
                  height: '75%',
                }}>
                  <View 
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    height: '30%',
                    marginTop: '5%'
                  }}>
                    <View 
                      style={{
                        flex: 1,
                        borderRadius: 50,
                        height: '80%'
                      }}
                    > 
                      <Text style={styles.text}> Points Balance </Text>
                      <ImageBackground
                        resizeMode="cover" 
                        style={{
                          height: '100%',
                          marginTop: '3%',
                          marginLeft: '3%',
                          marginRight: '3%',
                          borderRadius: 50,
                          justifyContent: 'center'
                        }}
                        source={require('../../assets/images/top.jpg')}
                      >  
                      <Text style={styles.HeadingText}> 500Pts </Text>
                    </ImageBackground> 
                    </View>
                    <View 
                      style={{
                        flex: 1,
                        borderRadius: 50,
                        height: '94%'
                      }}
                    > 
                      <Text style={styles.text}> Dollar Value </Text>
                      <ImageBackground
                        resizeMode="cover" 
                        style={{
                          flex: 1,
                          height: '100%',
                          marginTop: '3%',
                          marginLeft: '3%',
                          marginRight: '3%',
                          justifyContent: 'center',
                        }}
                        source={require('../../assets/images/top.jpg')}
                      > 
                      <Text style={styles.HeadingText}> $$.$$ </Text> 
                    </ImageBackground>  
                    </View>
                  </View>
                  <View 
                    style={{
                      height: '10%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      width: '50%',
                    }}
                  > 
                    <ImageBackground
                        resizeMode="cover" 
                        style={{
                          height: '100%',
                          width: '100%',
                          marginTop: '10%',
                          marginLeft: '3%',
                          marginRight: '3%',
                          borderRadius: 50,
                          justifyContent: 'center'
                        }}
                        source={require('../../assets/images/top.jpg')}
                      >  
                        <Text style={styles.HeadingText}> Redem </Text>
                      </ImageBackground>
                  </View>
                  <View 
                    style={{
                      height: '10%', 
                      marginTop: '15%',
                      justifyContent: 'flex-start'
                    }} 
                  >
                    <Text style={styles.text1}>
                      45 pts will expire on Sept 07, 2021
                    </Text>
                    <Text style={styles.text1}>
                      20 pts will expire on Oct 07, 2021
                    </Text>
                  </View>
              </View>
                     
              {/* <View style={{ marginBottom: 100 }} /> */}
              

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
export default RewardsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bar: {
    flex: 0.15,
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
    // paddingTop: 25,
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
  text1: {
    color: '#4f93e6',
    fontSize: 15,
    fontWeight: 'bold',
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
