import { StyleSheet } from 'react-native';

export const styles = (theme: any) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      height: 56,
    },
    backBtn: {
      paddingHorizontal: 16,
    },
    backIcon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
      tintColor: theme.colors.light,
    },
    label: {
      color: theme.colors.light,
      textAlign: 'center',
      alignSelf: 'center',
      ...theme.text.large,
    },
    disabled: {
      backgroundColor: theme.colors.concrete,
    },
  });
};
