import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';

import CreditCard from './Screens/CreditCard';
import Home from './Screens/Home';
import ServiceDetails from './Screens/ServiceDetails';
import Location from './Screens/Location';

import LoginScreen from './auth/login';
import SignUpScreen from './auth/signup';
import Payment from './auth/signup/step2-1';

import SplashScreen from './splashScreen';
class Splash extends React.Component {
  componentDidMount() {
    this.Auth();
  }

  Auth = async () => {
    // const userToken = await AsyncStorage.getItem("userToken");

    // this.props.navigation.navigate(userToken ? "App" : "Auth");
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View>
        <SplashScreen />
      </View>
    );
  }
}
// const AppStack = createStackNavigator({ CreditCard: CreditCard });
const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    CreditCard: {
      screen: CreditCard,
    },
    ServiceDetails: {
      screen: ServiceDetails,
    },
    Location: {
      screen: Location,
    },
  },
  {
    contentOptions: {
      activeTintColor: '#2cc8de',
      itemsContainerStyle: {marginVertical: 0},
      iconContainerStyle: {opacity: 1},
      style: {backgroundColor: 'white'},
    },
    contentComponent: (props) => (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 120,
            backgroundColor: 'white',
            paddingTop: 15,
            borderBottomColor: 'rgba(92,94,94,0.5)',
            borderBottomWidth: 0.25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20}}>Qasim Khan</Text>
        </View>
        <DrawerItems {...props} />
        <TouchableOpacity
          style={{flexDirection: 'row', marginTop: 5}}
          onPress={() =>
            Alert.alert(
              'Logout',
              'Do you want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',

                  onPress: () => console.log('logout'),
                },
              ],
              {cancelable: false},
            )
          }>
          <View style={{flex: 0.07}} />
          {/* <View style={{ flex: 0.25 }}>
              <MaterialCommunityIcons size={25} name="logout" />
            </View> */}
          <View style={{flex: 1}}>
            <Text>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    ),
  },
);
const AuthStack = createStackNavigator(
  {LoginScreen: LoginScreen, SignUpScreen: SignUpScreen},
  {
    headerMode: 'none',
    gesturesEnabled: false,
  },
);
const Demo = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    SignUpScreen: SignUpScreen,
    Home: {
      screen: Home,
    },
    CreditCard: {
      screen: CreditCard,
    },
    Payment: {
      screen: Payment,
    },

    ServiceDetails: {
      screen: ServiceDetails,
    },
    Location: {
      screen: Location,
    },
  },
  {
    headerMode: 'none',
    gesturesEnabled: false,
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Splash: Splash,
      App: Demo,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Splash',
    },
  ),
);
