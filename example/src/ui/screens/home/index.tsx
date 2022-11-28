import React from 'react';
import { Pressable, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Theme } from '../../../constants/Theme';
import { Colors } from '../../../constants/Colors';
import { styles } from './styles';
import { decrement, increment } from '../../../redux/slices/counterSlice';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';

import { entriesApi, categoriesApi } from 'react-native-rn-aggregator-sdk';

export const Home = (props: any) => {
  const navigation = useNavigation();
  const { route } = props;
  console.log(route.params);
  const mobileNumber = '8779519601';

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

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

  const callApi = () => {
    entriesApi().then((data1: any) => {
      console.log('API call1 from App', data1.data);
      categoriesApi().then((data2: any) =>
        console.log('API call2 from App', data2.data)
      );
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
      <SafeAreaView>
        <View style={styles.header}>
          <Text
            style={styles.title}
          >{`Parent App (User: ${mobileNumber})`}</Text>
          <Text style={styles.desc}>App Homescreen</Text>
        </View>

        <View style={styles.body}>
          <Pressable onPress={gotoSDK} style={styles.button}>
            <Text style={styles.btnText}>Open SDK Screen</Text>
          </Pressable>
          <Pressable onPress={gotoProfile} style={styles.profileButton}>
            <Text style={styles.btnText}>Profile</Text>
          </Pressable>

          <View style={styles.row}>
            <Pressable
              onPress={() => dispatch(decrement())}
              style={styles.smallBtn}
            >
              <Text style={styles.btnText}>-</Text>
            </Pressable>
            <Text>{count}</Text>
            <Pressable
              onPress={() => dispatch(increment())}
              style={styles.smallBtn}
            >
              <Text style={styles.btnText}>+</Text>
            </Pressable>
          </View>
          <Pressable onPress={callApi} style={styles.smallBtn}>
            <Text style={styles.btnText}>Call Api</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};
