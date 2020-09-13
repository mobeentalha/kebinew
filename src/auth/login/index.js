import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from 'react-native';
import {Back, ImageF, GoogleIcon, FacebookIcon} from '../../../assets/images';
import {FB, IG, LK, TW, YT} from '../../../assets/images/social-icon'
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialLoading: true,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View source={Back} style={styles.image}>
          <View style={styles.bar}>
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('../../../assets/images/top.jpg')}>
                <Text style={styles.HeadingText}> SIGN IN </Text>
            </ImageBackground>
          </View>
          <View style={styles.form}>
            <TextInput
              placeholder="User Name / Email"
              placeholderTextColor="#5b82e9"
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#5b82e9"
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.customButtonText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.forget}>
              <Text style={styles.text}> Forget Password</Text>
              <Text
                style={styles.text}
                onPress={() => this.props.navigation.navigate('SignUpScreen')}>
                Don't have account? SIGN UP
              </Text>
            </View>
            <View style={styles.socialLogin}> 
              <TouchableOpacity style={styles.socialButton}> 
                <Image source={GoogleIcon} style={styles.socialButtonIcon} />
                <Text style={styles.socialButtonText}> Sign in with Google </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton1}> 
                <Image source={FacebookIcon} style={styles.socialButtonIcon1} />
                <Text style={styles.socialButtonText1}> Sign in with Facebook </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.socialIconView}>
              <Text style={styles.socialIconText}> Want to become Service Partner ? Sign Up </Text>
              <View style={styles.socialIconRow}>
                <Image source={FB} style={styles.socialIcon} />
                <Image source={IG} style={styles.socialIcon}  />
                <Image source={LK} style={styles.socialIcon} />
                <Image source={TW} style={styles.socialIcon} />
                <Image source={YT} style={styles.socialIcon} />
              </View>
            </View>
            <View style={styles.logo}>
              <Image source={ImageF} style={styles.logoImage} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default SignIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bar: {
    marginTop: '0%',
    backgroundColor: '#2cc8de',
    height: '10%'
  },
  image: {
    flex: 1
  },
  HeadingText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: '10%'
  },
  text: {
    color: '#4f93e6',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    alignItems: 'center',
    flex: 2,
    backgroundColor: 'white'
  },
  input: {
    borderColor: '#5b82e9',
    color: '#5b82e9',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
    height: '5%',
    width: '80%',
    marginTop: '5%',
  },
  customButton: {
    backgroundColor: '#2cc8de',
    marginTop: 20,
    height: '5%',
    borderRadius: 50,
    width: '80%',
    justifyContent: 'center',
  },
  customButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  forget: {
    backgroundColor: 'transparent',
    width: '80%',
    height: '20%',
    justifyContent: 'center',
  },
  logo: {
    backgroundColor: 'transparent',
    width: '80%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: Dimensions.get('screen').height - 200
  },
  logoImage: {
    width: '30%',
    height: '30%',
  },
  socialIconView: {
    width: '80%',
    height: '10%',
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: Dimensions.get('screen').height - 250
  },
  socialIconRow :{
    flexDirection: 'row',
    width: '80%',
    height: '100%',
  },
  socialIconText: {
    marginBottom: 20,
    color: '#4f93e6',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialIcon: {
    width: '15%',
    height: '45%',
    marginRight: '5%',

  },
  socialLogin: {
    width: '90%',
    height: '20%',
    backgroundColor: 'transparent'
  },
  socialButton: {
    backgroundColor: '#2DA6FF',
    flexDirection: 'row',
    width: '100%',
    height: '30%',
    borderRadius: 10,
    marginBottom: '5%',
    alignItems: 'center'
  },
  socialButton1: {
    backgroundColor: '#0070C0',
    flexDirection: 'row',
    width: '100%',
    height: '30%',
    borderRadius: 10,
    marginBottom: '5%',
    alignItems: 'center'
  },
  socialButtonIcon: {
    width: '10%',
    height: '70%',
    marginLeft: '5%'
  },
  socialButtonIcon1: {
    width: '10%',
    height: '75%',
    marginLeft: '4%'
  },
  socialButtonText:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingLeft: 40, 
    fontWeight: 'bold'
  },
  socialButtonText1:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingLeft: 38, 
    fontWeight: 'bold'
  }

});
