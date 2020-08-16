import React, { useState, useEffect } from 'react';
import { View, Image, Text, Linking } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import api from '../../services/api';
import PlayerData from '../../interfaces/PlayerData';

interface ProfileItemProps {
  userID: String;
}

const ProfileItem: React.FC<ProfileItemProps> = ({ userID }) => {
  const [playerData, setPlayerData] = useState<PlayerData | null>()
  useEffect(() => {
    console.log("esse", userID)
    api.get(`https://hypers.apitab.com/player/${userID}`).then((response) => {
      setPlayerData(response.data);
    })

  }, [])

  return (
    <>
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{playerData?.player.p_name}</Text>
          <Text style={styles.subject}>
            General Stats  •
            {'  ' + playerData?.custom.p_visitors} views</Text>
        </View>

        <View style={styles.statsSection}>
          <View style={styles.stat}>
            <Text style={styles.statTitle}>Kills</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.kills}</Text>
          </View>
        
          <View style={styles.stat}>
            <Text style={styles.statTitle}>Assists</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.assists}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>KDA</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.kd}</Text>
          </View>



          <View style={styles.stat}>
            <Text style={styles.statTitle}>Wins</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.wins}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Losses</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.losses}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Win rate</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.winrate}</Text>
          </View>



          <View style={styles.stat}>
            <Text style={styles.statTitle}>Crown wins</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.crown_wins}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Crown pickups</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.crown_pickups}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Crown success</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.crown_pick_success_rate}</Text>
          </View>



          <View style={styles.stat}>
            <Text style={styles.statTitle}>Weapons Dmg</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.weapon_body_damage}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Headshot Dmg</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.weapon_headshot_damage}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Skill Dmg</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.damage_by_items}</Text>
          </View>



          <View style={styles.stat}>
            <Text style={styles.statTitle}>Total Dmg</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.damage_done}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Headshot %</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.headshot_accuracy}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Matches</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.matches}</Text>
          </View>



          <View style={styles.stat}>
            <Text style={styles.statTitle}>Avg. Kills/Game</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.avg_kills_per_match}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Avg. Dmg/Kill</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.avg_dmg_per_kill}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Time Played</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.time_played}</Text>
          </View>

        </View>
      </View>
    </View>

    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Solo stats</Text>
          <Text style={styles.subject}>
            Solo matches  •
            {'  ' + playerData?.data.stats.solo_matches}</Text>
        </View>

        <View style={styles.statsSection}>
          <View style={styles.stat}>
            <Text style={styles.statTitle}>Wins</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.solo_wins}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Losses</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.solo_losses}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Win rate</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.solo_winrate}</Text>
          </View>



          <View style={styles.stat}>
            <Text style={styles.statTitle}>Crown wins</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.solo_crown_wins}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Last Rank</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.solo_last_rank}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Time Played</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.solo_time_played}</Text>
          </View>

        </View>
      </View>
    </View>


    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Squad stats</Text>
          <Text style={styles.subject}>
            Squad matches  •
            {'  ' + playerData?.data.stats.squad_matches}</Text>
        </View>

        <View style={styles.statsSection}>
          <View style={styles.stat}>
            <Text style={styles.statTitle}>Wins</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.squad_wins}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Losses</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.squad_losses}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Win rate</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.squad_winrate}</Text>
          </View>



          <View style={styles.stat}>
            <Text style={styles.statTitle}>Crown wins</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.squad_crown_wins}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Last Rank</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.squad_last_rank}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Time Played</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.squad_time_played}</Text>
          </View>

        </View>
      </View>
    </View>


    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Career best</Text>
          <Text style={styles.subject}>
            Survival Time  •
            {'  ' + playerData?.data.stats.careerbest_survival_time}</Text>
        </View>

        <View style={styles.statsSection}>
          <View style={styles.stat}>
            <Text style={styles.statTitle}>Most Kills</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.careerbest_kills}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Most Assists</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.careerbest_assists}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Item fused</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.careerbest_item_fused}</Text>
          </View>



          <View style={styles.stat}>
            <Text style={styles.statTitle}>Damage</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.careerbest_damage_done}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Critical Dmg</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.careerbest_critical_damage}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Revealed</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.careerbest_revealed}</Text>
          </View>



          <View style={styles.stat}>
            <Text style={styles.statTitle}>Healed</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.careerbest_healed}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Revived</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.careerbest_revives}</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>Dmg Shielded</Text>
            <Text style={styles.statValue}>{playerData?.data.stats.careerbest_damage_shielded}</Text>
          </View>

        </View>
      </View>
    </View>


    </>
  );
}

export default ProfileItem;