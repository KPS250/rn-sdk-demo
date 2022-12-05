import React, { useContext, useEffect } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
//import { useNavigation, useRoute } from '@react-navigation/native';
import { SdkContext } from '../../../provider/SdkProvider';
import { styles as defaultStyle } from './styles';
import AppBar from '../../atoms/AppBar';
import { screenEvent } from '../../../analytics';
import { Screens } from '../../../navigation/Screens';

const Home = () => {
  //const navigation = useNavigation();
  //console.log(props);
  const { theme, userContext } = useContext(SdkContext);
  const styles = defaultStyle(theme);

  useEffect(() => {
    screenEvent(Screens.HOME);
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
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
      </SafeAreaView>
    </View>
  );
};

export default Home;
