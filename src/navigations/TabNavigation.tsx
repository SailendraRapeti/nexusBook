import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../blocks/home/Home';
import Explore from '../blocks/explore/Explore';
import Library from '../blocks/library/Library';
import {home,libraray,search} from "../blocks/home/assects/index"
import { horizontalScale, verticalScale } from '../../Matrics';

const Tab = createBottomTabNavigator();

export class TabNavigation extends Component {
  render() {
    return (
        <Tab.Navigator   screenOptions={({route}) => ({
            headerShown: false,
            tabBarStyle:{
                backgroundColor:'#181A1A',
                height:verticalScale(90),
               
              },
              
    
            // tabBarIcon: ({color}) => screenOptions(route, color),
          })}>
        <Tab.Screen name="Home" component={Home}   
        options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={{
                  height: verticalScale(24),
                  width: verticalScale(24),
                  tintColor: focused ? '#CDE7BE' : '#C4CCCC',
                }}
                source={home}
                resizeMode="contain"
              />
            ),
            // tabBarActiveBackgroundColor: '#181A1A',
            // tabBarInactiveBackgroundColor: '#1D103A',
            tabBarActiveTintColor: '#CDE7BE',
           
            tabBarLabelStyle: {
              fontSize: verticalScale(12),
              fontWeight: '400',
              // borderTopLeftRadius: 15,
              // borderTopRightRadius: 15,
            },
          }} />
        <Tab.Screen name="Explore" component={Explore}  options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={{
                  height: verticalScale(24),
                  width: verticalScale(24),
                  tintColor: focused ? '#CDE7BE' : '#C4CCCC',
                }}
                source={search}
                resizeMode="contain"
              />
            ),
            // tabBarActiveBackgroundColor: '#181A1A',
            // tabBarInactiveBackgroundColor: '181A1A',
            tabBarActiveTintColor: '#CDE7BE',
           
            tabBarLabelStyle: {
              fontSize: verticalScale(12),
              fontWeight: '400',
              // borderTopLeftRadius: 15,
              // borderTopRightRadius: 15,
            },
          }} />
        <Tab.Screen name="Library" component={Library}  options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={{
                  height: verticalScale(24),
                  width: verticalScale(24),
                  tintColor: focused ? '#CDE7BE' : '#C4CCCC',
                }}
                source={libraray}
                resizeMode="contain"
              />
            ),
            // tabBarActiveBackgroundColor: '#181A1A',
            // tabBarInactiveBackgroundColor: "#181A1A",
            tabBarActiveTintColor: '#CDE7BE',
           
            tabBarLabelStyle: {
              fontSize: verticalScale(12),
              fontWeight: '400',
              // borderTopLeftRadius: 15,
              // borderTopRightRadius: 15,
            },
          }}/>
      </Tab.Navigator>
    )
  }
}

export default TabNavigation