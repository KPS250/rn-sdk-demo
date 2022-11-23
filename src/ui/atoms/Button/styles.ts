import { StyleSheet } from 'react-native';

export const styles = (theme: any, buttonType: string) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.tertiary,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      ...theme.button[buttonType],
      width: '100%',
    },
    label: {
      color: theme.colors.white,
      textAlign: 'center',
      alignSelf: 'center',
      ...theme.text[buttonType],
    },
    disabled: {
      backgroundColor: theme.colors.concrete,
    },
  });
};
