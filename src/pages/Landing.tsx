import React from 'react';
import { View, Image, Text, TextInput, Picker } from 'react-native';
import { AntDesign } from '@expo/vector-icons'


import crownImage from '../assets/images/crown.png'

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

const pages: React.FC = () => {
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
          />
        </View>
        <View style={styles.inputPlatform}>
          <Text style={styles.label}>Platform</Text>
          <Picker 
            style={styles.input}
            onValueChange={(value) => console.log(value)}
          >
            <Picker.Item  label="PC" value="uplay" />
            <Picker.Item label="PS4" value="ps4" />
            <Picker.Item label="Xbox One" value="xbx" />
          </Picker>
        </View>
      </View>
      <RectButton style={styles.submitButton}>
        <Text style={styles.submitText}>Let's go   </Text>
        <AntDesign name="arrowright" size={16} color="#FFF" />
      </RectButton>
    </View>
  );
}

export default pages;