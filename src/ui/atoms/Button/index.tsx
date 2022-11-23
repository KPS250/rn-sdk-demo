import React from 'react';
import { Text, Pressable, ActivityIndicator } from 'react-native';
import { Theme } from '../../../constants/Theme';
import { styles as defaultStyle } from './styles';

type PropTypes = {
  style?: StyleMedia;
  buttonType?: string;
  label?: string;
  onPress?: Function;
  loading?: boolean;
  disabled?: boolean;
  theme?: any;
};

const Button = (props: PropTypes) => {
  const {
    style = {},
    buttonType = 'small',
    label = 'Next',
    onPress = () => {},
    loading = false,
    disabled = false,
    theme = Theme,
  } = props;

  const styles = defaultStyle(theme, buttonType);

  return (
    <Pressable
      style={[styles.container, style, disabled ? styles.disabled : {}]}
      onPress={!disabled ? () => onPress() : () => {}}
      android_ripple={{ color: theme.colors.concrete }}
    >
      {!loading && <Text style={styles.label}>{label}</Text>}
      {loading && <ActivityIndicator size="small" color={theme.colors.light} />}
    </Pressable>
  );
};

export default Button;
