import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../blocks/loginAndSignup/login/Login';
import Password from '../blocks/loginAndSignup/loginPassword/Password';
import RecoveryPassword from '../blocks/loginAndSignup/recoveryPassword/RecoveryPassword';
import Verify from '../blocks/loginAndSignup/verifyCode/Verify';
import SetPassword from '../blocks/loginAndSignup/setPassword/SetPassword';
import SignUp from '../blocks/loginAndSignup/signup/SignUp';
import Geners from '../blocks/loginAndSignup/selectGeners/Geners';
const Stack = createStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import Detail from '../blocks/detailBook/Detail';

export class Navigations extends Component {
  static navigate(navigate: any) {
      throw new Error('Method not implemented.');
  }
  render() {
    return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="SetPassword" component={SetPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Geners" component={Geners} /> */}
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Detail" component={Detail} />
      

      
    </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

export default Navigations