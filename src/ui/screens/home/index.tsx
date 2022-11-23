import React, { useContext } from 'react';
import { Text, View } from 'react-native';
//import { useNavigation } from '@react-navigation/native';
import { SdkContext } from '../../../provider/SdkProvider';
import { styles as defaultStyle } from './styles';
import AppBar from '../../atoms/AppBar';

const Home = (props: any) => {
  //const navigation = useNavigation();
  console.log(props);
  const { theme, userContext } = useContext(SdkContext);
  const styles = defaultStyle(theme);

  return (
    <View style={styles.container}>
      <AppBar theme={theme} />
      <View style={styles.header}>
        <Text style={styles.title}>
          Hi {userContext ? userContext.mobileNumber : ''}
        </Text>
        <Text style={styles.desc}>We are analyzing your information</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.message}>Loading</Text>
      </View>
    </View>
  );
};

export default Home;
