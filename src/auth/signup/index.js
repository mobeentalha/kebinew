import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import Step1 from './step1';
import Step2 from './step2';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialLoading: true,
      paymentMethod: 'PayPal',
      step: '1',
    };
    this.changeStep = this.changeStep.bind(this);
    this.changeStepButton = this.changeStepButton.bind(this);
  }
  changeStep(val) {
    this.setState({step: val});
  }
  changeStepButton() {
    this.setState({step: '2'});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          {this.state.step === '1' && (
            <View style={styles.bar}>
               <ImageBackground
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../../../assets/images/top.jpg')}>
                  <Text style={styles.HeadingText}> SIGN UP </Text>
              </ImageBackground>
            </View>
          )}
          {this.state.step === '2' && (
            <View style={styles.bar}>
              <ImageBackground
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../../../assets/images/top.jpg')}>
                  <Text style={styles.HeadingText}> Payment Method </Text>
              </ImageBackground>
            </View>
          )}
          {this.state.step === '1' && (
            <Step1
              changeStep={this.changeStepButton}
              navigation={this.props.navigation}
            />
          )}
          {this.state.step === '2' && (
            <Step2 loginUser={this.props.loginUser} />
          )}
        </View>
      </View>
    );
  }
}
export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bar: {
    marginTop: '0%',
    backgroundColor: '#2cc8de',
    height: '10%'
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  HeadingText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: '5%'
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
  customButton: {
    backgroundColor: '#2cc8de',
    marginTop: 20,
    height: '5%',
    borderRadius: 50,
    width: '80%',
    justifyContent: 'center',
  },
});
