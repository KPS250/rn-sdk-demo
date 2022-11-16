import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from './Colors';

export const Home = (props: any) => {
  const navigation = useNavigation();
  const { route } = props;
  console.log(route.params);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hi {route.params.mobileNumber}</Text>
        <Text style={styles.desc}>We are analyzing your information</Text>
      </View>
      <View style={styles.body}>
        <Pressable onPress={navigation.goBack} style={styles.button}>
          <Text style={styles.btnText}>GoBack</Text>
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
