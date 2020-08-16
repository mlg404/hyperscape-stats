import React from 'react';
import { View, Image, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import userImage from '../../assets/images/user.png'

import styles from './styles';

const LandingOne: React.FC = () => {
  const { navigate } = useNavigation()
  function handleNavigate() {
    navigate("LandingTwo");
  }
  return (
    <View style={styles.container}>
      <View style={styles.landingTop}>
        <Image source={userImage} style={styles.userImg} resizeMode="contain" />
      </View>
      <View style={styles.landingBottom}>
        <View style={styles.bottomNumber}>
          <Text style={styles.numberText}>01.</Text>
        </View>
        <View style={styles.bottomText}>
          <Text style={styles.infoText}>
            Check your own    {'\n'}
            HYPER SCAPE stats {'\n'}
            Real time checker
          </Text>
        </View>
        <View style={styles.bottomControls}>
          <View style={styles.bottomIndicators}>
            <View style={[styles.dot, styles.orangeDot]}></View>
            <View style={styles.dot}></View>
          </View>
          <BorderlessButton onPress={handleNavigate}>
            <AntDesign name="arrowright" size={32} color="#FFF" />
          </BorderlessButton>
        </View>
      </View>

    </View>
  );
}

export default LandingOne;