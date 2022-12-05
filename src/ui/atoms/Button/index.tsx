import React from 'react';
import { Text, Pressable, ActivityIndicator } from 'react-native';
import { getTestIdProps } from '../../../utils';
import { buttonEvent } from '../../../analytics';
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
  testID?: string;
  analyticsData?: any;
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
    testID = '',
    analyticsData = {},
  } = props;

  const styles = defaultStyle(theme, buttonType);

  const onButtonPress = () => {
    if (!disabled) {
      onPress();
    }
    if (testID) {
      buttonEvent(testID, analyticsData);
    }
  };

  return (
    <Pressable
      style={[styles.container, style, disabled ? styles.disabled : {}]}
      onPress={onButtonPress}
      android_ripple={{ color: theme.colors.concrete }}
      {...getTestIdProps(testID)}
    >
      {!loading && <Text style={styles.label}>{label}</Text>}
      {loading && <ActivityIndicator size="small" color={theme.colors.light} />}
    </Pressable>
  );
};

export default Button;
