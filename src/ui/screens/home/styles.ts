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
      backgroundColor: theme.colors.light,
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
      overflow: 'hidden',
      height: '100%',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 18,
      color: theme.colors.light,
    },
    desc: {
      fontSize: 12,
      color: theme.colors.light,
      marginTop: 10,
    },
    message: {
      ...theme.text.large,
      color: theme.colors.dark,
      marginTop: 100,
    },
  });
