import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { Theme } from '../../../constants/Theme';
import { styles as defaultStyle } from './styles';
import { Icons } from '../../../constants/Icons';
import { useNavigation } from '@react-navigation/native';

type PropTypes = {
  style?: StyleMedia;
  label?: string;
  theme?: any;
};

const AppBar = (props: PropTypes) => {
  const { theme = Theme, label = '' } = props;
  const styles = defaultStyle(theme);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.backBtn}
        onPress={navigation.canGoBack() ? navigation.goBack : null}
      >
        <Image style={styles.backIcon} source={Icons.arrowBack} />
      </Pressable>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default AppBar;
