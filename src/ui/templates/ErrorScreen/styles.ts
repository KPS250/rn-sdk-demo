import { StyleSheet } from 'react-native';

export const styles = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme ? theme.colors.white : '#FFF',
    },

    title: {
      //...theme.text['large'],
      color: '#000',
      fontSize: 18,
      textAlign: 'center',
      marginTop: 20,
    },
    subtitle: {
      // ...theme.text['medium'],
      color: '#000',
      fontSize: 14,
      textAlign: 'center',
      marginTop: 10,
    },
    body: {
      //marginHorizontal: 16,
    },
    button: {
      marginTop: 60,
    },
    image: {
      width: 160,
      height: 160,
      alignSelf: 'center',
    },
  });
};
