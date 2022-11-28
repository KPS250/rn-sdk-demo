import React, { useContext, useState } from 'react';
import { Text, View, TextInput, StatusBar, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles as defaultStyle } from './styles';
import Button from '../../atoms/Button';
import { SdkContext } from '../../../provider/SdkProvider';
import AppBar from '../../atoms/AppBar';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { decrement, increment } from '../../../redux/slices/userSlice';

const Login = (props: any) => {
  console.log(props);
  const { theme, userContext } = useContext(SdkContext);
  const mobile = userContext ? userContext.mobileNumber : '';
  const styles = defaultStyle(theme);

  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState(mobile);

  const count = useAppSelector((state: any) => state.user.value);
  const dispatch = useAppDispatch();

  const next = () => {
    navigation.navigate('sdkhome' as never);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle={theme.statusBarStyle}
      />
      <SafeAreaView>
        <AppBar theme={theme} />
        <View style={styles.header}>
          <Text style={styles.title}>Personal Finance Manager</Text>
          <Text style={styles.desc}>Manage all your finances in one place</Text>
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            onChangeText={setMobileNumber}
            value={mobileNumber}
            placeholder="Mobile Number"
            keyboardType="numeric"
          />
          <Button
            onPress={next}
            label={'Login'}
            theme={theme}
            buttonType={'large'}
          />

          <View style={styles.row}>
            <Button
              onPress={() => dispatch(decrement())}
              label={'-'}
              theme={theme}
              buttonType={'large'}
              style={styles.smallBtn}
            />
            <Text>{count}</Text>
            <Button
              onPress={() => dispatch(increment())}
              label={'+'}
              theme={theme}
              buttonType={'large'}
              style={styles.smallBtn}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
