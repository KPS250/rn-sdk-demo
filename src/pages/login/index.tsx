import React from 'react';
import { Pressable, Text, View, TextInput, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles as rawStyle } from './styles';
import { Theme } from '../../constants/Theme';

const Login = (props: any) => {
  const { route } = props;

  const mobile = route.params.mobileNumber ? route.params.mobileNumber : '';
  const theme = route.params.theme ? route.params.theme : Theme;
  const styles = rawStyle(theme);

  console.log('route.params', route.params);
  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = React.useState(mobile);

  const next = () => {
    navigation.navigate(
      'sdkhome' as never,
      { mobileNumber: mobileNumber, theme: theme } as never
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.primary} />
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
        <Pressable onPress={next} style={styles.button}>
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
        <Pressable onPress={navigation.goBack} style={styles.backButton}>
          <Text style={styles.btnText}>GoBack</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
