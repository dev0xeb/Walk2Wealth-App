import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import LinearGradient from 'react-native-linear-gradient';

export default function Index() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: 90 }]} showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <View style={styles.profileSection}>
              <Image source={images.profile} style={styles.profileImage} />
              <View style={styles.statusSection}>
                <View style={styles.streakButton}>
                  <Image source={icons.fire} style={styles.fireIcon} />
                  <Text style={styles.streakText}>0 days</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.tokenBalButton}>
              <Text style={styles.tokenBal}>0.00</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.stat}>
          <View style={styles.circle}>
            <View style={styles.stepStat}>
              <Image source={icons.footstep} style={styles.footstepIcon} />
              <Text style={styles.statText}>Steps</Text>
            </View>
            <View style={styles.stepContainer}>
              <Text style={styles.steps}>0</Text>
            </View>
            <View style={styles.dailyGoals}>
              <Text style={styles.goal}>Daily Goal: </Text>
              <Text style={styles.stepGoals}>0</Text>
            </View>
          </View>
        </View>

        <View style={styles.fitness}>
          <View style={styles.moveStat}>
            <Image source={icons.clock} />
            <Text style={styles.moveText}>0</Text>
            <Text style={styles.moveText}>Move min</Text>
          </View>
          <View style={styles.moveStat}>
            <Image source={icons.caloriesFire} />
            <Text style={styles.moveText}>0</Text>
            <Text style={styles.moveText}>Kcal</Text>
          </View>
          <View style={styles.moveStat}>
            <Image source={icons.personWalking} />
            <Text style={styles.moveText}>0</Text>
            <Text style={styles.moveText}>km</Text>
          </View>
        </View>

        <View style={styles.innerContainer}>
          <View style={styles.progressContainer}>
            <View style={styles.profileSection}>
              <Text style={styles.progressText}>Your Progress</Text>
            </View>
            <TouchableOpacity style={styles.weeklyStat} onPress={toggleDropdown}>
              <Text style={styles.weekStat}>This week</Text>
              <Image source={icons.arrowdown} />
            </TouchableOpacity>
          </View>

          {isDropdownOpen && (
            <View style={styles.statCircleContainer}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <View key={day} style={styles.circleContainer}>
                  <View style={styles.weekCircle}></View>
                  <Text>{day}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        <View style={styles.challenge}>
          <Text style={styles.challengeHeader}>Check out Our Challenges.</Text>
          <Text style={styles.challengeText}>Join Our challenge and progress to win rewards.</Text>
        </View>

        <View style={styles.reward}>
          <View style={styles.referralBox}>
            <Text style={styles.rewardAmount}>10</Text>
            <Text style={styles.rewardText}>For each referral</Text>
            <TouchableOpacity style={styles.rewardButton}>
              <Text style={styles.rewardButtonText}>Get 10</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.referralBox1}>
            <Text style={styles.rewardAmount}>5</Text>
            <Text style={styles.rewardText}>Claim Daily rewards</Text>
            <TouchableOpacity style={styles.rewardButton}>
              <Text style={styles.rewardButtonText}>Claim</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.referralBox2}>
            <Text style={styles.rewardAmount}>2x</Text>
            <Text style={styles.rewardText}>Walk2Wealth on Premium</Text>
            <TouchableOpacity style={styles.rewardButton}>
              <Text style={styles.rewardButtonText}>Get</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',  // bg-white
    flex: 1,                   // h-full (flex: 1 ensures the SafeAreaView takes up the full height)
    paddingHorizontal: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  innerContainer: {
  },
  header: {
    flexDirection: 'row',      // flex-row
    alignItems: 'center',      // items-center
    justifyContent: 'space-between', // justify-between
    marginTop: 20,             // mt-5 (5 * 4px)
  },
  profileSection: {
    flexDirection: 'row',      // flex-row
    alignItems: 'center',      // items-center
  },
  profileImage: {
    width: 48,                 // size-12 (12 * 4px)
    height: 48,                // size-12 (12 * 4px)
    borderRadius: 24,          // rounded-full
  },
  statusSection: {
    flexDirection: 'column',   // flex-col
    alignItems: 'flex-start',  // items-start
    justifyContent: 'center',  // justify-center
    marginLeft: 8,             // ml-2 (2 * 4px)
  },
  fireIcon: {
    width: 23,                 
    height: 23,                
  },
  streakButton:{
    flexDirection: 'row',      
    alignItems: 'center',      
    justifyContent: 'space-between', 
    borderColor: '#0A66BC',
    backgroundColor:'white',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  streakText:{
    fontSize: 16,
    color: '#0A66BC',
    fontFamily: 'Rubik-Bold',
    marginLeft: 5,
  },
  tokenBalButton:{
    backgroundColor: '#0A66BC',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
  },
  tokenBal:{
    fontSize: 16,
    color: 'white',
    fontFamily: 'Rubik-Bold',
  },
  stat:{
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 50
  },
  circle:{
    width: 300,
    height: 300,
    borderRadius: 250,
    borderWidth:8,
    borderColor: '#0A66BC',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#87CEEB', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4, 
    elevation: 5, 
  },
  stepStat:{
    flexDirection: 'row',      
    alignItems: 'center',    
  },
  footstepIcon:{
    width: 20,
    height: 20
  },
  statText:{
    fontFamily: 'Rubik-Bold',
    fontSize: 20,
    marginLeft: 5
  },
  steps:{
    fontFamily:'Rubik-Bold',
    fontSize: 88
  }, 
  stepContainer:{

  },
  dailyGoals:{
    flexDirection:'row',
    alignItems: 'center',

  },
  goal:{
    fontFamily:'Rubik-Bold',
    fontSize: 20
  }, 
  stepGoals:{
    fontFamily:'Rubik-Bold',
    fontSize: 20,
    // color: '#0A66BC'
  },
  fitness:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    gap: 115
  },
  moveStat:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  moveText:{
    fontFamily: 'Rubik-Bold',
  },
  progressContainer:{
    flexDirection: 'row',      // flex-row
    alignItems: 'center',      // items-center
    justifyContent: 'space-between', // justify-between
    marginTop: 30,   
  },
  weeklyStat:{
    flexDirection: 'row'
  },
  progressText:{
    fontFamily: 'Rubik-Bold',
    fontSize: 24
  },
  weekStat:{
    fontFamily: 'Rubix-SemiBold',
    fontSize: 20
  },
  weekCircle:{
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#0A66BC',
    alignItems: 'center',
    
  },
  statCircleContainer:{
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25
  },
  circleContainer:{
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 2
  },
  challenge:{
    marginTop:30,
    width: 'auto',
    height: 96,
    backgroundColor: '#8A2BE2',
    padding: 10,
    borderRadius:8
  },
  challengeHeader:{
    fontFamily: 'Rubik-Bold',
    fontSize: 24,
    color:'white',
  },
  challengeText:{
    fontFamily: 'Rubix-SemiBold',
    color: 'white',
    fontSize: 16,
  },
  referralBox:{
    backgroundColor: '#FF6B00',
    width: 110,
    height: 170,
    padding:10,
    borderRadius: 8
  },
  referralBox1:{
    backgroundColor: '#6DDCF8',
    width: 110,
    height: 170,
    padding:10,
    borderRadius: 8
  },
  referralBox2:{
    backgroundColor: '#FF007A',
    width: 110,
    height: 170,
    padding:10,
    borderRadius: 8
  },
  reward:{
    marginTop: 30,
    
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    gap: 30

  },
  rewardAmount:{
    fontFamily: 'Rubik-Bold',
    fontSize: 32,
    color:'white'
  },
  rewardText:{
    fontFamily: '',
    color: 'white',
    fontWeight:'500',
    fontSize: 14
  },
  rewardButton: {
    backgroundColor: 'white',
    shadowColor: '#a0aec0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 50,
    width: '100%',
    paddingVertical: 16,
    height: 48, // Increased height
    justifyContent: 'center', // Add this to center text vertically
    marginTop: 10,
    alignItems: 'center',
  },
  rewardButtonText: {
    fontFamily: 'Rubik-Bold',
    color: 'purple', // Better contrast with white background
    fontSize: 14, // Add explicit font size
  },
});

 