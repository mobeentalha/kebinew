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
class KebiPromos extends Component {
  static navigationOptions = {
    drawerLabel: 'KEBI Promos',
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
              <Text style={styles.HeadingText}> KEBI Promos / Deals </Text>
            </ImageBackground>
          </View>
          <View style={{flex: 1}}>
            <View style={{margin: '5%', height: '75%'}}>
                <View style={{flex: 1}} >
                    <Text style={styles.text}>
                        Invite your friends and you and your friend get 500pts when they place first order.
                    </Text>
                </View>
                <View style={{flex: 1}}> 
                    <Text style={styles.text}>
                        Share your Link
                    </Text>
                    <View style={{flexDirection: 'row'}}> 
                        <TextInput
                            placeholder="Copy Link"
                            placeholderTextColor="#5b82e9"
                            style={styles.input}
                        />
                        <TouchableOpacity
                            style={styles.customButton}>
                            <Text style={styles.customButtonText}>COPY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 3}}> 
                    <Text style={styles.text1}>
                        Get $3.00 of on your first service booking. Offer expires 10/07/2020 Promo code OFF3
                    </Text>
                    <Text style={styles.text1}>
                        Get $2.00 of on your first KEBI smart wash. Offer expires 10/07/2020 Promo Code OFF2L
                    </Text>
                </View>
                <View style={{flex: 1}}>
                    <TextInput
                        placeholder="Promo code e.g. OFF2L"
                        placeholderTextColor="#5b82e9"
                        style={styles.input1}
                    />
                    <TouchableOpacity
                        style={styles.customButton1}>
                        <Text style={styles.customButtonText}>Redeem</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
                style={{width: '30%', height: '24%', alignSelf: 'center'}}
                source={ImageF}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default KebiPromos;
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
    paddingHorizontal: 20,
    height: "70%",
    // width: "80%",
    flex: 3,
    marginTop: '5%',
  },
  input1: {
    borderColor: '#5b82e9',
    color: '#5b82e9',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    height: "70%",
    // width: "80%",
    flex: 1,
    marginTop: '5%',
  },
  customButton: {
    backgroundColor: '#2cc8de',
    paddingHorizontal: 20,
    marginTop: '5%',
    height: '70%',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10
  },
  customButton1: {
    backgroundColor: '#2cc8de',
    paddingHorizontal: 20,
    marginTop: '5%',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    width: '40%',
    marginLeft: 10
  },
  customButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
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
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: '5%',
  },
  text1: {
    color: '#4f93e6',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: '5%',
    paddingBottom: '5%',
    paddingTop: '5%'
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
