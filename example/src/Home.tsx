import React from 'react';
import { Pressable, Text, StyleSheet, View, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from './Colors';

export const Home = (props: any) => {
  const navigation = useNavigation();
  const { route } = props;
  console.log(route.params);
  const mobileNumber = '8779519601';

  const gotoSDK = () => {
    navigation.navigate(
      'sdklogin' as never,
      { mobileNumber: mobileNumber } as never
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: '100%',
  },
  header: {
    height: 200,
    //alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  body: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    overflow: 'hidden',
    height: '100%',
    alignItems: 'center',
    //justifyContent: 'center',
    paddingHorizontal: 16,
  },
  button: {
    width: 200,
    height: 60,
    borderRadius: 8,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 180,
    marginBottom: 20,
  },
  profileButton: {
    width: 200,
    height: 60,
    borderRadius: 8,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: Colors.white,
  },
  desc: {
    fontSize: 12,
    color: Colors.white,
    marginTop: 10,
  },
});
