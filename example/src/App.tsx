import * as React from 'react';

/*import {
  multiply,
  callApi,
  num,
  Login,
  AppRouter,
} from 'react-native-rn-aggregator-sdk';
*/
import 'react-native-gesture-handler';
import { AppStack } from './AppStack';

export default function App() {
  //const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    // multiply(3, 7).then(setResult);
  }, []);

  /*const getText = () => {
    callApi()
      .then((result) => {
        console.log('Results', result.data.count);
        setResult(result.data.count);
      })
      .catch((err) => console.log('Err', err));
  };
*/
  /*return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Pressable onPress={getText} style={{borderColor: 'black', padding: 10, borderWidth: 1}} >
        <Text>{'Call API'}</Text>
      </Pressable>
      <Login />
    </View>
  );
  */

  return <AppStack />;
}
