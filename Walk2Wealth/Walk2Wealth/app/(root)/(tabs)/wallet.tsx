import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import images from '@/constants/images';

const Wallet = () => {
  const [activeTab, setActiveTab] = useState('Blockchain');
  const [activeScreen, setActiveScreen] = useState('Tokens');
  const [currentScreen, setCurrentScreen] = useState('Wallet');
  const [fromToken, setFromToken] = useState('ETH');
  const [toToken, setToToken] = useState('W2W');
  const [amount, setAmount] = useState('');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Wallet':
        return (
          <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: 90 }]} showsVerticalScrollIndicator={false}>
            <View style={styles.innerContainer}>
              <View style={styles.header}>
                <View style={styles.profileSection}>
                  <Image source={icons.scan} style={styles.profileImage} />
                </View>
                <View style={styles.tabSection}>
                  <TouchableOpacity onPress={() => setActiveTab('Blockchain')} style={styles.tabOption}>
                    <Text style={styles.tabText}>Blockchain</Text>
                    {activeTab === 'Blockchain' && <View style={styles.activeTabIndicator} />}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setActiveTab('Rewards')} style={styles.tabOption}>
                    <Text style={styles.tabText}>Rewards</Text>
                    {activeTab === 'Rewards' && <View style={styles.activeTabIndicator} />}
                  </TouchableOpacity>
                </View>
                <View style={styles.menuButton}>
                  <Image source={icons.menu} style={styles.menuIcon} />
                </View>
              </View>
              {activeTab === 'Blockchain' ? (
                <View style={styles.contentSection}>
                  <View style={styles.blockchainHeader}>
                    <View style={styles.blockchainContent}>
                      <Text style={styles.contentText}>Primary Account</Text>
                      <Image source={icons.transfer} style={styles.blockchainIcons} />
                    </View>
                    <View style={styles.blockchainContent}>
                      <Image source={icons.ethereum} style={styles.blockchainIcons} />
                      <Text style={styles.contentText}>Ethereum Mainnet</Text>
                      <Image source={icons.arrowdown} style={styles.blockchainIcons} />
                    </View>
                  </View>
                  <View>
                    <Text style={styles.walletAmount}>
                      $ 0.00
                    </Text>
                  </View>
                  <View style={styles.buttonsSection}>
                    <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen('Receive')}>
                      <Image source={icons.wallet1} style={styles.buttonIcon} />
                      <Text>Receive</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen('Send')}>
                      <Image source={icons.send} style={styles.buttonIcon} />
                      <Text>Send</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen('Swap')}>
                      <Image source={icons.swap} style={styles.buttonIcon} />
                      <Text>Swap</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.screenTabSection}>
                    <TouchableOpacity onPress={() => setActiveScreen('Tokens')} style={styles.screenTabOption}>
                      <Text style={styles.screenTabText}>Tokens</Text>
                      {activeScreen === 'Tokens' && <View style={styles.activeScreenTabIndicator} />}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActiveScreen('History')} style={styles.screenTabOption}>
                      <Text style={styles.screenTabText}>History</Text>
                      {activeScreen === 'History' && <View style={styles.activeScreenTabIndicator} />}
                    </TouchableOpacity>
                  </View>
                  {activeScreen === 'Tokens' ? (
                    <View>
                      <View style={styles.tokenContainer}>
                        <View style={styles.token}>
                          <Image source={icons.ETH} style={styles.ethIcon} />
                          <Text style={styles.ethText}>Ethereum</Text>
                        </View>
                        <View style={styles.tokenBal}>
                          <View style={styles.tokenValues}>
                            <Text>0</Text>
                            <Text style={styles.tokenWorth}>$0.00</Text>
                          </View>
                          <Image source={icons.arrowright} style={styles.arrowIcon} />
                        </View>
                      </View>
                      <View style={styles.tokenContainer}>
                        <View style={styles.token}>
                          <Image source={images.icon} style={styles.W2WIcon} />
                          <Text style={styles.ethText}>W2W</Text>
                        </View>
                        <View style={styles.tokenBal}>
                          <View style={styles.tokenValues}>
                            <Text>0</Text>
                            <Text style={styles.tokenWorth}>$0.00</Text>
                          </View>
                          <Image source={icons.arrowright} style={styles.arrowIcon} />
                        </View>
                      </View>
                    </View>
                  ) : (
                    <Text style={styles.contentText}>History Screen Content</Text>
                  )}
                </View>
              ) : (
                <View style={styles.contentSection}>
                  <Text style={styles.contentText}>Rewards Content</Text>
                </View>
              )}
            </View>
          </ScrollView>
        );
      case 'Receive':
        return (
          <View>
            <TouchableOpacity onPress={() => setCurrentScreen('Wallet')}>
              <Text>Back to Wallet</Text>
            </TouchableOpacity>
          </View>
        );
      case 'Send':
        return (
          <View>
            <TouchableOpacity onPress={() => setCurrentScreen('Wallet')}>
              <Text>Back to Wallet</Text>
            </TouchableOpacity>
          </View>
        );
      case 'Swap':
        return (
          <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: 90 }]} showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={() => setCurrentScreen('Wallet')} style={styles.swapHeader}>
              <Image source={icons.arrowleft} style={[styles.backIcons, { tintColor: 'black' }]} />
              <Text style={styles.swapText}>Swap</Text>
            </TouchableOpacity>
            <View style={styles.swapContainer}>
              <TextInput
                style={styles.input}
                placeholder="Amount"
                value={amount}
                onChangeText={(text) => setAmount(text)}
              />
              <View style={styles.tokenSelection}>
                <TouchableOpacity onPress={() => setFromToken('ETH')}>
                  <Text style={[styles.tokenText, fromToken === 'ETH' && styles.activeToken]}>ETH</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFromToken('W2W')}>
                  <Text style={[styles.tokenText, fromToken === 'W2W' && styles.activeToken]}>W2W</Text>
                </TouchableOpacity>
              </View>
              <Image source={icons.arrowdown} style={styles.swapIcon} />
              <View style={styles.tokenSelection}>
                <TouchableOpacity onPress={() => setToToken('ETH')}>
                  <Text style={[styles.tokenText, toToken === 'ETH' && styles.activeToken]}>ETH</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setToToken('W2W')}>
                  <Text style={[styles.tokenText, toToken === 'W2W' && styles.activeToken]}>W2W</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.swapButton} onPress={() => {/* Perform swap action */}}>
                <Text style={styles.swapButtonText}>Swap Tokens</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {renderScreen()}
    </SafeAreaView>
  )
}
  

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 20,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    innerContainer: {},
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    tabSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tabOption: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    tabText: {
        fontFamily: 'Rubik-Bold',
        fontSize: 21,
        color: '#000',
    },
    activeTabIndicator: {
        marginTop: 4,
        width: '100%',
        height: 3,
        backgroundColor: '#0A66BC',
    },
    menuButton: {},
    menuIcon: {
        width: 23,
        height: 23,
    },
    contentSection: {
        flexDirection: 'column',
    },
    blockchainHeader: {
        flexDirection: 'row',
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
    },
    contentText: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Rubik-Regular',
    },
    blockchainContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    blockchainIcons: {
        width: 20,
        height: 20,
    },
    walletAmount: {
        fontFamily: 'Rubik-Bold',
        fontSize: 30,
        marginTop: 10,
    },
    buttonsSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        marginTop: 20,
    },
    button: {
        backgroundColor: 'transparent',
        borderColor: '#0A66BC',
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '30%',
        justifyContent: 'center',
        height: 40,
        borderRadius: 8,
    },
    buttonIcon: {
        width: 20,
        height: 20,
        marginRight: 3,
    },
    screenTabSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    screenTabOption: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    screenTabText: {
        fontSize: 16,
        fontFamily: 'Rubik-Bold',
        color: '#000',
    },
    activeScreenTabIndicator: {
        marginTop: 1,
        width: '50%',
        height: 3,
        backgroundColor: '#0A66BC',
    },
    ethIcon: {
        width: 20,
        height: 20,
    },
    ethText:{
        marginLeft: 5
    },
    tokenContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    token: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tokenBal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tokenValues: {
        alignItems: 'flex-end',
        marginRight: 8,
        color: 'gray'
    },
    tokenWorth:{
        color: 'gray',
    },
    arrowIcon: {
        width: 20,
        height: 20,
    },
    W2WIcon:{
        width: 20,
        height: 20,
    },
    backIcons:{
        width: 30,
        height:30,
    
    },
    swapHeader:{
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    swapText:{
        fontFamily: 'Rubik-Regular',
        fontWeight: 400,
        fontSize: 21,
        marginLeft: 10,
    },
    swapContainer: {
        padding: 16,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 16,
        borderRadius: 4,
      },
      tokenSelection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
      },
      tokenText: {
        fontSize: 16,
      },
      activeToken: {
        fontWeight: 'bold',
        color: 'blue',
      },
      swapIcon: {
        width: 24,
        height: 24,
        alignSelf: 'center',
        marginVertical: 8,
      },
      swapButton: {
        backgroundColor: 'blue',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
      },
      swapButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
});

export default Wallet;