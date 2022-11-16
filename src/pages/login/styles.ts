import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export const styles = (theme?: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      height: '100%',
    },
    header: {
      height: 200,
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    body: {
      backgroundColor: theme.colors.white,
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
      backgroundColor: theme.colors.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    backButton: {
      width: 200,
      height: 60,
      borderRadius: 8,
      backgroundColor: theme.colors.concrete,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnText: {
      fontSize: 14,
      color: theme.colors.white,
      fontWeight: 'bold',
    },
    title: {
      fontSize: 18,
      color: theme.colors.white,
    },
    desc: {
      fontSize: 12,
      color: theme.colors.white,
      marginTop: 10,
    },
    input: {
      fontSize: 14,
      color: Colors.black,
      marginBottom: 50,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      width: '100%',
      paddingHorizontal: 16,
      borderRadius: 16,
      marginTop: 80,
    },
  });
