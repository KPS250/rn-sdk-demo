import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles as rawStyle } from './styles';
import { Theme } from '../../constants/Theme';

const Home = (props: any) => {
  const navigation = useNavigation();
  const { route } = props;
  //console.log(route.params);
  const theme = route.params.theme ? route.params.theme : Theme;
  const styles = rawStyle(theme);

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

export default Home;
