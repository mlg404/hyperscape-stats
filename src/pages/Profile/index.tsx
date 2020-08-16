import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import ProfileItem from '../../components/ProfileItem';
import { AntDesign } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';


const FirstLogin: React.FC = () => {
  const [userId, setUserId] = useState('')
  const { navigate } = useNavigation()
  function getUser() {
    AsyncStorage.getItem("user_id").then(response => {
      if (response) setUserId(response) 
    })
  }

  useFocusEffect(() => {
    getUser();
  })

  function handleLogout() {
    navigate('FirstLogin')
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <RectButton style={styles.headerButton}>
            <Text style={styles.headerButtons}><AntDesign name="search1" color="#FFF" size={16} /> Search profiles</Text>
          </RectButton>
          <RectButton onPress={handleLogout} style={styles.headerButton}>
            <Text style={styles.headerButtons}><AntDesign name="logout" color="#FFF" size={16} /> Change account</Text>
          </RectButton>
        </View>
        <Text style={styles.headerText}>Your Stats</Text>
      </View>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {!userId? <View></View>:<ProfileItem userID={userId} />}
          
    </ScrollView>
    </View>
  );
}

export default FirstLogin;