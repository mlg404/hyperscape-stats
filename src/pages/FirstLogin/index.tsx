import React, { useState, useRef } from 'react';
import { View, Image, Text, TextInput, Picker, Animated, Easing, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import crownImage from '../../assets/images/crown.png'

import styles from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

const FirstLogin: React.FC = () => {
  
  const [loading, setLoading] = useState(false);
  const [playername, setPlayername] = useState('');
  const [platform, setPlatform]= useState('uplay')
  
  const { navigate } = useNavigation();

  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )
  ).start()

  const spin= spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  function handleAlertError() {
    Alert.alert(
      "Error!",
      "Username and/or platform doesn't match!",
      [
        { text: "Try again!" }
      ],
      { cancelable: false }
    );
  }
  async function handleSubmitLogin() {
    if (!playername) return
    setLoading(true)


    const response = await api.get(`https://hypers.apitab.com/search/${platform}/${playername}`);
    if (Array.isArray(response.data.players) && response.data.players.length === 0) {
      handleAlertError();
      setLoading(false);
      return
    }
    const playerId = Object.keys(response.data.players)[0]
    await AsyncStorage.setItem('user_id', playerId)
    navigate("Logged")
    setLoading(false);
  }

  return (
    <View style={styles.container}>
    
      <View style={styles.crown} >
        <Image source={crownImage} resizeMode="contain" />
      </View>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.welcomeComplete}>
          Complete the following register
        </Text>
      </View>
      <View style={styles.welcomeForm}>
        <View style={styles.inputName}>
          <Text style={styles.label}>Hyper Scape username</Text>
          <TextInput 
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#c1bccc"
            value={playername}
            onChangeText={text => setPlayername(text)}
          />
        </View>
        <View style={styles.inputPlatform}>
          <Text style={styles.label}>Platform</Text>
          <View style={[styles.input,{paddingHorizontal: 0}]}>
            <Picker 
              selectedValue={platform}
              style={styles.picker}
              onValueChange={value => setPlatform(value)}
            >
              <Picker.Item label="PC" value="uplay" />
              <Picker.Item label="PS4" value="psn" />
              <Picker.Item label="Xbox One" value="xbl" />
            </Picker>
          </View>
        </View>
      </View>
      <RectButton enabled={!loading} style={[styles.submitButton, loading? {opacity: .5}: {opacity: 1}]} onPress={handleSubmitLogin}>
        {!loading 
          ? (
              <>
              <Text style={styles.submitText}>Let's go   </Text>
              <AntDesign name="arrowright" size={16} color="#FFF" />
              </>
            )
          : <Animated.View style={{transform:  [{rotate: spin}]}}><AntDesign name="loading2" size={16} color="#FFF" /></Animated.View>
        }
      </RectButton>
    </View>
  );
}

export default FirstLogin;