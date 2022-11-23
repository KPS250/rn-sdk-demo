import React from 'react';
import { Pressable, Text, View, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Colors } from '../../../constants/Colors';

export const Profile = (props: any) => {
  const navigation = useNavigation();
  const { route } = props;
  console.log(route.params);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.desc}>Your financial 360 degree profile</Text>
      </View>
      <View style={styles.body}>
        <Pressable onPress={navigation.goBack} style={styles.button}>
          <Text style={styles.btnText}>GoBack</Text>
        </Pressable>
      </View>
    </View>
  );
};
