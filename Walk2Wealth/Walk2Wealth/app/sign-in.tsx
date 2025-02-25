import React from "react";
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
    const handleLogin = () =>{

    }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={images.onboarding} style={styles.image} resizeMode="contain"/>

        <View className="px-10">
            <Text style={styles.title}>Get Close to Your Dream,{"\n"} <Text>With Every Step</Text></Text>
            <Text style={styles.login}>Login to Walk2Wealth with Google</Text>
            <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                <View style={styles.iconTextRow}>
                    <Image
                        source={icons.google}
                        style={styles.loginIcon}
                        resizeMode="contain"
                    />
                    <Text style={styles.iconText}>Continue with Google</Text>
                </View>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B0E0E6',
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: '66.67%', 
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginTop: 8,
    fontFamily: 'Rubik-Bold',
    color: '#0A66BC', 
  },
  login:{
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12,
    fontFamily: 'Rubik-Light',
  },
  loginButton:{
    backgroundColor: 'white',          
    shadowColor: '#a0aec0',            
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.8,                
    shadowRadius: 2,                  
    elevation: 5,                      
    borderRadius: 50,                  
    width: '100%',                     
    paddingVertical: 16,               
    marginTop: 5,                     
    alignItems: 'center', 
  },
  iconTextRow:{
    flexDirection: 'row',
    alignItems:'center'
  },
  loginIcon:{
    width: 20,
    height: 20,
  },
  iconText:{
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'rubik-medium'
  }
});

export default SignIn;