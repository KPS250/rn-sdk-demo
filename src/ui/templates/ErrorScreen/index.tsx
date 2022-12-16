import React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { Theme } from '../../../constants/Theme';
import Button from '../../atoms/Button';
import { styles as defaultStyle } from './styles';

const ErrorScreen = (props?: any) => {
  //console.log('ErrorScreen', theme.children);
  const styles = defaultStyle(props?.theme ? props.theme : Theme);
  const { onPress } = props;

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.body}>
          <Image
            source={require('../../../assets/images/crash.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Something went wrong</Text>
          <Text style={styles.subtitle}>
            We are looking into it and will be right back soon
          </Text>
          <Button
            label="Retry"
            buttonType="large"
            style={styles.button}
            onPress={onPress}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ErrorScreen;
