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
    input: {
      fontSize: 16,
      color: theme.colors.dark,
      marginBottom: 50,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      width: '100%',
      paddingHorizontal: 16,
      height: 56,
      borderRadius: 16,
      marginTop: 80,
    },
  });
