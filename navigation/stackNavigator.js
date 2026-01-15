import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from '../screens/loginScreen';
import registerScreen from '../screens/registerScreen';
import homeScreen from '../screens/homeScreen';
import bottomTab from '../screens/bottomTab';
import settings from '../screens/settings';
import privacyPolicy from '../screens/privacyPolicy'
import faq from '../screens/faq';
import profile from '../screens/profile';
import address from '../screens/address';
import AddAddressScreen from '../screens/AddAddressScreen';
import orderScreen from '../screens/orderScreen'
import confirmation from '../screens/confirmation';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='loginScreen'>
            <Stack.Screen name="loginScreen" component={loginScreen} />
            <Stack.Screen name="registerScreen" component={registerScreen} />
            <Stack.Screen name="homeScreen" component={homeScreen} />
            <Stack.Screen name="bottomTab" component={bottomTab} />
            <Stack.Screen name="settings" component={settings} />
            <Stack.Screen name="privacyPolicy" component={privacyPolicy} />
            <Stack.Screen name="faq" component={faq} />
            <Stack.Screen name="profile" component={profile} />
           <Stack.Screen  name="AddAddress" component={AddAddressScreen}/>
            <Stack.Screen name="address" component={address} /> 
            <Stack.Screen name="orderScreen" component={orderScreen} />
            <Stack.Screen name="confirmation" component={confirmation} />



        </Stack.Navigator>
    
    </NavigationContainer>
  )
}

export default StackNavigator