import { StyleSheet } from 'react-native';

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
      marginTop: 180,
      marginBottom: 20,
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
  });
