import { StyleSheet } from 'react-native';

export const styles = (theme?: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      height: '100%',
    },
    header: {
      height: 144,
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
      color: theme.colors.black,
      marginBottom: 50,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      width: '100%',
      paddingHorizontal: 16,
      borderRadius: 16,
      marginTop: 80,
    },
  });
