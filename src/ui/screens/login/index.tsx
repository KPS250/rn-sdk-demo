import React, { useContext, useState } from 'react';
import { Text, View, TextInput, StatusBar, SafeAreaView } from 'react-native';
import { styles as defaultStyle } from './styles';
import Button from '../../atoms/Button';
import { SdkContext } from '../../../provider/SdkProvider';
import AppBar from '../../atoms/AppBar';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { decrement, increment } from '../../../redux/slices/userSlice';
import { Screens } from '../../../navigation/Screens';
import { useEffect } from 'react';
import { screenEvent } from '../../../analytics';
import { TestID } from '../../../constants/TestID';
import { Strings } from '../../../constants/Strings';
import { withErrorBoundary } from '../../atoms/ErrorBoundary';
import ErrorScreen from '../../templates/ErrorScreen';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  //console.log(props);

  const { theme, userContext } = useContext(SdkContext);
  const mobile = userContext ? userContext.mobileNumber : '';
  const styles = defaultStyle(theme);

  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState(mobile);

  const count = useAppSelector((state: any) => state.user.value);
  const dispatch = useAppDispatch();

  const next = () => {
    navigation.navigate(Screens.HOME as never);
    //throw new Error('This is a test error thrown by ComponentWithError.');
  };

  useEffect(() => {
    screenEvent(Screens.LOGIN);
    //throw new Error('This is a test error thrown by ComponentWithError.');
  }, []);

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
            placeholder={Strings.mobileNumber}
            keyboardType="numeric"
            testID={TestID.mobileNumber}
          />
          <Button
            onPress={next}
            label={Strings.sendOtp}
            theme={theme}
            buttonType={'large'}
            testID={TestID.sendOtp}
            analyticsData={{ mobileNumber }}
          />
          <View style={styles.row}>
            <Button
              onPress={() => dispatch(decrement())}
              label={'-'}
              theme={theme}
              buttonType={'large'}
              style={styles.smallBtn}
              testID={TestID.decrease}
              analyticsData={{ count }}
            />
            <Text>{count}</Text>
            <Button
              onPress={() => dispatch(increment())}
              label={'+'}
              theme={theme}
              buttonType={'large'}
              style={styles.smallBtn}
              testID={TestID.increase}
              analyticsData={{ count }}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default withErrorBoundary(Login, ErrorScreen);
