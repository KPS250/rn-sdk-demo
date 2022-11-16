import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  TextInput,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from './Colors';

export const Login = (props: any) => {
  const { route } = props;
  const mobile = route.params.mobileNumber ? route.params.mobileNumber : '';
  console.log('route.params', route.params);
  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = React.useState(mobile);

  const next = () => {
    navigation.navigate(
      'sdkhome' as never,
      { mobileNumber: mobileNumber } as never
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
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
    marginBottom: 20,
  },
  backButton: {
    width: 200,
    height: 60,
    borderRadius: 8,
    backgroundColor: Colors.grey,
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
  input: {
    fontSize: 14,
    color: Colors.black,
    marginBottom: 50,
    borderWidth: 1,
    borderColor: Colors.primary,
    width: '100%',
    paddingHorizontal: 16,
    borderRadius: 16,
    marginTop: 80,
  },
});
