import {View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router"

import icons from '@/constants/icons'
import { SafeAreaView } from 'react-native-safe-area-context'


const TabIcon =({focused, icon, title}: {focused: boolean; icon: any; title: string;})=>(
    <SafeAreaView style={styles.container}>
        <Image source={icon} 
        style = {[styles.icon, {tintColor:focused ? 'white' : 'gray'}]}
        resizeMode='contain'/>
        <Text style ={[styles.iconText, focused ? styles.focusedText : styles.defaultText]}>
            {title}
        </Text>
    </SafeAreaView>
    
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 12, 
      flexDirection: 'column',
      alignItems: 'center',
    },
    icon: {
      width: 24,  
      height: 24, 
    },
    iconText: {
        fontSize: 12, 
        width: '100%', 
        textAlign: 'center', 
        marginTop: 4, 
      },
      focusedText: {
        color: 'white', 
        fontFamily: 'Rubik-Medium', 
      },
      defaultText: {
        color: '#9CA3AF', 
        fontFamily: 'Rubik', 
      },
  });


const TabsLayout =()=>{
    return (
        <Tabs 
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle:{
                backgroundColor: '#0A66BC',
                position: 'absolute',
                borderTopColor: 'green',
                borderTopWidth:1,
                height: 70,
                borderTopStartRadius: 12,
                borderTopEndRadius: 12
            }
        }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon:({focused})=>(
                        <TabIcon icon={icons.home} focused={focused} title='Home'/>
                    )
                }}
            />
            <Tabs.Screen
                name='rewards'
                options={{
                    title: 'Rewards',
                    headerShown: false,
                    tabBarIcon:({focused})=>(
                        <TabIcon icon={icons.reward} focused={focused} title='Rewards'/>
                    )
                }}
            />
            <Tabs.Screen
                name='wallet'
                options={{
                    title: 'Wallet',
                    headerShown: false,
                    tabBarIcon:({focused})=>(
                        <TabIcon icon={icons.wallet} focused={focused} title='Wallet'/>
                    )
                }}
            />
            <Tabs.Screen
                name='shop'
                options={{
                    title: 'Shop',
                    headerShown: false,
                    tabBarIcon:({focused})=>(
                        <TabIcon icon={icons.shop} focused={focused} title='Shop'/>
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon:({focused})=>(
                        <TabIcon icon={icons.person} focused={focused} title='Profile'/>
                    )
                }}
            />
        </Tabs>
    )
}
export default TabsLayout