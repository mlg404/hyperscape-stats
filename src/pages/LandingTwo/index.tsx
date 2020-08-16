import React from 'react';
import { View, Image, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import userImage from '../../assets/images/user.png'

import styles from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

const LandingTwo: React.FC = () => {
  const { navigate } = useNavigation()
  function handleNavigate() {
    navigate("FirstLogin");
  }
  return (
    <View style={styles.container}>
      <View style={styles.landingTop}>
        <View style={styles.topThree}>
          <Image source={userImage} resizeMode="contain" />
          <Image source={userImage} resizeMode="contain" />
          <Image source={userImage} resizeMode="contain" />
        </View>
        <View style={styles.topThree}>
          <Image source={userImage} resizeMode="contain" />
          <Image source={userImage} resizeMode="contain" />
          <Image source={userImage} resizeMode="contain" />
        </View>
      </View>
      <View style={styles.landingBottom}>
        <View style={styles.bottomNumber}>
          <Text style={styles.numberText}>02.</Text>
        </View>
        <View style={styles.bottomText}>
          <Text style={styles.infoText}>
          Check your friends {'\n'}
          stats! Favorite them {'\n'}
          for faster check. {'\n'}
          Anytime...{'\n'}
          Anywhere....
          </Text>
        </View>
        <View style={styles.bottomControls}>
          <View style={styles.bottomIndicators}>
            <View style={styles.dot}></View>
            <View style={[styles.dot, styles.blueDot]}></View>
          </View>
          <BorderlessButton onPress={handleNavigate}>
            <AntDesign name="arrowright" size={32} color="#FFF" />
          </BorderlessButton>
        </View>
      </View>

    </View>
  );
}

export default LandingTwo;