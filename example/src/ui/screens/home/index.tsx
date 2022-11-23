import React from 'react';
import { Pressable, Text, View, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Theme } from '../../../constants/Theme';
import { Colors } from '../../../constants/Colors';
import { styles } from './styles';

export const Home = (props: any) => {
  const navigation = useNavigation();
  const { route } = props;
  console.log(route.params);
  const mobileNumber = '8779519601';

  const gotoSDK = () => {
    navigation.navigate(
      'sdk' as never,
      {
        context: { mobileNumber: mobileNumber },
        theme: Theme, // Passing Theme Config
      } as never
    );
  };

  const gotoProfile = () => {
    navigation.navigate('profile' as never);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      <View style={styles.header}>
        <Text style={styles.title}>{`Parent App (User: ${mobileNumber})`}</Text>
        <Text style={styles.desc}>App Homescreen</Text>
      </View>
      <View style={styles.body}>
        <Pressable onPress={gotoSDK} style={styles.button}>
          <Text style={styles.btnText}>Open SDK Screen</Text>
        </Pressable>
        <Pressable onPress={gotoProfile} style={styles.profileButton}>
          <Text style={styles.btnText}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};
