import icons from "@/constants/icons";
import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
    const handleLogOut = async () => {};
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Profile
                    </Text>
                    <Image
                        source={icons.bell}
                        style={styles.bellIcon}
                        resizeMode="contain"
                    />
                </View>

                <View style = {styles.screen}>
                    <Text style = {styles.profileScreen}>Coming Soon!!!</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollViewContent: {
        paddingBottom: 128, 
        paddingHorizontal: 28, 
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20, 
    },
    title: {
        fontSize: 24, 
        fontFamily: 'Rubik-Bold', 
    },
    bellIcon: {
        width: 20, 
        height: 20,
    },
    screen: {
        flexDirection: 'row',       
        justifyContent: 'center',    
        flex: 1,                     
        marginTop: 20,
        alignItems: "center",  
        fontFamily: "Rubik-Bold",
        fontSize: 30             
      },
      profileScreen:{
        alignItems: "center",  
        fontFamily: "Rubik-Bold",
        fontSize: 30   
      }
});

export default Profile
