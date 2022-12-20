import { StyleSheet } from 'react-native';

export const styles = (theme?: any) =>
  StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: theme.colors.primary,
      height: '100%',
    },
    header: {
      height: 144,
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    body: {
      flex: 1,
      backgroundColor: theme.colors.light,
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
      overflow: 'hidden',
      height: '100%',
    },
    footer: {
      //height: 400,
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
    review: {
      fontSize: 14,
      color: theme.colors.dark,
      paddingHorizontal: 16,
      paddingVertical: 16,
      //flex: 1,
    },
    separator: {
      backgroundColor: theme.colors.concrete,
      height: StyleSheet.hairlineWidth,
      marginHorizontal: 16,
      // width: 200,
    },
    list: {
      // minHeight: '100%',
    },
    loading: {
      ...theme.text.large,
      color: theme.colors.dark,
      marginTop: '50%',
      alignSelf: 'center',
    },
  });
